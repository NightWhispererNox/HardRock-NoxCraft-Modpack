//PlayerEvents.tick((event) => {
//    let player = event.player;
//
//    const nutrients = player.getFoodData().getNutrition().getNutrients();
//
//    //set the player health attribute to the average of the nutrients, plus the base health, 2x to let players reach up to double health with full nutrition.
//    player.setAttributeBaseValue(
//        'minecraft:generic.max_health',
//        20 *((nutrients[0]+nutrients[1]+nutrients[2]+nutrients[3]+nutrients[4])/5) * 2.0);
//})