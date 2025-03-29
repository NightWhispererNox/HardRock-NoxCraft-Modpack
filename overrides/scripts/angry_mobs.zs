import mods.angrymobs.AITweaks;
// priority 10

// wiki  - https://github.com/Mrbysco/AngryMobs/wiki/1.18


//  run when you look
//AITweaks.addMeleeAttackTweak(<entitytype:untamedwilds:trevally>, 1, 1.0F, 1.0D, false);
// all attack when one hurt
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:bison>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:boar>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:cow>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:goat>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:snake>, 1, true);
// jump on target
//AITweaks.addLeapTweak(<entitytype:untamedwilds:trevally>, 4, 0.3F);
// angry mobs attack when see player
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:trevally>, <entitytype:minecraft:player>, 1, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:tarantula>, <entitytype:minecraft:player>, 1, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:rhino>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:hippo>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:bear>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:big_cat>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:shark>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:large_snake>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:tfc:crocodile>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:tfc:grizzly_bear>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:tfc:panther>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:tfc:sabertooth>, <entitytype:minecraft:player>, 2, true);