function newTradesAdded(target) {
    let nbt = target.nbt
    const currentLevel = nbt?.VillagerData?.level ?? 0

    if (currentLevel == 1) {
        // Level 1 means that you can reset villager trades freely
        // by breaking the working block and placing it back.
        // Thus, we will always mark level 1 villagers just in case.
        return true
    }
    const wasLevelChanged = currentLevel !== target.persistentData.lastSeenLevel
    target.persistentData.merge(`{lastSeenLevel:${currentLevel}}`)
    
    return wasLevelChanged
}

function truncateNBT(item) {
    if (item.tag === '{}') {
        item.remove('tag')
    }
}

const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability')
const Calendars = Java.loadClass('net.dries007.tfc.util.calendar.Calendars')
function refreshFoodCreationDate(target) {
// Refreshes the decay timer for trades containing food.
    let nbt = target.nbt
    nbt.Offers.Recipes.forEach(trade => {
        if (/.+:food\/.+/.test(trade.sell.id)) { // Matching for '*:food/*'
            trade.sell.merge(`{ForgeCaps:{"tfc:food":{creationDate:${FoodCapability.getRoundedCreationDate()}}}}`)
        }
        if (/.+wine_bottle.*/.test(trade.sell.id)) { // Matching for '*wine_bottle*'
            // Wine needs exact current time instead of rounded time
            trade.sell.merge(`{tag:{wine:{creationDate:${Calendars.get().getTicks()}}}}`)
        }
    })
    target.nbt = nbt
}

function logErrorToConsole(errorType,additionalInfo,trade,target) {
    switch (errorType) {
        case 'unknownType':
            console.error(`Loading villager trades failure: Unknown randomization type "${additionalInfo}"`)
            break
        case 'unknownArmorMaterial':
            console.error(`Loading villager trades failure: Cannot assume armor material from Item ID`)
            break
        case 'noPriceSetsProvided':
            console.error(`Loading villager trades failure: No armor price sets provided`)
            break
        case 'materialLacksPrices':
            console.error(`Loading villager trades failure: Armor material "${additionalInfo}" has no price set`)
            break
        default:
            console.error(`Loading villager trades failure: Unknown error`)
            break
    }
    trade.remove('buy')
    console.error(`Please report this over at the hardrock discord! T^T`)
    console.error(`Affected item: ${trade.sell}`)
    console.error(`Target info dump: ${target}`)
}


const randomizationLists = {
    stoneType: ['granite','diorite','gabbro','shale','claystone','limestone','conglomerate','dolomite','chert','chalk',
                'rhyolite','basalt','andesite','dacite','quartzite','slate','phyllite','schist','gneiss','marble'],
    colorType: ['white','light_gray','gray','black','brown','red','orange','yellow',
                'lime','green','cyan','light_blue','blue','purple','magenta','pink'],
    woodType: ['acacia','ash','aspen','birch','blackwood','chestnut','douglas_fir',
               'hickory','kapok','mangrove','maple','oak','palm','pine',
               'rosewood','sequoia','spruce','sycamore','white_cedar','willow'],
    glassType: ['silica','hematitic','olivine','volcanic']
}
function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function applyRandomizers(offer,trade,target) {
// Replaces a string in Item ID with a random roll of a pre-coded list.

//////////////////////////////////////////////////
// Syntax breakdown:
const exampleInput =
  {
    kjsRandomize: [
      'woodType',   // Randomizer list name, from randomizationList
      'maple'       // String to match and replace in Item ID
    ]
  }
//
//////////////////////////////////////////////////
    const [type, itemToReplace] = offer.tag.kjsRandomize
    const list = randomizationLists[type]
    if (list) {
        const randomItem = getRandomItem(list)
        offer.id = offer.id.replace(itemToReplace, randomItem)
        offer.tag.remove('kjsRandomize')
        truncateNBT(offer)
    } else {
        offer.tag.merge(`{display:{Name:'[{"text":"Something went wrong..."}]',Lore:['{"text":"Item randomization script failed.","color":"red","italic":false}','{"text":"Please report this on the hardrock discord!","color":"red","italic":false}']}}`)
        logErrorToConsole('unknownType',type,trade,target)
    }
}


function rollArmorMaterial(normalizedMaterials) {
    const materialRoll = Math.random()
    let cumulativeProbability = 0
    for (const materialObject of normalizedMaterials) {
        cumulativeProbability += Object.values(materialObject)[0]
        if (materialRoll <= cumulativeProbability) {
            return Object.keys(materialObject)[0]
        }
    }
}
function getFilteredRandomItem(list,blacklist) {
    const filteredList = list.filter(item => !blacklist.includes(item))
    return getRandomItem(filteredList)
}
function getArmorMaterial(armorMaterialsArray,trade) {
    if (armorMaterialsArray.length > 0) {
        // Normalize probabilities
        let totalProbability = 0
        armorMaterialsArray.forEach(materialObject => {
            totalProbability += Object.values(materialObject)[0]
        })
        let normalizedMaterials = armorMaterialsArray.map(materialObject => {
            const result = {}
            result[Object.keys(materialObject)[0]] = Object.values(materialObject)[0] / totalProbability
            return result
        })
        return rollArmorMaterial(normalizedMaterials)
    } else if (/.+:metal\/.+/.test(trade.sell.id)) { // Matching for '*:metal/*'
        return trade.sell.id.match(/[^/]+$/) // Any characters after last "/" symbol
    }
}
const trimMaterialList = ['tfc:amethyst','tfc:diamond','tfc:emerald','tfc:lapis_lazuli',
                          'tfc:opal','tfc:pyrite','tfc:ruby','tfc:sapphire','tfc:topaz',
                          'tfc:bismuth','tfc:gold','tfc:rose_gold','tfc:silver','tfc:sterling_silver']
const trimPatternList = ['minecraft:sentry','minecraft:vex','minecraft:wild','minecraft:coast',
                         'minecraft:dune','minecraft:wayfinder','minecraft:raiser','minecraft:shaper',
                         'minecraft:host','minecraft:ward','minecraft:silence','minecraft:tide',
                         'minecraft:snout','minecraft:rib','minecraft:eye','minecraft:spire']

function applyArmorDecorator(offer,trade,target) {
// A function for consistent armor item generation.

//////////////////////////////////////////////////
// Syntax breakdown:
const exampleInput =
  {
    kjsArmorDecorator: {            // A random trim will be generated and cached into the villager's data.
      instanceID: 1,                // Same IDs will mean same random trim for different items. ID defaults to 1.
                                    // Same IDs will by default also apply the same armor material (see syncArmorMaterial below)

      trimMaterialBlacklist: [      // (optional) List of Trim Materials to blacklist when generating a new trim.
        'tfc:lapis_lazuli',         // This blacklist is applied when pulling from trimMaterialList.
        'tfc:bismuth'               // 
      ],
      trimPatternBlacklist: [       // (optional) List of Trim Patterns to blacklist when generating a new trim.
        'minecraft:snout',          // This blacklist is applied when pulling from trimPatternList.
        'minecraft:silence'         // 
      ],
      randomizedArmorMaterials: [   // (optional) List of armor materials to inject into Item ID.
        {                           // Can contain multiple entries to randomize armor material.
          'steel': 0.75             // 
        },                          // Each entry contains material name and the probability for it to roll.
        {                           // Can be defined by probability or by weight: 0.75 and 0.25 are the same as 3 and 1
          'black_steel': 0.25       // 
        }                           // The roll will then be saved into cachedArmorMaterial.
      ],
      materialPricing: [            // (required) Contains data for the prices of each material.
        {                           // Each entry must contain four arrays defining each armor piece.
          'steel': [                // 
            [0, 0, 16],             // An array contains up to three values:
            [0, 0, 20],             // the amount of copper, electrum and steel coins respectively.
            [0, 0, 16],             // Only two types of coins can be present at most at once due to how villagers work.
            [0, 0, 12]              // 
          ]                         // If there are less than three values, then the missing values will be assumed to 0.
        },                          // For example, [1, 2, 0] can be written as [1, 2], and [1, 0, 0] can be just [1].
        {                           // 
          'black_steel': [          // Material name
            [0, 8, 22],             // Helmet price
            [0, 10, 28],            // Chestplate price
            [0, 8, 22],             // Leggings price
            [0, 6, 16]              // Boots price
          ]                         //
        }
      ],
      cachedArmorMaterial: 'steel', // (optional) When there is no random material roll, the script will try to infer
                                    // the material name from Item ID. You can pre-define the material manually in case that fails.

      syncArmorMaterial: true       // Set to False to disable reading cached material and to force a random roll or an ID assumption.
    }
  }
//
//////////////////////////////////////////////////

    // 
    const decoratorInput = offer.tag.kjsArmorDecorator
    const armorMaterialsArray = decoratorInput.randomizedArmorMaterials || []
    const localID = decoratorInput.instanceID || 1
    const trimMaterialBlacklist = decoratorInput.trimMaterialBlacklist ? JSON.parse(decoratorInput.trimMaterialBlacklist) : []
    const trimPatternBlacklist = decoratorInput.trimPatternBlacklist ? JSON.parse(decoratorInput.trimPatternBlacklist) : []
    const materialPricing = decoratorInput.materialPricing
    const syncArmorMaterialFlag = decoratorInput.syncArmorMaterial == 0 ? false : true

    let armorData = target.persistentData.armorData || []
    let armorInstance = armorData.find(instance => instance.instanceID === localID) // Hook to instance if one with given ID exists

    // Reading instance data:
    let piecesLeft = armorInstance?.piecesLeft ? JSON.parse(armorInstance.piecesLeft)
        : ['helmet','chestplate','greaves','boots']
    const trimMaterial = armorInstance?.trimMaterial || getFilteredRandomItem(trimMaterialList,trimMaterialBlacklist)
    const trimPattern = armorInstance?.trimPattern || getFilteredRandomItem(trimPatternList,trimPatternBlacklist)
    const armorMaterial = syncArmorMaterialFlag ?
        armorInstance?.cachedArmorMaterial || getArmorMaterial(armorMaterialsArray,trade)
        : getArmorMaterial(armorMaterialsArray,trade)

    // Stop everything if armorMaterial or materialPricing can't be obtained
    if (!armorMaterial) {logErrorToConsole('unknownArmorMaterial',null,trade,target); return}
    if (!materialPricing) {logErrorToConsole('noPriceSetsProvided',null,trade,target); return}

    // Roll an armor piece and remove it from piecesLeft
    if (piecesLeft.length < 1) {piecesLeft = ['helmet','chestplate','greaves','boots']} // Force new pieces in if empty
    const rolledArmorPiece = getRandomItem(piecesLeft)
    const index = piecesLeft.indexOf(rolledArmorPiece)
    piecesLeft.splice(index, 1)

    // Freeze all data to villager's data for future executions
    target.persistentData.merge(`
        {
            "armorData": [
            {
                "instanceID": ${localID},
                "cachedArmorMaterial": "${armorMaterial}",
                "syncArmorMaterial": ${syncArmorMaterialFlag},
                "piecesLeft": ${JSON.stringify(piecesLeft)},
                "trimMaterial": "${trimMaterial}",
                "trimPattern": "${trimPattern}"
            }
            ]
        }`
    )
    // Parse material price data
    const specificMaterialPricing = Object.values(materialPricing.find(entry => {return Object.keys(entry)[0] == armorMaterial}))[0] || null
    if (!specificMaterialPricing) {logErrorToConsole('unknownArmorMaterial',armorMaterial,trade,target); return}

    const singlePiecePrice = specificMaterialPricing[['helmet','chestplate','greaves','boots'].indexOf(rolledArmorPiece)]

    // Apply price to trade offer
    const coinTypes = ["assarius","ducat","gulden"]
    for (let i = 0; i < singlePiecePrice.length; i++) {
        if (singlePiecePrice[i] !== 0) {
            if (trade.buy.id == 'minecraft:air') {
                trade.buy.id = `lithiccoinstrading:refined_polished_${coinTypes[i]}`
                trade.buy.Count = singlePiecePrice[i]
                trade.buy.remove('tag')
            } else {
                trade.buyB.id = `lithiccoinstrading:refined_polished_${coinTypes[i]}`
                trade.buyB.Count = singlePiecePrice[i]
                trade.buyB.remove('tag')
                break
            }
        }
    }
    // Create armor item
    offer.id = `tfc:metal/${rolledArmorPiece}/${armorMaterial}`
    offer.tag.merge(`{Trim: {material: "${trimMaterial}", pattern: "${trimPattern}"}}`)
    offer.tag.remove('kjsArmorDecorator')
    if (offer.tag.display.Name == `[{"text":"Something went wrong..."}]`) {
        offer.tag.remove('display')
    }
}


function applyDecorators(target) {
// Iterates over every trade and calls all item transformation functions.
    let nbt = target.nbt

    nbt.Offers.Recipes.forEach(trade => {
        const offer = trade.sell
        if (offer.tag?.kjsForgeCaps) {
            // Transfers any data from "kjsForgeCaps" NBT field into actual item forgecaps.
            offer.ForgeCaps = offer.tag.kjsForgeCaps
            offer.tag.remove('kjsForgeCaps')
            truncateNBT(offer)
        }
        if (offer.tag?.kjsRandomize) {
            applyRandomizers(offer,trade,target)
        }
        if (offer.tag?.kjsArmorDecorator) {
            applyArmorDecorator(offer,trade,target)
        }
        if (offer.tag?.CustomPotionColor == 16711935) {
            // This is the base neon pink uncraftable potion color that gets applied to
            // villager-sold tipped arrows when no color is provided.
            // We get rid of it to have the game use the potion effect's color.
            offer.tag.remove('CustomPotionColor')
        }
    })
    target.nbt = nbt
}


const Villager = Java.loadClass('net.minecraft.world.entity.npc.Villager')
ItemEvents.entityInteracted(event => {
    const {target} = event
    if (target instanceof Villager) {
        if (target.nbt.VillagerData.profession != "minecraft:none" && target.nbt.VillagerData.profession != "minecraft:nitwit") {
            target.persistentData.merge(`{'initialized':true}`) // Dummy value. Merge calls for persistentData
            if (newTradesAdded(target)) {                       // are unreliable when persistentData is empty.
                applyDecorators(target)
            }
            refreshFoodCreationDate(target,event)
        }
    }
})
