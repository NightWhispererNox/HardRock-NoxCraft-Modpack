LootJS.modifiers((event) => {
    global.customOres.forEach(ore => {
    event
        .addBlockLootModifier("kubejs:ore/"+ore.name)
        .removeLoot(Ingredient.all)
        .addLoot("kubejs:ore/"+ore.name.split('/')[0]);
    })
});