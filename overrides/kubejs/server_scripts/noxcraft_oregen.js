const rocks = ['granite', 'diorite', 'gneiss', 'schist', 'dacite'];

TFCEvents.worldgenData(event => {
    const surfaceReplacementMap = [];
    const normalReplacementMap = [];

    rocks.forEach(rock => {
        surfaceReplacementMap.push(event.blockToWeightedBlockState(
            [
                `tfc:rock/raw/${rock}`.toString()
            ],
            [
                `70 kubejs:ore/poor_native_mithril/${rock}`.toString(),
                `25 kubejs:ore/normal_native_mithril/${rock}`.toString(),
                `5 kubejs:ore/rich_native_mithril/${rock}`.toString()
            ]
        ));
    });

    rocks.forEach(rock => {
        normalReplacementMap.push(event.blockToWeightedBlockState(
            [
                `tfc:rock/raw/${rock}`.toString()
            ],
            [
                `15 kubejs:ore/poor_native_mithril/${rock}`.toString(),
                `25 kubejs:ore/normal_native_mithril/${rock}`.toString(),
                `60 kubejs:ore/rich_native_mithril/${rock}`.toString()
            ]
        ));
    });

    console.log("Surface Replacement Map: " + JSON.stringify(surfaceReplacementMap));
    console.log("Normal Replacement Map: " + JSON.stringify(normalReplacementMap));

    event.discVein(
        `surface_native_mithril_vein`, surfaceReplacementMap, 24, 0.25, 40, 130, 20, 10, vein => 
            vein.indicator(100, 10, 20, 2, ["kubejs:ore/small_native_mithril"])
        , placement => {}
    );

    event.clusterVein(`normal_native_mithril_vein`, normalReplacementMap, 25, 0.6, -80, 20, 25, vein => {
        vein.indicator(100, 10, 20, 2, ["kubejs:ore/small_native_mithril"]);
    }, placement => {}
    );
});

ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'kubejs_tfc:surface_native_mithril_vein');
    event.add('tfc:in_biome/veins', 'kubejs_tfc:normal_native_mithril_vein');
});