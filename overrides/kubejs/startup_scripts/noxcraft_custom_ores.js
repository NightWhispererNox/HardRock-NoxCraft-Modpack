//priority: 11

const oreRarity = [
    'poor',
    'normal',
    'rich'
];

global.oreGrades = [
    'poor',
    'normal',
    'rich',
    'small'
];

const createOreVariants = (metal, rarity, rock) => {
    return {
        name: `${rarity}_native_${metal}/${rock}`,
        rarity: rarity,
        rock: rock,
        metal: metal
    };
};

global.customOres = [];

global.noxcraftMetals.forEach(metal => {
    global.tfcRockTypes.forEach(rock => {
        oreRarity.forEach(rarity => {
            global.customOres.push(createOreVariants(metal.name, rarity, rock));
        });
    });
});

StartupEvents.registry('block', event => {
    global.noxcraftMetals.forEach(metal => {
        event
            .create("ore/small_native_" + metal.name, 'tfc:ground_cover')
            .displayName(global.formatItemName('small_native_'+metal.name))
            .ore()
            .textureAll(`kubejs:block/ore/rich_native_${metal.name}`.toString())
    });

    global.customOres.forEach(ore => {
        event
            .create("ore/" + ore.name)
            .defaultCutout()
            .displayName(global.formatItemName(`${ore.rarity}_${ore.rock}_${ore.metal}_Ore`.toString()))
            //.notSolid()
            .stoneSoundType()
            .hardness(5)
            .resistance(3)
            .requiresTool(true)
            .modelJson = {
                parent:"kubejs:block/ore",
                textures: {
                    all:`kubejs:block/rock/raw/${ore.rock}`.toString(),
                    overlay: `kubejs:block/ore/${ore.rarity}_native_${ore.metal}`
                }
            }
    });
});

StartupEvents.registry('item', event => {
    global.noxcraftMetals.forEach(metal => {
        oreRarity.forEach(grade => {
            event
                .create(`ore/${grade}_native_${metal.name}`.toString())
                .texture('layer0', `kubejs:item/ore/${grade}_native_${metal.name}`.toString())
                .displayName(global.formatItemName(`${grade}_${metal.name}_Ore`));
        });
    });
})
console.log(global.customOres);