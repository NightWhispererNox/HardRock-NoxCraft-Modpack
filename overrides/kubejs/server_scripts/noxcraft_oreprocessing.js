// filepath: /d:/Dev/NoxCraft-V2---Hardrock-TFC-4-Variant-pack/kubejs/server_scripts/noxcraft_oreprocessing.js
TFCEvents.data(event => {
    global.noxcraftMetals.forEach(metal => {
        let metalPowder = `kubejs:powder/native_${metal.name}`;
        let whiteSand = `tfcorewashing:pile_white_sand`;
        let chunks = `kubejs:chunks_${metal.name}`;
        let dirtyDust = `kubejs:dirty_dust_${metal.name}`;
        let dirtyPile = `kubejs:dirty_pile_${metal.name}`;
        let metalPellet = `kubejs:pellet_${metal.name}`;
        let metalBriquet = `kubejs:briquet_${metal.name}`;
        let rockyChunks = `kubejs:rocky_chunks_${metal.name}`;

            // Sluicing rocky chunks to get chunks and a 50% chance of dirty pile
        event.sluicing(rockyChunks, 'kubejs:sluicing/rocky_chunks_'+metal.name);

        // Sluicing dirty dust to get metal powder, white sand, and a 15% chance of dirty pile
        event.sluicing(dirtyDust, 'kubejs:sluicing/dirty_dust_'+metal.name);

        // Adding itemHeat for every item in global.metalParts that can be melted
        global.metalParts.forEach(part => {
            let partName = `kubejs:${part.resourceLocation}`.replace('<metal>', metal.name)
            if (part.heat_capacity && Ingredient.of(partName)) {
                event.itemHeat(
                    Ingredient.of(partName),
                    part.heat_capacity,
                    metal.forging_point!=0 ? metal.forging_point : null,
                    metal.wielding_point!=0 ? metal.wielding_point : null,
                    `${partName}_heating`
                );
            }
        });
    });
});


ServerEvents.recipes(event => {
    global.noxcraftMetals.forEach(metal => {
        let chunks = `kubejs:chunks_${metal.name}`;
        
        let dirtyDust = `kubejs:dirty_dust_${metal.name}`;
        let dirtyPile = `kubejs:dirty_pile_${metal.name}`;
        let metalPowder = `kubejs:powder/native_${metal.name}`;
        let metalPellet = `kubejs:pellet_${metal.name}`;
        let metalBriquet = `kubejs:briquet_${metal.name}`;
        let rockyChunks = `kubejs:rocky_chunks_${metal.name}`;

        global.oreGrades.forEach(grade => {
            let ore = `kubejs:ore/${grade}_native_${metal.name}`.toString();
            let resultCount = 0
            switch (grade){
                case 'rich':
                    resultCount = 7
                    break
                case 'normal':
                    resultCount = 5
                    break
                case 'poor':
                    resultCount = 3
                    break
                default:
                    resultCount = 2
                    break
            }
            // Crafting ore with hammer to get rocky chunks
            event.shapeless(resultCount + "x " + rockyChunks.toString(),['#forge:tools/hammers', ore]).damageIngredient(Ingredient.of('#forge:tools/hammers'));
        });

        // Quern processing
        event.recipes.tfc.quern(TFC.itemStackProvider.of(dirtyDust).copy(),Ingredient.of(chunks));

        // Create millstone processing
        event.recipes.create.milling([
            dirtyDust,
            Item.of(dirtyPile).withChance(0.15)
        ], chunks);

        // Create crushing processing
        event.recipes.create.crushing([
            dirtyDust,
            Item.of(dirtyPile).withChance(0.15)
        ], chunks);

        // Shapeless crafting recipe to combine 4 metal powders into 1 metal pellet
        event.recipes.minecraft.crafting_shapeless({
            ingredients: [
                { item: metalPowder },
                { item: metalPowder },
                { item: metalPowder },
                { item: metalPowder }
            ],
            result: {
                item: metalPellet,
                count: 1
            }
        });

        // Shapeless crafting recipe to convert 1 metal pellet into 4 metal powders
        event.recipes.minecraft.crafting_shapeless({
            ingredients: [
                { item: metalPellet }
            ],
            result: {
                item: metalPowder,
                count: 4
            }
        });

        // Shapeless crafting recipe to combine 4 metal pellets into 1 metal briquet
        event.recipes.minecraft.crafting_shapeless({
            ingredients: [
                { item: metalPellet },
                { item: metalPellet },
                { item: metalPellet },
                { item: metalPellet }
            ],
            result: {
                item: metalBriquet,
                count: 1
            }
        });

        // Shapeless crafting recipe to combine 4 dirty piles into 1 dirty dust
        event.recipes.minecraft.crafting_shapeless({
            ingredients: [
                { item: dirtyPile },
                { item: dirtyPile },
                { item: dirtyPile },
                { item: dirtyPile }
            ],
            result: {
                item: dirtyDust,
                count: 1
            }
        });

        // Shapeless crafting recipe to convert 1 metal briquet into 4 metal pellets
        event.recipes.minecraft.crafting_shapeless({
            ingredients: [
                { item: metalBriquet }
            ],
            result: {
                item: metalPellet,
                count: 4
            }
        });

        // Melting into fluid
        global.metalParts.forEach(part => {
            let partName = 'kubejs:'+part.resourceLocation.replace('<metal>', metal.name);
            console.log('Adding melting to: '+partName)
            if (part.mb && Ingredient.of(partName).isEmpty() === false) {
                event.recipes.tfc.heating(Ingredient.of(partName), metal.melting_point)
                    // Additional methods
                    .resultFluid(Fluid.of('kubejs:' + metal.name, part.mb));
            }
        });
        event.recipes.tfc.casting(Item.of('kubejs:metal/ingot/'+metal.name), Ingredient.of('tfc:ceramic/ingot_mold'),  TFC.fluidStackIngredient('kubejs:'+metal.name, 100), 0.05)
        event.recipes.tfc.casting(Item.of('kubejs:metal/ingot/'+metal.name), Ingredient.of('tfc:ceramic/fire_ingot_mold'),  TFC.fluidStackIngredient('kubejs:'+metal.name, 100), 0)
    });
});