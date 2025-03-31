let tfcTrees = [
    "acacia",
    "ash",
    "aspen",
    "birch",
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "mangrove",
    "maple",
    "oak",
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow"
]

let beneathTrees = [
    "crimson",
    "warped"
]

ClientEvents.highPriorityAssets(event => {
    addTotemicAssets(event)
})

ClientEvents.lang('en_us', event => {
    addTotemicLang(event)
})


const addTotemicAssets = (/** @type {Internal.GenerateClientAssetsEventJS} */ event) => {
    const addBase = (mod, wood) => {
        event.add(`${mod}:models/block/wood/log/${wood}_totem_base`, {
            "parent": "totemic:block/totem_base",
            "textures": {
                "bark": `${mod}:block/wood/log/${wood}`,
                "particle": `${mod}:block/wood/log/${wood}`,
                "top": `${mod}:block/wood/log_top/${wood}`,
                "wood": `${mod}:block/wood/stripped_log/${wood}`
            }
        })
    }

    const addPole = (mod, wood) => {
        event.add(`${mod}:models/block/wood/log/${wood}_totem_pole`, {
            "textures": {
                "bark": `${mod}:block/wood/log/${wood}`,
                "particle": `${mod}:block/wood/log/${wood}`,
                "top": `${mod}:block/wood/log_top/${wood}`,
                "wood": `${mod}:block/wood/stripped_log/${wood}`
            }
        })
    }
    tfcTrees.forEach((wood) => {
        addBase("tfc", wood)
        addPole("tfc", wood)
    })
    beneathTrees.forEach((wood) => {
        addBase("beneath", wood)
        addPole("beneath", wood)
    })

}

const addTotemicLang = (/** @type {Internal.GenerateClientLangEventJS} */ event) => {

    const addLang = (mod, wood) => {
        event.add(`block.${mod}.wood_log_${wood}_totem_base`, `${Utils.snakeCaseToTitleCase(wood)} Totem Base`)
        event.add(`block.${mod}.wood_log_${wood}_totem_pole`, `${Utils.snakeCaseToTitleCase(wood)} Totem Pole (%s)`)
    }

    tfcTrees.forEach((wood) => {
        addLang("tfc", wood)
    })
    beneathTrees.forEach((wood) => {
        addLang("beneath", wood)
    })
}