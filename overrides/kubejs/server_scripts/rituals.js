priority: 0
ServerEvents.recipes(event => {
   event.recipes.summoningrituals
        .altar("minecraft:lightning_rod")
        .itemOutput("irons_spellbooks:lightning_bottle")
        .input("minecraft:glass_bottle");
        // more code
});