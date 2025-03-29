//priority: 0
let CarWood = [
	"oak",
	"spruce",
	"birch",
	"jungle",
	"acacia",
	"dark_oak",
	"crimson",
	"warped"
]
let CarColor = [
	"white",
	"orange",
	"magenta",
	"light_blue",
	"yellow",
	"green",
	"pink",
	"gray",
	"light_gray",
	"cyan",
	"purple",
	"purple",
	"blue",
	"brown",
	"green",
	"red",
	"black"
]

// ===============================================================================================================
// ================== BLOCKS ========================= BLOCKS ========================= BLOCKS ===================
// ===============================================================================================================
ServerEvents.tags('block', event => {
	event.add('chiselsandbits:chiselable/blocked', [
		'#forge:ores',
		'#minecraft:water',
		'#minecraft:lava',
		'#tfc:rock/raw'
	])
	event.add('tfc:can_be_snow_piled', [
		//'geolosys:lignite_ore_sample',
	])
	//event.add('tfc:can_trigger_collapse', [
	//	'exnihilosequentia:infesting_leaves',
	//	'exnihilosequentia:infested_leaves'
	//])
	//event.add('tfc:can_start_collapse', [
	//	'exnihilosequentia:infesting_leaves',
	//	'exnihilosequentia:infested_leaves'
	//])
	//event.add('tfc:can_collapse', [
	//	'exnihilosequentia:infesting_leaves',
	//	'exnihilosequentia:infested_leaves'
	//])
	//event.remove('minecraft:leaves', [
	//	'#dynamictrees:leaves',
	//	'tfc:wood/leaves/acacia',
	//	'tfc:wood/leaves/ash',
	//	'tfc:wood/leaves/aspen',
	//	'tfc:wood/leaves/birch',
	//	'tfc:wood/leaves/blackwood',
	//	'tfc:wood/leaves/chestnut',
	//	'tfc:wood/leaves/douglas_fir',
	//	'tfc:wood/leaves/hickory',
	//	'tfc:wood/leaves/kapok',
	//	'tfc:wood/leaves/mangrove',
	//	'tfc:wood/leaves/maple',
	//	'tfc:wood/leaves/palm',
	//	'tfc:wood/leaves/pine',
	//	'tfc:wood/leaves/rosewood',
	//	'tfc:wood/leaves/sequoia',
	//	'tfc:wood/leaves/spruce',
	//	'tfc:wood/leaves/sycamore',
	//	'tfc:wood/leaves/white_cedar'
	//])
	//event.add('forge:noinfused', [
	//	'dttfc:acacia_leaves',
	//	'dttfc:ash_leaves',
	//	'dttfc:aspen_leaves',
	//	'dttfc:birch_leaves',
	//	'dttfc:blackwood_leaves',
	//	'dttfc:chestnut_leaves',
	//	'dttfc:douglas_fir_leaves',
	//	'dttfc:hickory_leaves',
	//	'dttfc:kapok_leaves',
	//	'dttfc:maple_leaves',
	//	'dttfc:mangrove_leaves',
	//	'dttfc:palm_leaves',
	//	'dttfc:pine_leaves',
	//	'dttfc:rosewood_leaves',
	//	'dttfc:sequoia_leaves',
	//	'dttfc:spruce_leaves',
	//	'dttfc:sycamore_leaves',
	//	'dttfc:white_cedar_leaves'
	//])
	event.add('minecraft:mineable/axe', [
		'sewingkit:sewing_station',
		'sewingkit:storing_sewing_station'
	])
	event.add('twilightforest:portal/edge', [
		'#tfc:dirt',
		'#tfc:grass',
		'#tfc:clay_grass',
		'#tfc:farmland'
	])
	event.add('forge:immovable', [
		//'domum_ornamentum:vanilla_doors_compat',
		//'domum_ornamentum:fancy_door',
		'butchersdelight:rackhoglin',
		'butchersdelight:rackgoat',
		'butchersdelight:racksheep',
		'butchersdelight:rackcow',
		'butchersdelight:rackhoglin',
		'butchersdelight:rackhoglin',
		//'exnihilosequentia:stone_barrel',
		'tfc:charcoal_forge',
		'#firmalife:cheese_wheels',
		'firmalife:mixing_bowl',
		'firmalife:iron_composter',
		'firmalife:drying_mat',
		'firmalife:solar_drier',
		'tfc:drying_bricks/silt',
		'tfc:drying_bricks/silty_loam',
		'tfc:drying_bricks/sandy_loam',
		'tfc:drying_bricks/loam',
		'tfc:ingot_pile',
		'tfc:firepit',
		'tfc:pot',
		'tfc:composter',
		'tfc:grill',
		'tfc:bloomery',
		'tfc:bloom',
		'tfc:molten',
		'tfcchannelcasting:mold_table',
		'tfchomestead:full_jar',
		'tfchomestead:jar',
		'untamedwilds:block_burrow',
		//'#tfc:wild_fruits',
		'#tfc:anvils',
		'#tfc:sluices'
	])
	event.add('tfc:tornado_grab', [
		'#tfc:plants',
		'tfc:nest_box',
		'create:shaft',
		'create:cogwheel',
		'create:large_cogwheel',
		'create:depot',
		'create:fluid_pipe',
		'create:chute',
		'create:sail_frame',
		'create:white_sail',
		//'exnihilosequentia:infesting_leaves',
		//'exnihilosequentia:infested_leaves',
		'#forge:thatch',
		'firmalife:large_planter',
		'firmalife:quad_planter',
		'firmalife:bonsai_planter',
		'firmalife:hanging_planter',
		'firmalife:trellis_planter',
		'firmalife:beehive',
		'firmalife:treated_wood_greenhouse_door',
		'firmalife:treated_wood_greenhouse_roof_top',
		'firmalife:treated_wood_greenhouse_roof',
		'firmalife:weathered_treated_wood_greenhouse_door',
		'firmalife:weathered_treated_wood_greenhouse_roof_top',
		'firmalife:weathered_treated_wood_greenhouse_roof'
	])
	event.remove('minecraft:needs_iron_tool', [
		'minecraft:packed_ice',
    	'minecraft:blue_ice'
	])
	event.remove('minecraft:needs_stone_tool', [
		'minecraft:ice'
	])
	event.add('forge:punch_hurt', [
		'#minecraft:logs',
		//'#forge:stone'
	])
	event.add('forge:asphalt', [
		'car:asphalt'
	])
})
// ===============================================================================================================
// ================== FLUIDS ========================= FLUIDS ========================= FLUIDS ===================
// ===============================================================================================================
ServerEvents.tags('fluid', event => {
	event.remove('minecraft:water', ['createaddition:bioethanol'])
	event.remove('forge:chocolate', ['create:chocolate'])
	event.remove('forge:crude_oil', ['ad_astra:oil', 'pneumaticcraft:oil', 'createdieselgenerators:crude_oil'])
	event.remove('forge:diesel', ['createdieselgenerators:diesel','pneumaticcraft:diesel'])
	event.remove('forge:biodiesel', ['createdieselgenerators:biodiesel', 'immersiveengineering:biodiesel', 'pneumaticcraft:biodiesel'])
	event.remove('forge:kerosene', ['pneumaticcraft:kerosene'])
	//event.remove('forge:naphtha', ['tfmg:naphtha','tfmg:flowing_naphtha'])
	//event.remove('forge:creosote', ['tfmg:napalm'])
	event.remove('forge:napalm', [])
	event.remove('forge:gasoline', ['createdieselgenerators:gasoline', 'createdieselgenerators:flowing_gasoline', 'pneumaticcraft:gasoline'])
	//event.remove('forge:lubricant', ['pneumaticcraft:lubricant'])

	event.remove('forge:ethanol', ['pneumaticcraft:ethanol', 'createdieselgenerators:ethanol', 'createdieselgenerators:flowing_ethanol'])
	event.remove('forge:plantoil', ['pneumaticcraft:vegetable_oil', 'createaddition:flowing_seed_oil', 'immersiveengineering:plantoil', 'createdieselgenerators:plant_oil', 'createdieselgenerators:flowing_plant_oil'])
		
	event.remove('forge:molten_aluminum', 'createmetallurgy:molten_aluminum')
	event.remove('forge:molten_steel', ['createmetallurgy:molten_steel', 'tfmg:molten_steel','createbigcannons:molten_steel'])
	event.remove('forge:molten_plastic',  ['tfmg:liquid_plastic'])
	event.remove('forge:sulfuric_acid',  ['vintageimprovements:sulfuric_acid'])
	event.remove('forge:molten_cast_iron', ['createbigcannons:molten_cast_iron'])
	event.remove('forge:molten_bronze', ['createbigcannons:molten_bronze'])
	
	event.add('forge:heavy_oil', ['tfmg:heavy_oil'])
	event.add('forge:ethylene', ['mekanism:ethene'])

	event.add('forge:active_redstone', ['kubejs:active_redstone'])
	event.add('forge:molten_aluminum', ['tfc_ie_addon:metal/aluminum'])
	event.add('forge:molten_andesite_alloy', ['kubejs:andesite_alloy'])
	event.add('forge:molten_bismuth', ['tfc:metal/bismuth'])
	event.add('forge:molten_bismuth_bronze', ['tfc:metal/bismuth_bronze'])
	event.add('forge:molten_black_bronze', ['tfc:metal/black_bronze'])
	event.add('forge:molten_black_steel', ['tfc:metal/black_steel'])
	event.add('forge:molten_blue_steel', ['tfc:metal/blue_steel'])
	event.add('forge:molten_brass', ['tfc:metal/brass'])
	event.add('forge:molten_bronze', ['tfc:metal/bronze'])
	event.add('forge:molten_cast_iron', ['tfc:metal/cast_iron'])
	event.add('forge:molten_constantan', ['tfc_ie_addon:metal/constantan'])
	event.add('forge:molten_copper', ['tfc:metal/copper'])
	event.add('forge:molten_electrum', ['tfc_ie_addon:metal/electrum'])
	event.add('forge:molten_gold', ['tfc:metal/gold'])
	event.add('forge:molten_iron_quartz', ['kubejs:iron_quartz'])
	event.add('forge:molten_quartz', ['kubejs:quartz'])
	event.add('forge:molten_diamond_steel', ['kubejs:diamond_steel'])
	event.add('forge:molten_glass', ['kubejs:glass'])
	event.add('forge:molten_lead', ['tfc_ie_addon:metal/lead'])
	event.add('forge:molten_nickel', ['tfc:metal/nickel'])
	event.add('forge:molten_plastic', ['tfmg:liquid_plastic', 'pneumaticcraft:plastic'])
	event.add('forge:molten_red_steel', ['tfc:metal/red_steel'])
	event.add('forge:molten_rose_gold', ['tfc:metal/rose_gold'])
	event.add('forge:molten_silver', ['tfc:metal/silver'])
	event.add('forge:molten_steel', ['tfc:metal/steel'])
	event.add('forge:molten_sterling_silver', ['tfc:metal/sterling_silver'])
	event.add('forge:molten_tin', ['tfc:metal/tin'])
	event.add('forge:molten_unknown', ['tfc:metal/unknown'])
	event.add('forge:molten_uranium', ['tfc_ie_addon:metal/uranium'])
	event.add('forge:molten_weak_blue_steel', ['tfc:metal/weak_blue_steel'])
	event.add('forge:molten_weak_red_steel', ['tfc:metal/weak_red_steel'])
	event.add('forge:molten_weak_steel', ['tfc:metal/weak_steel'])
	event.add('forge:molten_wrought_iron', ['tfc:metal/wrought_iron'])
	event.add('forge:molten_zinc', ['tfc:metal/zinc'])
	event.add('forge:molten_netherite', ['createmetallurgy:molten_netherite'])
	event.add('tfc:andesite_alloy', ['kubejs:andesite_alloy'])
	event.add('tfc:andesite_stone', ['kubejs:andesite_stone'])
	event.add('tfc:glass', ['kubejs:glass'])
	event.add('tfc:iron_quartz', ['kubejs:iron_quartz'])
	event.add('tfc:quartz', ['kubejs:quartz'])
	event.add('tfc:diamond_steel', ['kubejs:diamond_steel'])
	// water & more =========================
	event.add('tfc:mixable', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water','immersiveengineering:creosote'])
	event.add('tfc:drinkables', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'minecraft:milk','firmalife:yak_milk','firmalife:goat_milk'])
	event.add('tfc:infinite_water', ['kubejs:purified_water'])
	event.add('minecraft:waters', ['minecraft:water', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'tfc:spring_water'])
	event.add('minecraft:water', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water'])
	//event.add('tfc:brine', ['mekanism:brine'])
	event.add('forge:brine', ['tfc:brine'])
	event.add('forge:chocolate', ['create:chocolate', 'firmalife:chocolate', 'tfcchannelcasting:milk_chocolate', 'tfcchannelcasting:white_chocolate', 'tfcchannelcasting:dark_chocolate'])
	event.add('forge:napalm', ['tfmg:napalm'])
	// usable  ===============================
	event.add('lithiccoins:usable_in_coin_mold', ['kubejs:glass'])
	event.add('tfc:usable_in_ingot_mold', ['kubejs:glass','kubejs:andesite_alloy', 'kubejs:andesite_stone', 'kubejs:quartz', 'kubejs:iron_quartz', 'kubejs:diamond_steel'])
	event.add('tfc:usable_in_barrel', ['firmalife:sugar_water', 'create:honey', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'tfc:spring_water', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_blue_steel_bucket', ['firmalife:sugar_water', 'create:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'kubejs:active_redstone','kubejs:glass', 'kubejs:andesite_stone', 'kubejs:andesite_alloy', 'kubejs:quartz', 'kubejs:diamond_steel', 'kubejs:iron_quartz', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_red_steel_bucket', ['firmalife:sugar_water', 'create:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water',  'kubejs:active_redstone','kubejs:glass', 'kubejs:andesite_stone', 'kubejs:andesite_alloy', 'kubejs:quartz', 'kubejs:diamond_steel', 'kubejs:iron_quartz', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_wooden_bucket', ['firmalife:sugar_water', 'create:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'tfc:spring_water', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_pot', ['firmalife:sugar_water', 'create:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea'])
	event.add('tfc:usable_in_jug', ['create:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'tfc:tallow', 'create:tea'])
	event.add('firmalife:usable_in_mixing_bowl', ['create:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'createaddition:seed_oil'])
	event.add('firmalife:usable_in_vat', ['create:honey','immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water'])
})
// ========== ENTITY TYPE
// ===============================================================================================================
// ================== ITEMS ========================= ITEMS ========================= ITEMS ======================
// ===============================================================================================================
ServerEvents.tags('item', event => {
	event.add('forge:dusts/amethyst', 'kubejs:clean_amethyst_powder')
	event.add('tfc:gem_powders', [
		'createaddition:diamond_grit',
		'mekanism:dust_emerald',
		'kubejs:clean_amethyst_powder'
	])
	event.add('twilightforest:portal/activator', 'kubejs:magic_crystal')
	event.remove('twilightforest:portal/activator', ['#forge:gems/diamond'])
	//event.remove('forge:tools/saws', '#forge:tools/axes')
	//event.add('forge:saw_blade', 'immersiveengineering:sawblade')
	event.add('forge:press_head', 'tfc_metal_items:steel_pressing_head')
	event.add('tfc:compost_browns_low', ['mekanism:bio_fuel', '#forge:sawdust', '#forge:bark_powder'])
	event.add('tfc:compost_greens_low', ['kubejs:seed_biomass', 'tfc_stone_tools:plant_string'])
	event.add('tfc:compost_greens', ['createaddition:biomass', 'tfc_stone_tools:green_plant_fabric'])
	event.add('forge:barrels', '#tfcbarrels:barrels')
	event.add('forge:barrels/wooden', '#tfcbarrels:barrels')
	event.add('forge:tools/knives', '#tfc:knives')
	event.add('farmersdelight:tools/knives', ['htm:flint_knife'])
	event.add('forge:tools/hammers', '#tfc:hammers')
	event.add('forge:tools/saws', '#tfc:saws')
	event.add('forge:tools/axes', '#tfc:axes')
	event.add('forge:axes', '#tfc:axes')
	event.add('tfc:dog_food', 'farmersdelight:dog_food')
	event.add('tfc:horse_food', 'farmersdelight:horse_feed')
	event.add('tfc:mule_food', 'farmersdelight:horse_feed')
	event.add('tfc:donkey_food', 'farmersdelight:horse_feed')
	event.add('tfc:sandwich_bread', 'pneumaticcraft:sourdough_bread')
	//event.add('tfc:powders/coppers', ['tfc:powder/native_copper', 'tfc:powder/malachite', 'tfc:powder/tetrahedrite']),
	//event.add('tfc:powders/irons', ['tfc:powder/hematite', 'tfc:powder/limonite', 'tfc:powder/magnetite']),
	//
	event.add('vintageimprovements:anvils', ['immersiveengineering:storage_steel'])
	event.add('curios:hands', ['#tfchotornot:insulating'])
	event.add('forge:crops/flax', 'textile:flax')
	event.add('forge:asphalt', ['car:asphalt'])
	event.add('forge:concrete', ['immersiveengineering:concrete'])
	event.add('forge:engine/piston', ['createdieselgenerators:engine_piston', "car:engine_piston"])
	event.add('forge:string', ['tfmg:synthetic_string'])
	event.add('forge:string/green_plant', ['tfc_stone_tools:plant_string'])
	event.add('forge:string/strong', ['minecraft:string', 'tfmg:synthetic_string', 'textile:cottton_string', 'tfc:wool_yarn', 'firmalife:pineapple_yarn'])
	event.add('forge:string/reinforced', ['sns:reinforced_fiber'])
	event.add('forge:string/synthetic', ['tfmg:synthetic_string'])
	event.add('forge:wet_mudbrick', ['tfc:drying_bricks/silt','tfc:drying_bricks/loam','tfc:drying_bricks/silty_loam','tfc:drying_bricks/sandy_loam'])
	event.add('forge:mudbrick', ['tfc:mud_brick/silt','tfc:mud_brick/loam','tfc:mud_brick/silty_loam','tfc:mud_brick/sandy_loam'])
	event.add('forge:workbench', ['#tfc:workbenches'])
	event.add('forge:glass/source/clear', ['tfc:silica_glass_batch'])
	event.add('forge:workbench/single', [
		'workshop_for_handsome_adventurer:simple_table_oak',
		'workshop_for_handsome_adventurer:simple_table_spruce',
		'workshop_for_handsome_adventurer:simple_table_jungle',
		'workshop_for_handsome_adventurer:simple_table_birch',
		'workshop_for_handsome_adventurer:simple_table_dark-oak',
		'workshop_for_handsome_adventurer:simple_table_mangrove',
		'workshop_for_handsome_adventurer:simple_table_cherry',
		'workshop_for_handsome_adventurer:simple_table_acacia',
		'workshop_for_handsome_adventurer:simple_table_bamboo',
		'workshop_for_handsome_adventurer:simple_table_crimson',
		'workshop_for_handsome_adventurer:simple_table_warped',
		'workshop_for_handsome_adventurer:simple_table_glacian',
		'workshop_for_handsome_adventurer:simple_table_twilight_oak',
		'workshop_for_handsome_adventurer:simple_table_conopy',
		'workshop_for_handsome_adventurer:simple_table_dark',
		'workshop_for_handsome_adventurer:simple_table_time',
		'workshop_for_handsome_adventurer:simple_table_transformation',
		'workshop_for_handsome_adventurer:simple_table_mining',
		'workshop_for_handsome_adventurer:simple_table_sorting',
		'workshop_for_handsome_adventurer:simple_table_cerulean',
		'workshop_for_handsome_adventurer:simple_table_dark_cherry',
		'workshop_for_handsome_adventurer:simple_table_sx_treated_wood_horizontal'
	])
	event.add('forge:workbench/double', [
		'workshop_for_handsome_adventurer:workstation_placer_oak',
		'workshop_for_handsome_adventurer:workstation_placer_spruce',
		'workshop_for_handsome_adventurer:workstation_placer_jungle',
		'workshop_for_handsome_adventurer:workstation_placer_birch',
		'workshop_for_handsome_adventurer:workstation_placer_dark-oak',
		'workshop_for_handsome_adventurer:workstation_placer_mangrove',
		'workshop_for_handsome_adventurer:workstation_placer_cherry',
		'workshop_for_handsome_adventurer:workstation_placer_acacia',
		'workshop_for_handsome_adventurer:workstation_placer_bamboo',
		'workshop_for_handsome_adventurer:workstation_placer_crimson',
		'workshop_for_handsome_adventurer:workstation_placer_warped',
		'workshop_for_handsome_adventurer:workstation_placer_glacian',
		'workshop_for_handsome_adventurer:workstation_placer_twilight_oak',
		'workshop_for_handsome_adventurer:workstation_placer_conopy',
		'workshop_for_handsome_adventurer:workstation_placer_dark',
		'workshop_for_handsome_adventurer:workstation_placer_time',
		'workshop_for_handsome_adventurer:workstation_placer_transformation',
		'workshop_for_handsome_adventurer:workstation_placer_mining',
		'workshop_for_handsome_adventurer:workstation_placer_sorting',
		'workshop_for_handsome_adventurer:workstation_placer_cerulean',
		'workshop_for_handsome_adventurer:workstation_placer_dark_cherry',
		'workshop_for_handsome_adventurer:workstation_placer_sx_treated_wood_horizontal'
	])
	event.add('forge:bow_part/limb', ['kubejs:bowlimb'])
	event.add('forge:bow_part/chord_source/primitive', ['#forge:string/plant', 'immersiveengineering:hemp_fiber', 'textile:flax_fiber'])
	event.add('forge:bow_part/chord/primitive', ['kubejs:bowchord'])
	event.add('forge:bow_part/chord/strong', ['#forge/wires/iron','#forge/wires/steel' ])
	event.add('forge:bow_part/chord', ['#forge:bow_part/chord/primitive','#forge:bow_part/chord/strong'])
	event.add('forge:bow_part', ['#forge:bow_part/limb','#forge:bow_part/chord',])
	event.add('forge:gunpowder/pinch', ['tfc_muskets:gunpowder_pinch'])
	event.add('createbigcannons:gunpowder_pinch', ['tfc_muskets:gunpowder_pinch'])
	//
	event.add('forge:compass', 'firmaciv:firmaciv_compass')
	event.add('forge:hook', 'butchersdelight:hook')
	event.add('create:sandpaper', 'tfc:sandpaper')
	event.add('forge:sugar', 'minecraft:sugar')
	event.add('forge:food/dried_kelp', 'tfc:food/dried_kelp')
	event.add('forge:kelp', ['tfc:plant/leafy_kelp','tfc:plant/winged_kelp'])
	event.add('forge:food/diary/curd', ['firmalife:food/yak_curd', 'firmalife:food/goat_curd', 'firmalife:food/milk_curd'])
	event.add('forge:flour/wheat', '#tfc:foods/flour')
	event.add('forge:treated_wood', 'firmalife:treated_wood')
	event.add('forge:treated_slab', 'immersiveengineering:slab_treated_wood_horizontal')
	event.add('forge:treated_lumber', 'tfc_ie_addon:treated_wood_lumber')
	event.add('forge:treated_stick', 'immersiveengineering:stick_treated')
	event.add('forge:treated_fence', 'immersiveengineering:treated_fence')
	//event.add('forge:handle/stick', ['immersiveengineering:stick_treated', 'minecraft:stick'])
	event.add('forge:wool/strip', ['sewingkit:wool_trim'])
	event.add('forge:cogwheel_small', ['steampowered:steel_cogwheel','steampowered:cast_iron_cogwheel','steampowered:bronze_cogwheel'])
	event.add('forge:cogwheel_large', ['steampowered:steel_large_cogwheel','steampowered:cast_iron_large_cogwheel','steampowered:bronze_large_cogwheel'])
	event.add('forge:dusts/salt', 'tfc:powder/salt')
	event.add('forge:dusts/saltpeter', 'tfc:powder/saltpeter')
	event.add('forge:dusts/graphite', 'tfc:powder/graphite')
	event.add('forge:honey_jar', ['firmalife:honey_jar','minecraft:honey_bottle'])
	event.add('forge:raw_honey', ['firmalife:raw_honey','minecraft:honeycomb'])
	event.add('forge:rubber', ['kubejs:rubber'])
	event.add('forge:resin', ['kubejs:resin'])
	//event.add('forge:seeds', ['meds_and_herbs:opium_seeds'])
	event.add('compressedcreativity:blower_mesh', [
		'compressedcreativity:mesh_empty',
		'compressedcreativity:mesh_woven',
		'compressedcreativity:mesh_splashing',
		'compressedcreativity:mesh_splashing_frozen',
		'compressedcreativity:mesh_dense',
		'compressedcreativity:mesh_haunted'
	])
	event.add('forge:uncut_gems', [
		'tfc:ore/amethyst',
		'tfc:ore/diamond',
		'tfc:ore/emerald',
		'tfc:ore/opal',
		'tfc:ore/pyrite',
		'tfc:ore/ruby',
		'tfc:ore/sapphire',
		'tfc:ore/topaz'
	])
	event.add('forge:ores/clean_dusts/iron', ['tfc:powder/hematite','tfc:powder/limonite','tfc:powder/magnetite'])
	event.add('forge:ores/clean_dusts/copper', ['tfc:powder/malachite','tfc:powder/native_copper','tfc:powder/tetrahedrite'])
	event.add('forge:ores/clean_dusts/aluminum', ['tfc_ie_addon:powder/bauxite'])
	event.add('forge:ores/clean_dusts/bismuth', ['tfc:powder/bismuthinite'])
	event.add('forge:ores/clean_dusts/tin', ['tfc:powder/cassiterite'])
	event.add('forge:ores/clean_dusts/chromium', ['tfcorewashing:chromium_powder'])
	event.add('forge:ores/clean_dusts/lead', ['tfc_ie_addon:powder/galena'])
	event.add('forge:ores/clean_dusts/nickel', ['tfc:powder/garnierite'])
	event.add('forge:ores/clean_dusts/gold', ['tfc:powder/native_gold'])
	event.add('forge:ores/clean_dusts/silver', ['tfc:powder/native_silver'])
	event.add('forge:ores/clean_dusts/zinc', ['tfc:powder/sphalerite'])
	event.add('forge:ores/clean_dusts/uranium', ['tfc_ie_addon:powder/uraninite'])
	event.add('tfc:ore_pieces/iron', [
		'tfc:ore/small_hematite','tfc:ore/poor_hematite','tfc:ore/normal_hematite','tfc:ore/rich_hematite',
		'tfc:ore/small_limonite','tfc:ore/poor_limonite','tfc:ore/normal_limonite','tfc:ore/rich_limonite',
		'tfc:ore/small_magnetite','tfc:ore/poor_magnetite','tfc:ore/normal_magnetite','tfc:ore/rich_magnetite'
	])
	event.add('tfc:ore_pieces/copper', [
		'tfc:ore/small_native_copper','tfc:ore/poor_native_copper','tfc:ore/normal_native_copper','tfc:ore/rich_native_copper',
		'tfc:ore/small_malachite','tfc:ore/poor_malachite','tfc:ore/normal_malachite','tfc:ore/rich_malachite',
		'tfc:ore/small_tetrahedrite','tfc:ore/poor_tetrahedrite','tfc:ore/normal_tetrahedrite','tfc:ore/rich_tetrahedrite'
	])
	event.add('tfc:ore_pieces/aluminum', ['tfc_ie_addon:ore/small_aluminum','tfc_ie_addon:ore/poor_aluminum','tfc_ie_addon:ore/normal_aluminum','tfc_ie_addon:ore/rich_aluminum'])
	event.add('tfc:ore_pieces/bismuth', ['tfc:ore/small_bismuthinite','tfc:ore/poor_bismuthinite','tfc:ore/normal_bismuthinite','tfc:ore/rich_bismuthinite'])
	event.add('tfc:ore_pieces/tin', ['tfc:ore/small_cassiterite','tfc:ore/poor_cassiterite','tfc:ore/normal_cassiterite','tfc:ore/rich_cassiterite'])
	event.add('tfc:ore_pieces/chromium', ['firmalife:ore/small_chromite','firmalife:ore/poor_chromite','firmalife:ore/normal_chromite','firmalife:ore/rich_chromite'])
	event.add('tfc:ore_pieces/lead', ['tfc_ie_addon:ore/small_lead','tfc_ie_addon:ore/poor_lead','tfc_ie_addon:ore/normal_lead','tfc_ie_addon:ore/rich_lead'])
	event.add('tfc:ore_pieces/nickel', ['tfc:ore/small_garnierite','tfc:ore/poor_garnierite','tfc:ore/normal_garnierite','tfc:ore/rich_garnierite'])
	event.add('tfc:ore_pieces/gold', ['tfc:ore/small_native_gold','tfc:ore/poor_native_gold','tfc:ore/normal_native_gold','tfc:ore/rich_native_gold'])
	event.add('tfc:ore_pieces/silver', ['tfc:ore/small_native_silver','tfc:ore/poor_native_silver','tfc:ore/normal_native_silver','tfc:ore/rich_native_silver'])
	event.add('tfc:ore_pieces/zinc', ['tfc:ore/small_sphalerite','tfc:ore/poor_sphalerite','tfc:ore/normal_sphalerite','tfc:ore/rich_sphalerite'])
	event.add('tfc:ore_pieces/uranium', ['tfc_ie_addon:ore/small_uranium','tfc_ie_addon:ore/poor_uranium','tfc_ie_addon:ore/normal_uranium','tfc_ie_addon:ore/rich_uranium'])
	event.add('tfc:minerals', [
		'tfc:ore/bituminous_coal',
		'tfc:ore/lignite',
		'tfc:ore/kaolinite',
		'tfc:ore/gypsum',
		'tfc:ore/graphite',
		'tfc:ore/sulfur',
		'tfc:ore/cinnabar',
		'tfc:ore/cryolite',
		'tfc:ore/saltpeter',
		'tfc:ore/sylvite',
		'tfc:ore/borax',
		'tfc:ore/halite'
	])
	event.add('compactmachines:compactmachines', [
		'compactmachines:machine_tiny',
		'compactmachines:machine_small',
		'compactmachines:machine_normal',
		'compactmachines:machine_large',
		'compactmachines:machine_giant',
		'compactmachines:machine_maximum'
	])	
	event.add('forge:thatch', [
		'firmaciv:thatch_roofing',
		'firmaciv:thatch_roofing_slab',
		'tfc:thatch',
		'mcwroofs:thatch_roof',
		'mcwroofs:thatch_top_roof',
		'mcwroofs:thatch_lower_roof',
		'mcwroofs:thatch_steep_roof',
		'mcwroofs:thatch_upper_lower_roof',
		'mcwroofs:thatch_upper_steep_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_top_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_lower_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_steep_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_upper_lower_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_upper_steep_roof',
		'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_roof',
		'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_top_roof',
		'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_lower_roof',
		'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_steep_roof',
		'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_upper_lower_roof',
		'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_upper_steep_roof',
		'minecraft:hay_block'
	])
	//----------------
	CarWood.forEach((x) => {event.add("tfc:huge_very_heavy", `car:${x}_body`)})
	CarWood.forEach((x) => {event.add("tfc:huge_very_heavy", `car:big_${x}_body`)})
	CarColor.forEach((x) => {event.add("tfc:huge_very_heavy", `car:${x}_transporter_body`)})
	CarColor.forEach((x) => {event.add("tfc:huge_very_heavy", `car:${x}_suv_body`)})
	CarColor.forEach((x) => {event.add("tfc:huge_very_heavy", `car:${x}_sport_body`)})
	CarColor.forEach((x) => {event.add("tfc:huge_very_heavy", `car:${x}_container`)})
	CarColor.forEach((x) => {event.add("tfc:huge_very_heavy", `car:${x}_tank_container`)})

	event.add('tfc:huge_very_heavy', [
		'#compactmachines:compactmachines',
		//'simple_hot_air_balloons:red_hot_air_balloon_item',
		//'simple_hot_air_balloons:orange_hot_air_balloon_item',
		//'simple_hot_air_balloons:yellow_hot_air_balloon_item',
		//'simple_hot_air_balloons:lime_hot_air_balloon_item',
		//'simple_hot_air_balloons:green_hot_air_balloon_item',
		//'simple_hot_air_balloons:light_blue_hot_air_balloon_item',
		//'simple_hot_air_balloons:cyan_hot_air_balloon_item',
		//'simple_hot_air_balloons:blue_hot_air_balloon_item',
		//'simple_hot_air_balloons:pink_hot_air_balloon_item',
		//'simple_hot_air_balloons:magenta_hot_air_balloon_item',
		//'simple_hot_air_balloons:purple_hot_air_balloon_item',
		//'simple_hot_air_balloons:brown_hot_air_balloon_item',
		//'simple_hot_air_balloons:white_hot_air_balloon_item',
		//'simple_hot_air_balloons:light_gray_hot_air_balloon_item',
		//'simple_hot_air_balloons:gray_hot_air_balloon_item',
		//'simple_hot_air_balloons:black_hot_air_balloon_item',

		'ad_astra:tier_1_rocket',
		'ad_astra:tier_2_rocket',
		'ad_astra:tier_3_rocket',
		'ad_astra:tier_4_rocket',
		'ad_astra:tier_1_rover',
		'ad_astra:nasa_workbench',

		'butchersdelight:dead_cow',
		'butchersdelight:deadpig',
		'butchersdelight:deadsheep',
		'butchersdelight:deadgoat',
    	'butchersdelight:deadhoglin',
    	'butchersdelight:deadllama',
    	'butchersdelight:deadstrider',		

		'car:engine_3_cylinder',
		'car:engine_6_cylinder',
		'car:engine_truck',
		'car:wheel',
		'car:big_wheel',
		'car:small_tank',
		'car:medium_tank',
		'car:large_tank',		
		
		'create:water_wheel',
		'create:large_water_wheel',
		'create:crushing_wheel',
		'create:mechanical_press',
		'create:mechanical_mixer',
		'create:mechanical_drill',
		'create:mechanical_saw',
		'create:mechanical_harvester',
		'create:mechanical_plough',
		'create:mechanical_arm',
		'create:deployer',
		'create:flywheel',
		'createbigcannons:bronze_cannon_chamber',
		'createbigcannons:bronze_cannon_barrel',
		'createbigcannons:thick_steel_cannon_chamber',
		'createbigcannons:built_up_steel_cannon_chamber',
		'createbigcannons:built_up_steel_cannon_barrel',
		'createbigcannons:steel_cannon_chamber',
		'createbigcannons:steel_cannon_barrel',
		'createbigcannons:steel_cannon_barrel',
		'createbigcannons:thick_nethersteel_cannon_chamber',
		'createbigcannons:built_up_nethersteel_cannon_chamber',
		'createbigcannons:nethersteel_cannon_chamber',
		'createbigcannons:built_up_nethersteel_cannon_barrel',
		'createbigcannons:nethersteel_cannon_barrel',		
		'createbigcannons:unbored_cast_iron_cannon_barrel',
		'createbigcannons:unbored_cast_iron_cannon_chamber',
		'createbigcannons:unbored_cast_iron_sliding_breech',
		'createbigcannons:incomplete_cast_iron_sliding_breech',
		'createbigcannons:cast_iron_sliding_breechblock',
		'createbigcannons:unbored_bronze_cannon_barrel',
		'createbigcannons:unbored_bronze_cannon_chamber',
		'createbigcannons:unbored_bronze_sliding_breech',
		'createbigcannons:incomplete_bronze_sliding_breech',
		'createbigcannons:bronze_sliding_breechblock',
		'createbigcannons:unbored_very_small_steel_cannon_layer',
		'createbigcannons:unbored_small_steel_cannon_layer',
		'createbigcannons:unbored_medium_steel_cannon_layer',
		'createbigcannons:unbored_large_steel_cannon_layer',
		'createbigcannons:unbored_very_large_steel_cannon_layer',
		'createbigcannons:very_small_steel_cannon_layer',
		'createbigcannons:small_steel_cannon_layer',
		'createbigcannons:medium_steel_cannon_layer',
		'createbigcannons:large_steel_cannon_layer',
		'createbigcannons:very_large_steel_cannon_layer',
		'createbigcannons:unbored_steel_sliding_breech',
		'createbigcannons:incomplete_steel_sliding_breech',
		'createbigcannons:steel_sliding_breech',
		'createbigcannons:unbored_steel_screw_breech',
		'createbigcannons:incomplete_steel_screw_breech',
		'createbigcannons:unbored_very_small_nethersteel_cannon_layer',
		'createbigcannons:unbored_small_nethersteel_cannon_layer',
		'createbigcannons:unbored_medium_nethersteel_cannon_layer',
		'createbigcannons:unbored_large_nethersteel_cannon_layer',
		'createbigcannons:unbored_very_large_nethersteel_cannon_layer',
		'createbigcannons:very_small_nethersteel_cannon_layer',
		'createbigcannons:small_nethersteel_cannon_layer',
		'createbigcannons:medium_nethersteel_cannon_layer',
		'createbigcannons:large_nethersteel_cannon_layer',
		'createbigcannons:very_large_nethersteel_cannon_layer',
		'createbigcannons:unbored_nethersteel_screw_breech',
		'createbigcannons:incomplete_nethersteel_screw_breech',
		'createbigcannons:cannon_carriage',
		'createbigcannons:autocannon_ammo_containers',

		'createdieselgenerators:diesel_engine',	
		'createdieselgenerators:large_diesel_engine',	
		'createdieselgenerators:huge_diesel_engine',	

		'create_new_age:generator_coil',		
		
		'immersive_aircraft:hull',
		'immersive_aircraft:engine',
		'immersive_aircraft:sail',
		'immersive_aircraft:propeller',
		'immersive_aircraft:boiler',
		'immersive_aircraft:airship',
		'immersive_aircraft:biplane',
		'immersive_aircraft:gyrodyne',
		'immersive_aircraft:quadrocopter',
		'immersive_aircraft:enhanced_propeller',
		'immersive_aircraft:eco_engine',
		'immersive_aircraft:nether_engine',
		'immersive_aircraft:steel_boiler',

		'immersiveengineering:workbench',
		'immersiveengineering:circuit_table',
		'immersiveengineering:windmill',
		'immersiveengineering:watermill',
		'immersiveengineering:fluid_pump',
		'immersiveengineering:blastfurnace_preheater',
		'immersiveengineering:sample_drill',
		'immersiveengineering:cloche',
		'immersiveengineering:steel_post',
		'immersiveengineering:alu_post',
		'immersiveengineering:transformer',
		'immersiveengineering:transformer_hv',
		'immersiveengineering:treated_post',
		'immersiveengineering:crate',
		'immersiveengineering:reinforced_crate',
		'immersiveengineering:wooden_barrel',
		'immersiveengineering:metal_barrel',

		'mekanism:personal_barrel',
		'mekanism:personal_chest',
		'mekanism:basic_bin',
		'mekanism:basic_fluid_tank',
		'mekanism:basic_chemical_tank',
		'mekanism:advanced_bin',
		'mekanism:advanced_fluid_tank',
		'mekanism:advanced_chemical_tank',
		'mekanism:elite_bin',
		'mekanism:elite_fluid_tank',
		'mekanism:elite_chemical_tank',
		'mekanism:ultimate_bin',
		'mekanism:ultimate_fluid_tank',
		'mekanism:ultimate_chemical_tank',
		'mekanismgenerators:advanced_solar_generator',
		'mekanismgenerators:wind_generator',

		//'immersivepetroleum:speedboat',
		'kubejs:stack_treated_wood',
		'kubejs:big_stack_treated_wood',
		'kubejs:canoe',
		'kubejs:press_head',
		'kubejs:hardened_press_head',

		'pneumaticcraft:etching_tank',
		'pneumaticcraft:small_tank',
		'pneumaticcraft:medium_tank',
		'pneumaticcraft:large_tank',
		'pneumaticcraft:huge_tank',

		'securitycraft:cage_trap',
		'supplementaries:cage',

		'tfc_metal_items:steel_pressing_head',
		'#tfc:barrels',
		
		'tfmg:gasoline_engine',
		'tfmg:gasoline_engine_back',
		'tfmg:lpg_engine',
		'tfmg:lpg_engine_back',
		'tfmg:turbine_engine',
		'tfmg:turbine_engine_back',
		'tfmg:radial_engine',
		'tfmg:radial_engine_back',
		'tfmg:comapat_engine',
		'tfmg:low_grade_fuel_engine',
		'tfmg:engine_base',

		'untamedwilds:trap_cage',
	]),
	event.add('tfc:large_medium', [
		'compressedcreativity:mesh_empty',
		'compressedcreativity:mesh_woven',
		'compressedcreativity:mesh_splashing',
		'compressedcreativity:mesh_splashing_frozen'
	]),
	event.add('tfc:very_large_heavy', [
		'compressedcreativity:mesh_dense',
		'compressedcreativity:mesh_haunted',
		'compressedcreativity:rotational_compressor',
		'compressedcreativity:industrial_air_blower',
		'butchersdelight:deadchiken',
		'butchersdelight:deadrabbitbrown',
		'beyond_earth:solar_panel',
		'beyond_earth:coal_generator',
		'beyond_earth:oxygen_loader',
		'beyond_earth:oxygen_bubble_distributor',
		'car:gas_station',
		'car:generator',
		'car:split_tank',
		'car:tank',
		'car:cas_workshop',
		'car:cas_workshop_outter',
		'car:battery',
		'car:guard_rail',
		'create:cart_assembler',
		'create:basin',
		'create:empty_blaze_burner',
		'create:blaze_burner',
		'create:fluid_tank',
		'create:hose_pulley',
		'create:item_drain',
		'create:spout',
		'create:portable_fluid_interface',
		'create:portable_storage_interface',
		'create:gantry_carriage',
		'create:windmill_bearing',
		'create:mechanical_bearing',
		'create:rotation_speed_controller',
		'create:andesite_funnel',
		'create:brass_funnel',
		'create:brass_tunnel',
		'create:andesite_tunnel',
		'create:display_board',
		'createbigcannons:cannon_drill',
		'createbigcannons:cast_iron_autocannon_breech',		
		'createbigcannons:cast_iron_autocannon_recoil_spring',		
		'createbigcannons:cast_iron_autocannon_barrel',		
		'createbigcannons:bronze_autocannon_breech',
		'createbigcannons:bronze_autocannon_recoil_spring',
		'createbigcannons:bronze_autocannon_barrel',
		'createbigcannons:steel_autocannon_breech',
		'createbigcannons:steel_autocannon_recoil_spring',
		'createbigcannons:steel_autocannon_barrel',
		'createbigcannons:unbored_cast_iron_autocannon_breech',
		'createbigcannons:incomplete_cast_iron_autocannon_breech',
		'createbigcannons:unbored_cast_iron_autocannon_recoil_spring',
		'createbigcannons:incomplete_cast_iron_autocannon_recoil_spring',
		'createbigcannons:unbored_cast_iron_autocannon_barrel',
		'createbigcannons:cast_iron_autocannon_breech_extractor',
		'createbigcannons:unbored_bronze_autocannon_breech',
		'createbigcannons:incomplete_bronze_autocannon_breech',
		'createbigcannons:unbored_bronze_autocannon_recoil_spring',
		'createbigcannons:incomplete_bronze_autocannon_recoil_spring',
		'createbigcannons:unbored_bronze_autocannon_barrel',
		'createbigcannons:bronze_autocannon_breech_extractor',
		'createbigcannons:unbored_steel_autocannon_breech',
		'createbigcannons:incomplete_steel_autocannon_breech',
		'createbigcannons:unbored_steel_autocannon_recoil_spring',
		'createbigcannons:incomplete_steel_autocannon_recoil_spring',
		'createbigcannons:unbored_steel_autocannon_barrel',
		'createbigcannons:steel_autocannon_breech_extractor',
		'createbigcannons:autocannon_breech_cast_mould',
		'createbigcannons:autocannon_recoil_spring_cast_mould',
		'createbigcannons:autocannon_barrel_cast_mould',
		'createsifter:sifter',
		'minecraft:minecart',
		'minecraft:chest_minecart',
		'minecraft:furnace_minecart',
		'minecraft:tnt_minecart',
		'minecraft:hopper_minecart',
		'immersiveengineering:minecart_woodencrate',
		'immersiveengineering:minecart_woodenbarrel',
		'immersiveengineering:minecart_metalbarrel',
		'immersiveengineering:minecart_reinforcedcrate',
		'supplementaries:dispenser_minecart',
		'railways:benchcart',
		'railways:jukeboxcart'
	]),
	event.add('firmalife:foods/heatable', [
		'kubejs:shark_meat',
		'farmersdelight:minced_beef',
		'farmersdelight:chicken_cuts',
		'farmersdelight:mutton_chops',
    	'farmersdelight:ham',
    	'farmersdelight:bacon',
		'farmersdelight:cod_slice',
		'farmersdelight:salmon_slice',
		'minecraft:porkchop',
		'minecraft:mutton',
		'minecraft:chicken',
		'minecraft:beef',
		'tfc:food/potato',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw'
	]),
	event.add('firmalife:usable_in_stovetop_soup', [
		'kubejs:shark_meat',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw'
	]),
	event.add('tfc:foods', [
		'kubejs:shark_meat',
		'kubejs:shark_cooked_meat',
		'create:sweet_roll',
		'create:chocolate_glazed_berries',
		'create:honeyed_apple',
		'createaddition:chocolate_cake',
		'createaddition:honey_cake',
		'createaddition:cake_base',
		'createaddition:cake_base_baked',
		'farmersrespite:coffee_berries',
		'farmersrespite:green_tea_cookie',
		'farmersrespite:nether_wart_sourdough',
		'farmersrespite:black_cod',
		'farmersrespite:tea_curry',
		'farmersrespite:blazing_chili',
		'farmersrespite:coffee_cake',
		'farmersrespite:coffee_cake_slice',
		'farmersrespite:rose_hip_pie',
		'farmersrespite:rose_hip_pie_slice',
		'coffee_delight:coffee_pie_side',
		'coffee_delight:coffee_pie',
		'coffee_delight:quiche_side',
		//'twilightdelight:glowstew',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:cooked_venison_rib',
		//'twilightdelight:hydra_piece',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:cooked_meef_slice',
		//'twilightdelight:fiery_snakes',
		//'twilightdelight:raw_insect',
		//'twilightdelight:cooked_insect',
		//'twilightdelight:fried_insect',
		//'twilightdelight:torchberry_cookie',
		//'twilightdelight:glow_venison_rib_with_pasta',
		//'twilightdelight:thousand_plant_stew',
		//'twilightdelight:aurora_ice_cream',
		//'twilightdelight:grilled_ghast',
		//'twilightdelight:chocolate_wafer',
		//'twilightdelight:lily_chicken_block',
		//'twilightdelight:lily_chicken',
		//'twilightdelight:fiery_snakes_block',
		'twilightforest:raw_venison',
		'twilightforest:cooked_venison',
		'twilightforest:hydra_chop',
		'twilightforest:raw_meef',
		'twilightforest:cooked_meef',
		'twilightforest:meef_stroganoff',
		'twilightforest:maze_wafer',
		'twilightforest:experiment_115',
		'pneumaticcraft:sourdough_bread',
		'pneumaticcraft:chips',
		'pneumaticcraft:cod_n_chips',
		'pneumaticcraft:salmon_tempura',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked'
	]),
	event.add('tfc:foods/meats', [
		'kubejs:shark_meat',
		'kubejs:shark_cooked_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:cooked_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:cooked_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:cooked_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:cooked_venison',
		'twilightforest:raw_meef',
		'twilightforest:cooked_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_raw',
		'untamedwilds:food_pachyderm_cooked',
		'minecraft:beef'
	]),
	event.add('tfc:foods/raw_meats', [
		'kubejs:shark_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'minecraft:beef'
	]),
	event.add('tfc:foods/cooked_meats', [
		'kubejs:shark_cooked_meat',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked'
	]),
	event.add('tfc:foods/usable_in_soup', [
		'kubejs:shark_meat',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop'
	]),
	event.add('tfc:foods/usable_in_sandwich', [
		'kubejs:shark_cooked_meat',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice'
	]),
	event.add('tfc:foods/usable_in_salad', [
		'kubejs:shark_cooked_meat',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked',
		//'twilightdelight:cooked_insect',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice'
	]),
	event.add('firmalife:foods/pizza_ingredients', [
		'kubejs:shark_cooked_meat',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice'
	]),
	event.add('tfc:foods/can_be_salted', [
		'kubejs:shark_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken'
	]),
	event.add('tfc:foods/can_be_hung', [
		'kubejs:shark_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken'
	]),
	event.add('tfc:small_ore_pieces', [
		//'geolosys:lignite_ore_sample'
	]),
	event.add('forge:pollution_blocks', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam',
		'tfc:dirt/silt',
		'tfc:dirt/loam',
		'tfc:dirt/sandy_loam',
		'tfc:dirt/silty_loam',
		'tfc:clay/silt',
		'tfc:clay/loam',
		'tfc:clay/sandy_loam',
		'tfc:clay/silty_loam',
		'tfc:clay_grass/silt',
		'tfc:clay_grass/loam',
		'tfc:clay_grass/sandy_loam',
		'tfc:clay_grass/silty_loam'
	]),
	event.add('minecraft:leaves', [
		'tfc:plant/cherry_leaves',
		'tfc:plant/green_apple_leaves',
		'tfc:plant/lemon_leaves',
		'tfc:plant/olive_leaves',
		'tfc:plant/orange_leaves',
		'tfc:plant/peach_leaves',
		'tfc:plant/plum_leaves',
		'tfc:plant/red_apple_leaves'
	]),
	event.add('minecraft:dirt', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam'
	]),
	event.add('forge:grain_crops', [
		'tfc:food/barley',
		'tfc:food/maize',
		'tfc:food/oat',
		'tfc:food/rye',
		'tfc:food/rice',
		'tfc:food/wheat'
	]),
	event.add('forge:slab/raw_stone', [
		'tfc:rock/raw/marble_slab',
		'tfc:rock/raw/gneiss_slab',
		'tfc:rock/raw/schist_slab',
		'tfc:rock/raw/phyllite_slab',
		'tfc:rock/raw/slate_slab',
		'tfc:rock/raw/quartzite_slab',
		'tfc:rock/raw/dacite_slab',
		'tfc:rock/raw/andesite_slab',
		'tfc:rock/raw/basalt_slab',
		'tfc:rock/raw/rhyolite_slab',
		'tfc:rock/raw/chalk_slab',
		'tfc:rock/raw/chert_slab',
		'tfc:rock/raw/dolomite_slab',
		'tfc:rock/raw/conglomerate_slab',
		'tfc:rock/raw/limestone_slab',
		'tfc:rock/raw/claystone_slab',
		'tfc:rock/raw/shale_slab',
		'tfc:rock/raw/gabbro_slab',
		'tfc:rock/raw/diorite_slab',
		'tfc:rock/raw/granite_slab',
		'tfc:rock/raw/granite_slab'
	]),
	event.add('forge:supports', [
		'tfc:wood/support/acacia',
		'tfc:wood/support/ash',
		'tfc:wood/support/aspen',
		'tfc:wood/support/birch',
		'tfc:wood/support/blackwood',
		'tfc:wood/support/chestnut',
		'tfc:wood/support/douglas_fir',
		'tfc:wood/support/hickory',
		'tfc:wood/support/kapok',
		'tfc:wood/support/mangrove',
		'tfc:wood/support/maple',
		'tfc:wood/support/oak',
		'tfc:wood/support/palm',
		'tfc:wood/support/acacia',
		'tfc:wood/support/pine',
		'tfc:wood/support/rosewood',
		'tfc:wood/support/sequoia',
		'tfc:wood/support/spruce',
		'tfc:wood/support/sycamore',
		'tfc:wood/support/white_cedar',
		'tfc:wood/support/willow'
	])
	event.add('forge:beams', [
		'#forge:supports'
	])
	event.add('tfc:pileable_ingots', [
		'minecraft:iron_ingot',
		'minecraft:netherite_ingot',
		'beyond_earth:desh_ingot',
		'beyond_earth:ostrum_ingot',
		'beyond_earth:calorite_ingot',
		'immersiveengineering:ingot_hop_graphite',
		'mekanism:ingot_refined_obsidian',
		'mekanism:ingot_refined_glowstone',
		'mekanism:ingot_osmium',
		'pneumaticcraft:ingot_iron_compressed',
		'twilightforest:ironwood_ingot',
		'twilightforest:fiery_ingot',
		'twilightforest:knightmetal_ingot',
		//'tconstruct:cobalt_ingot',
		//'tconstruct:slimesteel_ingot',
		//'tconstruct:amethyst_bronze_ingot',
		//'tconstruct:queens_slime_ingot',
		//'tconstruct:manyullyn_ingot',
		//'tconstruct:hepatizon_ingot'
	]),
	event.add('forge:colored_sleeping_bag', [
		'comforts:sleeping_bag_orange',
		'comforts:sleeping_bag_magenta',
		'comforts:sleeping_bag_light_blue',
		'comforts:sleeping_bag_yellow',
		'comforts:sleeping_bag_lime',
		'comforts:sleeping_bag_pink',
		'comforts:sleeping_bag_gray',
		'comforts:sleeping_bag_light_gray',
		'comforts:sleeping_bag_cyan',
		'comforts:sleeping_bag_purple',
		'comforts:sleeping_bag_blue',
		'comforts:sleeping_bag_brown',
		'comforts:sleeping_bag_green',
		'comforts:sleeping_bag_red',
		'comforts:sleeping_bag_black'
	]),
	event.add('forge:colored_hammock', [
		'comforts:hammock_orange',
		'comforts:hammock_magenta',
		'comforts:hammock_light_blue',
		'comforts:hammock_yellow',
		'comforts:hammock_lime',
		'comforts:hammock_pink',
		'comforts:hammock_gray',
		'comforts:hammock_light_gray',
		'comforts:hammock_cyan',
		'comforts:hammock_purple',
		'comforts:hammock_blue',
		'comforts:hammock_brown',
		'comforts:hammock_green',
		'comforts:hammock_red',
		'comforts:hammock_black'
	]),
	event.add('forge:seed_tree', [
		'#dynamictrees:seeds',
		'dttfc:acacia_seed',
		'dttfc:ash_seed',
		'dttfc:aspen_seed',
		'dttfc:birch_seed',
		'dttfc:blackwood_seed',
		'dttfc:chestnut_seed',
		'dttfc:douglas_fir_seed',
		'dttfc:hickory_seed',
		'dttfc:kapok_seed',
		'dttfc:maple_seed',
		'dttfc:oak_seed',
		'dttfc:palm_seed',
		'dttfc:pine_seed',
		'dttfc:rosewood_seed',
		'dttfc:sequoia_seed',
		'dttfc:spruce_seed',
		'dttfc:sycamore_seed',
		'dttfc:white_cedar_seed',
		'dttfc:willow_seed'
	]),
	event.add('tfc:usable_on_tool_rack', [
		'sewingkit:wood_sewing_needle',
		'sewingkit:bone_sewing_needle',
		'sewingkit:iron_sewing_needle',
		'sewingkit:netherite_sewing_needle',
		'sewingkit:file',
		'firmalife:peel',
		'cgm:pistol',
		'cgm:shotgun',
		'cgm:rifle',
		'cgm:grenade_launcher',
		'cgm:bazooka',
		'cgm:mini_gun',
		'cgm:assault_rifle',
		'cgm:machine_pistol',
		'cgm:heavy_rifle',
		'create:wrench',
		'createoreexcavation:vein_finder',
		'minecraft:shears',
		'minecraft:lead',
		'minecraft:crossbow',
		'minecraft:trident',
		'minecraft:flint_and_steel',
		'minecraft:spyglass',
		//'exnihilosequentia:wooden_crook',
		//'exnihilosequentia:iron_crook',
		//'exnihilosequentia:iron_hammer',
		//'exnihilosequentia:netherite_hammer',
		//'exnihilosequentia:stone_hammer',
		'immersiveengineering:hammer',
		'immersiveengineering:wirecutter',
		'immersiveengineering:screwdriver',
		'immersiveengineering:chemthrower',
		'immersiveengineering:railgun',
		'mcw_tfc_aio:roofing_hammer',
		'mcw_tfc_aio:pliers',
		'mcwroofs:roofing_hammer',
		'mcwwindows:hammer',
		'butchersdelight:cleaver',
		'tfc:ceramic/jug',
		'tfc:ceramic/vessel',
		'#tfc:buckets',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
		//'#tconstruct:modifiable'
	]),
	event.add('tfc:plant/green', [
		'tfc:plant/bluegrass',
		'tfc:plant/bromegrass',
		'tfc:plant/fountain_grass',
		'tfc:plant/manatee_grass',
		'tfc:plant/orchard_grass',
		'tfc:plant/ryegrass',
		'tfc:plant/scutch_grass',
		'tfc:plant/timothy_grass',
		'tfc:plant/raddia_grass',
		'tfc:plant/arrowhead',
		'tfc:plant/coontail',
		'tfc:plant/duckweed',
		'tfc:plant/field_horsetail',
		'tfc:plant/gutweed',
		'tfc:plant/king_fern',
		'tfc:plant/lady_fern',
		'tfc:plant/licorice_fern',
		'tfc:plant/moss',
		'tfc:plant/ostrich_fern',
		'tfc:plant/pistia',
		'tfc:plant/sago',
		'tfc:plant/switchgrass',
		'tfc:plant/sword_fern',
		'tfc:plant/tall_fescue_grass',
		'tfc:plant/toquilla_palm',
		'tfc:plant/water_lily',
		'tfc:plant/water_taro',
		'tfc:plant/leafy_kelp'
	]),
	event.add('tfc:herbal_grass', [
		'tfc:plant/bluegrass',
		'tfc:plant/bromegrass',
		'tfc:plant/fountain_grass',
		'tfc:plant/manatee_grass',
		'tfc:plant/orchard_grass',
		'tfc:plant/ryegrass',
		'tfc:plant/scutch_grass',
		'tfc:plant/timothy_grass',
		'tfc:plant/raddia_grass',
		'tfc:plant/switchgrass',
		'tfc:plant/tall_fescue_grass',
		'tfc:plant/turtle_grass',
		'firmalife:plant/butterfly_grass',
		'tfc:plant/leafy_kelp',
		'tfc:plant/winged_kelp'
	]),
	event.add('tfc:plant/red', [
		'tfc:plant/anthurium',
		'tfc:plant/blood_lily',
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/guzmania',
		'tfc:plant/heliconia',
		'tfc:plant/kangaroo_paw',
		'tfc:plant/poppy',
		'tfc:plant/rose',
		'tfc:plant/vriesea',
		'tfc:plant/snapdragon_red',
		'tfc:plant/tropical_milkweed',
		'tfc:plant/tulip_red'
	]),
	event.add('tfc:plant/white', [
		'tfc:plant/houstonia',
		'tfc:plant/lily_of_the_valley',
		'tfc:plant/meads_milkweed',
		'tfc:plant/oxeye_daisy',
		'tfc:plant/primrose',
		'tfc:plant/sacred_datura',
		'tfc:plant/snapdragon_white',
		'tfc:plant/trillium',
		'tfc:plant/tulip_white',
		'tfc:plant/yucca'
	]),
	event.add('tfc:tea_leaves', [
		'tfc:plant/labrador_tea',
		'tfc:plant/hibiscus',
		'twilightforest:mining_leaves'
	]),
	event.add('tfc:gem_powders/slot', [
		'tfc:powder/amethyst',
		'tfc:powder/opal',
		'tfc:powder/ruby',
		'tfc:powder/sapphire',
		'tfc:powder/topaz'
	]),
	event.add('tfc:firepit_fuel', [
		'tinycoal:tinycharcoal',
		'tinycoal:tinycoal',
		'tfc:stick_bunch',
		'#forge:rods/wooden',
		'#forge:seed_tree',
		'farmersdelight:tree_bark'
	]),
	event.add('tfc:forge_fuel', [
		'tinycoal:tinycoal',
		'tinycoal:tinycharcoal'
	])
	
	event.add('tfc:lamp_fuel', [
		'tfc:bucket/tallow',
		'tfc:bucket/olive_oil',
		'immersiveengineering:creosote_bucket'
	]),
	
	event.add('forge:bark', [
		'meds_and_herbs:bark_oak',
		'meds_and_herbs:bark_birch',
		'meds_and_herbs:bark_dark_oak',
		'meds_and_herbs:bark_spruce',
		'meds_and_herbs:bark_acacia',
		'meds_and_herbs:bark_jungle',
		'meds_and_herbs:bark_mangrove',
		'meds_and_herbs:bark_cherry',
		'meds_and_herbs:bark_crimson',
		'meds_and_herbs:bark_warped'
	]),
	event.add('forge:sleeping_bags', [
		'#travelersbackpack:sleeping_bags',
		'#forge:colored_sleeping_bag',
		'comforts:sleeping_bag_white'
	]),
	//event.add('forge:magma_block', [
	//	'minecraft:magma_block',
	//	'tfc:rock/magma/granite',
	//	'tfc:rock/magma/diorite',
	//	'tfc:rock/magma/gabbro',
	//	'tfc:rock/magma/rhyolite',
	//	'tfc:rock/magma/basalt',
	//	'tfc:rock/magma/andesite',
	//	'tfc:rock/magma/dacite'
	//]),
	event.add('forge:farmlands', [
		'tfc:farmland/silt',
		'tfc:farmland/loam',
		'tfc:farmland/sandy_loam',
		'tfc:farmland/silty_loam',
		'beneath:soul_farmland'
	]),
	//event.add('forge:axes/stone', [
	//	'tfc:stone/axe/igneous_extrusive',
	//	'tfc:stone/axe/igneous_intrusive',
	//	'tfc:stone/axe/metamorphic',
	//	'tfc:stone/axe/sedimentary'
	//]),
	//event.add('forge:head_axe/stone', [
	//	'tfc:stone/axe_head/igneous_extrusive',
	//	'tfc:stone/axe_head/igneous_intrusive',
	//	'tfc:stone/axe_head/metamorphic',
	//	'tfc:stone/axe_head/sedimentary'
	//]),
	//event.add('forge:hoes/stone', [
	//	'tfc:stone/hoe/igneous_extrusive',
	//	'tfc:stone/hoe/igneous_intrusive',
	//	'tfc:stone/hoe/metamorphic',
	//	'tfc:stone/hoe/sedimentary'
	//]),
	//event.add('forge:head_hoe/stone', [
	//	'tfc:stone/hoe_head/igneous_extrusive',
	//	'tfc:stone/hoe_head/igneous_intrusive',
	//	'tfc:stone/hoe_head/metamorphic',
	//	'tfc:stone/hoe_head/sedimentary'
	//]),
	//event.add('forge:javelins/stone', [
	//	'tfc:stone/javelin/igneous_extrusive',
	//	'tfc:stone/javelin/igneous_intrusive',
	//	'tfc:stone/javelin/metamorphic',
	//	'tfc:stone/javelin/sedimentary'
	//]),
	//event.add('forge:head_javelin/stone', [
	//	'tfc:stone/javelin_head/igneous_extrusive',
	//	'tfc:stone/javelin_head/igneous_intrusive',
	//	'tfc:stone/javelin_head/metamorphic',
	//	'tfc:stone/javelin_head/sedimentary'
	//]),
	//event.add('forge:hammers/stone', [
	//	'tfc:stone/hammer/igneous_extrusive',
	//	'tfc:stone/hammer/igneous_intrusive',
	//	'tfc:stone/hammer/metamorphic',
	//	'tfc:stone/hammer/sedimentary'
	//]),
	//event.add('forge:head_hammer/stone', [
	//	'tfc:stone/hammer_head/igneous_extrusive',
	//	'tfc:stone/hammer_head/igneous_intrusive',
	//	'tfc:stone/hammer_head/metamorphic',
	//	'tfc:stone/hammer_head/sedimentary'
	//]),
	//event.add('forge:knifes/stone', [
	//	'tfc:stone/knife/igneous_extrusive',
	//	'tfc:stone/knife/igneous_intrusive',
	//	'tfc:stone/knife/metamorphic',
	//	'tfc:stone/knife/sedimentary'
	//]),
	//event.add('forge:head_knifes/stone', [
	//	'tfc:stone/knife_head/igneous_extrusive',
	//	'tfc:stone/knife_head/igneous_intrusive',
	//	'tfc:stone/knife_head/metamorphic',
	//	'tfc:stone/knife_head/sedimentary'
	//]),
	//event.add('forge:shovels/stone', [
	//	'tfc:stone/shovel/igneous_extrusive',
	//	'tfc:stone/shovel/igneous_intrusive',
	//	'tfc:stone/shovel/metamorphic',
	//	'tfc:stone/shovel/sedimentary'
	//]),
	//event.add('forge:head_shovel/stone', [
	//	'tfc:stone/shovel_head/igneous_extrusive',
	//	'tfc:stone/shovel_head/igneous_intrusive',
	//	'tfc:stone/shovel_head/metamorphic',
	//	'tfc:stone/shovel_head/sedimentary'
	//]),
	event.add('tfc:metal/pickaxe_head/first_metal', [
		'tfc:metal/pickaxe_head/copper',
		'tfc:metal/pickaxe_head/bismuth_bronze',
		'tfc:metal/pickaxe_head/black_bronze',
		'tfc:metal/pickaxe_head/bronze'
	]),
	//event.add('forge:shovels/stone', [
	//	'tfc:stone/shovel/igneous_extrusive',
	//	'tfc:stone/shovel/igneous_intrusive',
	//	'tfc:stone/shovel/metamorphic',
	//	'tfc:stone/shovel/sedimentary'
	//]),
	event.add('tfc:tanned_hides', [
		'kubejs:hide_tanned_s',
		'kubejs:hide_tanned_m',
		'kubejs:hide_tanned_l'
	]),
	event.add('tfc:oiled_hides', [
		'kubejs:hide_oiled_s',
		'kubejs:hide_oiled_m',
		'kubejs:hide_oiled_l'
	]),
	event.add('tfc:finish_hides', [
		'kubejs:hide_finish_s',
		'kubejs:hide_finish_m',
		'kubejs:hide_finish_l'
	]),
	event.add('tfc:stripped_logs', [
		'tfc:wood/stripped_log/acacia',
		'tfc:wood/stripped_log/ash',
		'tfc:wood/stripped_log/aspen',
		'tfc:wood/stripped_log/birch',
		'tfc:wood/stripped_log/blackwood',
		'tfc:wood/stripped_log/chestnut',
		'tfc:wood/stripped_log/douglas_fir',
		'tfc:wood/stripped_log/hickory',
		'tfc:wood/stripped_log/kapok',
		'tfc:wood/stripped_log/mangrove',
		'tfc:wood/stripped_log/maple',
		'tfc:wood/stripped_log/oak',
		'tfc:wood/stripped_log/palm',
		'tfc:wood/stripped_log/pine',
		'tfc:wood/stripped_log/rosewood',
		'tfc:wood/stripped_log/sequoia',
		'tfc:wood/stripped_log/spruce',
		'tfc:wood/stripped_log/sycamore',
		'tfc:wood/stripped_log/white_cedar',
		'tfc:wood/stripped_log/willow'
	]),
	event.add('tfc:planks', [
		'tfc:wood/planks/acacia',
		'tfc:wood/planks/ash',
		'tfc:wood/planks/aspen',
		'tfc:wood/planks/birch',
		'tfc:wood/planks/blackwood',
		'tfc:wood/planks/chestnut',
		'tfc:wood/planks/douglas_fir',
		'tfc:wood/planks/hickory',
		'tfc:wood/planks/kapok',
		'tfc:wood/planks/mangrove',
		'tfc:wood/planks/maple',
		'tfc:wood/planks/oak',
		'tfc:wood/planks/palm',
		'tfc:wood/planks/pine',
		'tfc:wood/planks/rosewood',
		'tfc:wood/planks/sequoia',
		'tfc:wood/planks/spruce',
		'tfc:wood/planks/sycamore',
		'tfc:wood/planks/white_cedar',
		'tfc:wood/planks/willow'
	]),
	event.add('tfc:tree_saplings', [
		'tfc:wood/sapling/acacia',
		'tfc:wood/sapling/ash',
		'tfc:wood/sapling/aspen',
		'tfc:wood/sapling/birch',
		'tfc:wood/sapling/blackwood',
		'tfc:wood/sapling/chestnut',
		'tfc:wood/sapling/douglas_fir',
		'tfc:wood/sapling/hickory',
		'tfc:wood/sapling/kapok',
		'tfc:wood/sapling/mangrove',
		'tfc:wood/sapling/maple',
		'tfc:wood/sapling/oak',
		'tfc:wood/sapling/palm',
		'tfc:wood/sapling/pine',
		'tfc:wood/sapling/rosewood',
		'tfc:wood/sapling/sequoia',
		'tfc:wood/sapling/spruce',
		'tfc:wood/sapling/sycamore',
		'tfc:wood/sapling/white_cedar',
		'tfc:wood/sapling/willow'
	]),
	event.add('forge:arrow_head', [
		'minecraft:iron_nugget',
		'minecraft:flint',
		'untamedwilds:material_shark_tooth',
		'#forge:nuggets/silver',
		'#forge:nuggets/tin',
		'#forge:nuggets/zinc',
		'#forge:nuggets/copper'
	]),
	event.add('forge:dead_animal', [
		'butchersdelight:dead_cow',
		'butchersdelight:deadsheep',
		'butchersdelight:deadpig',
		'butchersdelight:deadgoat',
		'butchersdelight:deadhoglin',
		'butchersdelight:deadchiken',
		'butchersdelight:deadrabbitbrown',
		'butchersdelight:deadllama',
		'butchersdelight:deadstrider'
	]),
	event.add('tfc:drink_items', [
		'tfc:ceramic/jug',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
	]),
	event.add('forge:hide', [
		//'untamedwilds:hide_bigcat_snow_leopard'
	]),
	event.add('tfc:scrapable', [
		//'#betteranimalsplus:pelts',
		'minecraft:rabbit_hide',
		'butchersdelight:cow_hide',
		'butchersdelight:hoglinskin',
		'#forge:hide',
		'kubejs:hide_oiled_s',
		'kubejs:hide_oiled_m',
		'kubejs:hide_oiled_l',
		'kubejs:hide_finish_s',
		'kubejs:hide_finish_m',
		'kubejs:hide_finish_l'
	]),
	event.add('forge:pelts', [
		'beneath:cursed_hide',
		'butchersdelight:cow_hide',
		'butchersdelight:hoglinskin',
		'#forge:hide'
	]),
	event.add('forge:tallow_source', [
		'untamedwilds:material_blubber',
		'untamedwilds:material_fat'
	])
	event.add('forge:eggs', [
		//'untamedwilds:egg_snake',
		//'untamedwilds:egg_softshell_turtle',
		//'untamedwilds:egg_tortoise',
		//'untamedwilds:egg_large_snake',
		//'untamedwilds:egg_monitor'
	])
	event.add('forge:sandstone', ['tfc:raw_sandstone/yellow','tfc:smooth_sandstone/yellow','tfc:cut_sandstone/yellow','tfc:raw_sandstone/red','tfc:smooth_sandstone/red','tfc:cut_sandstone/red']),
	event.add('forge:nuggets/andesite_alloy', ['#forge:nuggets/iron','#forge:nuggets/zinc','#forge:nuggets/tin']),
	event.add('forge:nuggets/knightmetal', ['twilightforest:armor_shard']),
	event.add('forge:ores/knightmetal', ['twilightforest:armor_shard_cluster']),
	event.add('adpother:filters/dust/low', ["htm:plant_fabric"]),
	event.add('adpother:filters/dust/medium', ["minecraft:paper","tfc:burlap_cloth"]),
	event.add('adpother:filters/dust/high', ["tfc:silk_cloth","tfc:wool_cloth"]),
	event.add('adpother:filters/carbon/low', ["#minecraft:leaves"]),
	event.add('adpother:filters/carbon/medium', ["#forge:kelp"]),
	event.add('adpother:filters/carbon/high', ["coralstfc:coral_powder"]),
	//event.add('adpother:filters/sulfur/low', ["no items here but just in case we want any down the line"]),
	event.add('adpother:filters/sulfur/medium', ["minecraft:charcoal"]),
	event.add('adpother:filters/sulfur/high', ["#minecraft:wool"]),
	event.add('adpother:filters/dust', ["#adpother:filters/dust/low","#adpother:filters/dust/medium","#adpother:filters/dust/high"]),
	event.add('adpother:filters/carbon', ["#adpother:filters/carbon/low","#adpother:filters/carbon/medium","#adpother:filters/carbon/high"]),
	event.add('adpother:filters/sulfur', ["#adpother:filters/sulfur/low","#adpother:filters/sulfur/medium","#adpother:filters/sulfur/high"]),
	event.add('adpother:filters', ["#adpother:filters/dust","#adpother:filters/carbon","#adpother:filters/sulfur"]),
	event.add('forge:filters', ['htm:plant_fabric','immersiveengineering:hemp_fabric']),
	event.add('forge:dirt', ['#tfc:dirt','#minecraft:dirt']),
	event.add('forge:wax', ['firmalife:beeswax']),
	event.add('forge:wax/beeswax', ['firmalife:beeswax']),
	event.add('forge:oil_seeds', ['tfc:seeds/melon','tfc:seeds/pumpkin','tfc:seeds/jute','tfc:seeds/squash','tfc:seeds/soybean','tfc:seeds/beet','tfc:seeds/carrot','tfc:seeds/cabbage','tfc:seeds/rice','tfc:seeds/wheat','tfc:seeds/maize','tfc:seeds/rye','tfc:seeds/oat','tfc:seeds/barley','immersiveengineering:seed']),
	event.add('forge:double_sheets/compressed_iron', ['kubejs:compressed_double_sheet']),
	event.add('forge:double_sheets', ['kubejs:compressed_double_sheet']),
	event.add('forge:sheets/compressed_iron', ['kubejs:compressed_sheet']),
	event.add('forge:sheets', ['kubejs:compressed_sheet']),
	event.add('forge:wires/compressed_iron', ['kubejs:compressed_wire']),
	event.add('forge:wires', ['kubejs:compressed_wire', 'immersivegeology:wire_zinc', 'immersivegeology:wire_tungsten']),
	event.add('forge:double_ingots/compressed_iron', ['kubejs:compressed_double_ingot']),
	event.add('forge:double_ingots', ['kubejs:compressed_double_ingot']),
	event.add('forge:ingots', ['refinedstorage:quartz_enriched_iron', 'createbigcannons:nethersteel_ingot']),
	event.add('forge:nuggets', ['createbigcannons:nethersteel_nugget']),
	event.add('forge:storage_blocks', ['refinedstorage:quartz_enriched_iron_block', 'createbigcannons:nethersteel_block']),
	event.add('forge:storage_blocks/quartz_iron', ['refinedstorage:quartz_enriched_iron_block']),
	event.add('forge:storage_blocks/tungsten', ['immersivegeology:storage_block_tungsten']),
	event.add('forge:storage_blocks/zinc', ['immersivegeology:storage_block_zinc']),
	event.add('forge:storage_blocks/nethersteel', ['createbigcannons:nethersteel_block']),
	event.add('forge:ingots/iron_quartz', ['refinedstorage:quartz_enriched_iron']),
	event.add('forge:ingots/irons', ['minecraft:iron_ingot','tfc:metal/ingot/wrought_iron']),
	event.add('forge:ingots/iron', ['tfc:metal/ingot/wrought_iron'])
	event.add('forge:ingots/allbronze', ['tfc:metal/ingot/bronze','tfc:metal/ingot/bismuth_bronze','tfc:metal/ingot/black_bronze']),
	event.add('forge:plates/allbronze', ['tfc:metal/sheet/bronze','tfc:metal/sheet/bismuth_bronze','tfc:metal/sheet/black_bronze']),
	event.add('forge:ingots/glass', ['kubejs:primitive_glass_pane']),
	event.add('forge:sheets/plastic', ['tfmg:plastic_sheet']),
	event.add('forge:ingots/plastic', ['pneumaticcraft:plastic']),
	event.add('forge:glass_panes', ['kubejs:primitive_glass_pane','minecraft:glass_pane']),
	event.add('forge:2panes', ['kubejs:primitive_glass_pane','minecraft:glass_pane']),
	//event.add('forge:glass/bottle', ['minecraft:glass_bottle','tfc:empty_jar']),
	//event.add('forge:ingots/seared_stone', ['tconstruct:seared_brick']),
	event.add('forge:rock_andesite_alloy', ['tfc:rock/loose/andesite']),
	event.add('forge:rods', [
		'immersivegeology:rod_cobalt',
		'immersivegeology:rod_manganese',
		'immersivegeology:rod_molybdenum',
		'immersivegeology:rod_neodymium',
		'immersivegeology:rod_osmium',
		'immersivegeology:rod_platinum',
		'immersivegeology:rod_hastelloy',
		'immersivegeology:rod_sodium',
		'immersivegeology:rod_thorium',
		'immersivegeology:rod_tin',
		'immersivegeology:rod_titanium',
		'immersivegeology:rod_tungsten',
		'immersivegeology:rod_unobtanium',
		'immersivegeology:rod_vanadium',
		'immersivegeology:rod_zinc',
		'immersivegeology:rod_zirconium',
		'immersiveengineering:stick_aluminum',
		//'vintageimprovements:aluminum_rod',
		'vintageimprovements:cobalt_rod',
		'vintageimprovements:constantan_rod',
		//'vintageimprovements:lead_rod',
		'vintageimprovements:osmium_rod',
		'vintageimprovements:pig_iron_rod',
		'vintageimprovements:platinum_rod',
		'vintageimprovements:steel_rod',
		//'vintageimprovements:uranium_rod',
	]),
	event.add('forge:gears', [
		'immersivegeology:gear_aluminum',
		'immersivegeology:gear_bronze',
		'immersivegeology:gear_chromium',
		'immersivegeology:gear_cobalt',
		'immersivegeology:gear_copper',
		'immersivegeology:gear_gold',
		'immersivegeology:gear_iron',
		'immersivegeology:gear_lead',
		'immersivegeology:gear_manganese',
		'immersivegeology:gear_neodymium',
		'immersivegeology:gear_nickel',
		'immersivegeology:gear_osmium',
		'immersivegeology:gear_platinum',
		'immersivegeology:gear_hastelloy',
		'immersivegeology:gear_silver',
		'immersivegeology:gear_steel',
		'immersivegeology:gear_sodium',
		'immersivegeology:gear_thorium',
		'immersivegeology:gear_tin',
		'immersivegeology:gear_titanium',
		'immersivegeology:gear_tungsten',
		'immersivegeology:gear_unobtanium',
		'immersivegeology:gear_uranium',
		'immersivegeology:gear_vanadium',
		'immersivegeology:gear_zinc',
		'immersivegeology:gear_zirconium'
	]),
	event.add('forge:plates', [
		'immersivegeology:plate_bronze',
		'immersivegeology:plate_chromium',
		'immersivegeology:plate_cobalt',
		'immersivegeology:plate_manganese',
		'immersivegeology:plate_molybdenum',
		'immersivegeology:plate_neodymium',
		'immersivegeology:plate_osmium',
		'immersivegeology:plate_platinum',
		'immersivegeology:plate_hastelloy',
		'immersivegeology:plate_sodium',
		'immersivegeology:plate_thorium',
		'immersivegeology:plate_tin',
		'immersivegeology:plate_titanium',
		'immersivegeology:plate_tungsten',
		'immersivegeology:plate_unobtanium',
		'immersivegeology:plate_vanadium',
		'immersivegeology:plate_zinc',
		'immersivegeology:plate_zirconium'
	]),
	event.add('forge:storage_blocks', [
		'immersivegeology:storage_block_bronze',
		'immersivegeology:storage_block_chromium',
		'immersivegeology:storage_block_cobalt',
		'immersivegeology:storage_block_manganese',
		'immersivegeology:storage_block_molybdenum',
		'immersivegeology:storage_block_neodymium',
		'immersivegeology:storage_block_osmium',
		'immersivegeology:storage_block_platinum',
		'immersivegeology:storage_block_hastelloy',
		'immersivegeology:storage_block_sodium',
		'immersivegeology:storage_block_thorium',
		'immersivegeology:storage_block_tin',
		'immersivegeology:storage_block_titanium',
		'immersivegeology:storage_block_tungsten',
		'immersivegeology:storage_block_unobtanium',
		'immersivegeology:storage_block_vanadium',
		'immersivegeology:storage_block_zinc',
		'immersivegeology:storage_block_zirconium'
	]),
	event.add('forge:rods/iron', ['tfc:metal/rod/wrought_iron']),
	event.add('forge:rods/compressed_iron', ['kubejs:compressed_rod']),
	event.add('forge:plates', ['kubejs:compressed_sheet','tfc:metal/sheet/rose_gold','tfc:metal/sheet/zinc','tfc:metal/sheet/brass','tfc:metal/sheet/bronze','tfc:metal/sheet/tin']),
	//event.add('inventorio:pickaxes', ['#tconstruct:modifiable/harvest/stone']),
	//event.add('inventorio:axes', ['#tconstruct:modifiable/melee/primary']),
	//event.add('inventorio:shovels', ['#tconstruct:modifiable/harvest/primary']),
	//event.add('inventorio:hoes', ['#tconstruct:modifiable/harvest/primary', '#tfc:knives']),
	//event.add('inventorio:swords', ['#tconstruct:modifiable/melee/sword','#tconstruct:modifiable/melee/parry']),
	event.add('forge:canvas', ['farmersdelight:canvas']),
	event.add('forge:plates/compressed_iron', ['kubejs:compressed_sheet']),
	event.add('forge:plates/iron', ['tfc:metal/sheet/wrought_iron']),
	event.add('forge:plates/steel', ['tfc:metal/sheet/steel']),
	event.add('forge:plates/gold', ['tfc:metal/sheet/gold']),
	event.add('forge:plates/rose_gold', ['tfc:metal/sheet/rose_gold']),
	event.add('forge:plates/copper', ['tfc:metal/sheet/copper']),
	event.add('forge:plates/brass', ['tfc:metal/sheet/brass']),
	event.add('forge:plates/bronze', ['tfc:metal/sheet/bronze']),
	event.add('forge:plates/nickel', ['tfc:metal/sheet/nickel']),
	event.add('forge:plates/silver', ['tfc:metal/sheet/silver']),
	event.add('forge:plates/steel', ['tfc:metal/sheet/steel']),
	event.add('forge:plates/tin', ['tfc:metal/sheet/tin']),
	event.add('forge:plates/zinc', ['tfc:metal/sheet/zinc']),
	event.add('forge:plates/cast_iron', ['tfc:metal/sheet/cast_iron']),
	event.add('forge:plates/sterling_silver', ['tfc:metal/sheet/sterling_silver']),
	event.add('forge:plates/blue_steel', ['tfc:metal/sheet/blue_steel']),
	event.add('forge:plates/red_steel', ['tfc:metal/sheet/red_steel']),
	event.add('forge:plates/black_steel', ['tfc:metal/sheet/black_steel']),
	event.add('forge:plates/electrum', ['tfc_ie_addon:metal/sheet/electrum']),
	event.add('forge:plates/constantan', ['tfc_ie_addon:metal/sheet/constantan']),
	event.add('forge:plates/aluminum', ['tfc_ie_addon:metal/sheet/aluminum']),
	event.add('forge:plates/uranium', ['tfc_ie_addon:metal/sheet/uranium']),
	event.add('forge:plates/lead', ['tfc_ie_addon:metal/sheet/lead']),

	event.add('forge:springs/steel', ['vintageimprovements:steel_spring']),
	event.add('forge:small_springs/steel', ['vintageimprovements:small_steel_spring']),
	event.add('forge:springs/copper', ['vintageimprovements:copper_spring']),
	event.add('forge:small_springs/copper', ['vintageimprovements:small_copper_spring']),
	event.add('forge:springs/electrum', ['vintageimprovements:electrum_spring']),
	event.add('forge:small_springs/electrum', ['vintageimprovements:small_electrum_spring']),
	event.add('forge:springs/aluminum', ['vintageimprovements:aluminum_spring']),
	event.add('forge:small_springs/aluminum', ['vintageimprovements:small_aluminum_spring']),

	event.add('forge:cloth', ['tfc:silk_cloth', 'tfc:burlap_cloth','tfc:wool_cloth']),
	event.add('forge:dusts/charcoal', ['tfc:powder/charcoal']),
	event.add('forge:dusts/sulfur', ['tfc:powder/sulfur']),
	event.add('forge:dusts/ash', ['tfc:powder/wood_ash', 'bodyhygiene:ash']),
	event.add('forge:glue', ['tfc:glue', 'create:super_glue', 'kubejs:resin']),
	event.add('forge:mortar', ['tfc:mortar']),
	event.add('forge:bitumen', ['tfmg:bitumen']),
	event.add('forge:bicoals', ['tfc:ore/bituminous_coal', 'minecraft:coal']),
	event.add('forge:raw_materials', ['createoreexcavation:raw_diamond', 'createoreexcavation:raw_emerald', 'createoreexcavation:raw_redstone', 'beyond_earth:raw_desh', 'beyond_earth:raw_ostrum', 'beyond_earth:raw_calorite']),
	event.add('forge:raw_materials/platinum', ['kubejs:raw_platinum'])
	event.add('forge:raw_materials/diamond', ['createoreexcavation:raw_diamond'])
	event.add('forge:raw_materials/emerald', ['createoreexcavation:raw_emerald'])
	event.add('forge:raw_materials/redstone', ['createoreexcavation:raw_redstone'])
	event.add('forge:tallow_source', ['tfc:blubber', 'minecraft:rotten_flesh'])
	event.add('tfc:shears', ['htm:flint_shears'])
	event.add('forge:sheetmetals_colored',[
		'immersiveengineering:sheetmetal_colored_white',
		'immersiveengineering:sheetmetal_colored_orange',
		'immersiveengineering:sheetmetal_colored_magenta',
		'immersiveengineering:sheetmetal_colored_light_blue',
		'immersiveengineering:sheetmetal_colored_yellow',
		'immersiveengineering:sheetmetal_colored_lime',
		'immersiveengineering:sheetmetal_colored_pink',
		'immersiveengineering:sheetmetal_colored_gray',
		'immersiveengineering:sheetmetal_colored_light_gray',
		'immersiveengineering:sheetmetal_colored_cyan',
		'immersiveengineering:sheetmetal_colored_purple',
		'immersiveengineering:sheetmetal_colored_blue',
		'immersiveengineering:sheetmetal_colored_brown',
		'immersiveengineering:sheetmetal_colored_green',
		'immersiveengineering:sheetmetal_colored_red',
		'immersiveengineering:sheetmetal_colored_black'])
	event.add('forge:sheetmetal_slabs_colored',[
		'immersiveengineering:slab_sheetmetal_colored_white',
		'immersiveengineering:slab_sheetmetal_colored_orange',
		'immersiveengineering:slab_sheetmetal_colored_magenta',
		'immersiveengineering:slab_sheetmetal_colored_light_blue',
		'immersiveengineering:slab_sheetmetal_colored_yellow',
		'immersiveengineering:slab_sheetmetal_colored_lime',
		'immersiveengineering:slab_sheetmetal_colored_pink',
		'immersiveengineering:slab_sheetmetal_colored_gray',
		'immersiveengineering:slab_sheetmetal_colored_light_gray',
		'immersiveengineering:slab_sheetmetal_colored_cyan',
		'immersiveengineering:slab_sheetmetal_colored_purple',
		'immersiveengineering:slab_sheetmetal_colored_blue',
		'immersiveengineering:slab_sheetmetal_colored_brown',
		'immersiveengineering:slab_sheetmetal_colored_green',
		'immersiveengineering:slab_sheetmetal_colored_red',
		'immersiveengineering:slab_sheetmetal_colored_black'])
	event.add('immersiveengineering:press_molds',[
		'immersiveengineering:mold_plate',
		'immersiveengineering:mold_gear',
		'immersiveengineering:mold_rod',
		'immersiveengineering:mold_bullet_casing',
		//'immersiveengineering:mold_wire',
		'immersiveengineering:mold_packing_4',
		//'immersiveengineering:mold_packing_9',
		'immersiveengineering:mold_unpacking'])
	event.add('forge:ores/dirty_piles',[
		'tfcorewashing:dirty_pile_bauxite',
		'tfcorewashing:dirty_pile_bismuthinite',
		'tfcorewashing:dirty_pile_cassiterite',
		'tfcorewashing:dirty_pile_chromite',
		'tfcorewashing:dirty_pile_cinnabar',
		'tfcorewashing:dirty_pile_copper',
		'tfcorewashing:dirty_pile_cryolite',
		'tfcorewashing:dirty_pile_galena',
		'tfcorewashing:dirty_pile_garnierite',
		'tfcorewashing:dirty_pile_gold',
		'tfcorewashing:dirty_pile_graphite',
		'tfcorewashing:dirty_pile_hematite',
		'tfcorewashing:dirty_pile_limonite',
		'tfcorewashing:dirty_pile_magnetite',
		'tfcorewashing:dirty_pile_malachite',
		'tfcorewashing:dirty_pile_silver',
		'tfcorewashing:dirty_pile_sphalerite',
		'tfcorewashing:dirty_pile_sulfur',
		'tfcorewashing:dirty_pile_tetrahedrite',
		'tfcorewashing:dirty_pile_uraninite'])
	event.add('forge:ores/pellets',[
		'tfcorewashing:pellet_bauxite',
		'tfcorewashing:pellet_bismuthinite',
		'tfcorewashing:pellet_cassiterite',
		'tfcorewashing:pellet_chromium',
		'tfcorewashing:pellet_copper',
		'tfcorewashing:pellet_galena',
		'tfcorewashing:pellet_garnierite',
		'tfcorewashing:pellet_gold',
		'tfcorewashing:pellet_hematite',
		'tfcorewashing:pellet_limonite',
		'tfcorewashing:pellet_magnetite',
		'tfcorewashing:pellet_malachite',
		'tfcorewashing:pellet_silver',
		'tfcorewashing:pellet_sphalerite',
		'tfcorewashing:pellet_tetrahedrite',
		'tfcorewashing:pellet_uraninite'])
	event.add('forge:ores/briquettes',[
		'tfcorewashing:briquet_bauxite',
		'tfcorewashing:briquet_bismuthinite',
		'tfcorewashing:briquet_cassiterite',
		'tfcorewashing:briquet_chromium',
		'tfcorewashing:briquet_copper',
		'tfcorewashing:briquet_galena',
		'tfcorewashing:briquet_garnierite',
		'tfcorewashing:briquet_gold',
		'tfcorewashing:briquet_hematite',
		'tfcorewashing:briquet_limonite',
		'tfcorewashing:briquet_magnetite',
		'tfcorewashing:briquet_malachite',
		'tfcorewashing:briquet_silver',
		'tfcorewashing:briquet_sphalerite',
		'tfcorewashing:briquet_tetrahedrite',
		'tfcorewashing:briquet_uraninite'])
	event.add('forge:sand_piles',[
		'tfcorewashing:pile_black_sand',
		'tfcorewashing:pile_brown_sand',
		'tfcorewashing:pile_green_sand',
		'tfcorewashing:pile_pink_sand',
		'tfcorewashing:pile_red_sand',
		'tfcorewashing:pile_white_sand',
		'tfcorewashing:pile_yellow_sand'
	])
	event.add('createoreexcavation:high_tier_drills', ['createoreexcavation:diamond_drill','createoreexcavation:netherite_drill'])
	event.add('forge:berries', ['tfc:food/cranberry','tfc:food/bunchberry','tfc:food/strawberry','tfc:food/raspberry','tfc:food/wintergreen_berry','tfc:food/blackberry','tfc:food/blueberry'])
	event.add('forge:apples', ['tfc:food/green_apple','tfc:food/red_apple'])
	event.add('forge:sugar_source', ['tfc:food/sugarcane','minecraft:sugar_cane'])
	event.add('forge:ethanol_source', ['tfc:food/beet','tfc:food/potato','tfc:food/cranberry','tfc:food/blackberry','tfc:food/blueberry','tfc:food/bunchberry','tfc:food/raspberry','tfc:food/green_apple','tfc:food/red_apple','tfc:food/sugarcane'])
	//event.add('tfc:small_fishing_bait', ['waterstrainer:worm','exnihilosequentia:silkworm'])
	event.add('forge:head_hardened_steel', ['tfc:metal/double_ingot/blue_steel','tfc:metal/double_ingot/red_steel'])
	event.add('forge:space_ores', ['ad_astra:raw_desh','ad_astra:raw_ostrum','ad_astra:raw_calorite'	])
	event.add('ad_astra_platform:iron_plates', ['tfc:metal/sheet/wrought_iron'])
	event.add('ad_astra_platform:iron_rods', ['tfc:metal/rod/wrought_iron'])
	event.add('ad_astra_platform:steel_blocks', ['immersiveengineering:storage_steel'])
	event.add('ad_astra_platform:steel_ingots', ['tfc:metal/ingot/steel'])
	event.add('ad_astra_platform:steel_plates', ['tfc:metal/sheet/steel'])
	// ==========  REMOVE =================================================================================
	event.remove('forge:bark', ['farmersdelight:tree_bark'])
	event.remove('minecraft:mineable/pickaxe', ['minecraft:ice','minecraft:packed_ice','minecraft:blue_ice'])
	event.remove('minecraft:carpets', ['farmersdelight:half_tatami_mat','farmersdelight:full_tatami_mat'])
	event.remove('minecraft:wooden_slabs', ['immersiveengineering:slab_treated_wood_horizontal'])
	event.remove('minecraft:slabs', ['immersiveengineering:slab_treated_wood_horizontal'])
	event.remove('minecraft:wooden_stairs', ['immersiveengineering:stairs_treated_wood_horizontal'])
	event.remove('minecraft:stairs', [
		'immersiveengineering:stairs_alu_scaffolding_standard',
		'immersiveengineering:stairs_alu_scaffolding_grate_top',
		'immersiveengineering:stairs_alu_scaffolding_wooden_top',
		'immersiveengineering:stairs_steel_scaffolding_standard',
		'immersiveengineering:stairs_steel_scaffolding_grate_top',
		'immersiveengineering:stairs_steel_scaffolding_wooden_top',
		'immersiveengineering:stairs_treated_wood_horizontal'])
	event.remove('forge:storage_blocks/copper', ['minecraft:cut_copper'])
	event.remove('forge:ingots/cast_iron', ['minecraft:iron_ingot'])
	event.remove('forge:dusts/coal_coke', ['tfc:powder/graphite'])
	event.remove('forge:ores/clean_dusts', 'tfc:powder/graphite')
	event.remove('forge:leather', [
		'butchersdelight:cow_hide','butchersdelight:sheephide','butchersdelight:hoglinskin','untamedwilds:hide_ashen',
		'untamedwilds:hide_beige','untamedwilds:hide_black','untamedwilds:hide_brown','untamedwilds:hide_golden',
		'untamedwilds:hide_gray','untamedwilds:hide_orange','untamedwilds:hide_tan','untamedwilds:hide_white',
	])
	event.remove('forge:string', ['tfc_stone_tools:plant_string'])
	event.remove('forge:string/plant', ['tfc_stone_tools:plant_string'])
	//======================================================================================================
	// ========= REMOVE ALL TAGS ===========================================================================
	//======================================================================================================
	event.removeAllTagsFrom(
		'ad_astra:iron_rod',
		'ad_astra:iron_plate',
		'ad_astra:steel_block',
		'ad_astra:steel_ingot',
		'ad_astra:steel_nugget',
		'ad_astra:steel_plate',
		'ad_astra:steel_rod',
		//
		'create:brass_ingot',
		'create:brass_sheet',
		'create:copper_sheet',
		'create:golden_sheet',
		'create:iron_sheet',
		'create:wheat_flour',
		'create:zinc_ingot',
		'create:zinc_nugget',
		'create:zinc_block',
		//
		'createbigcannons:cast_iron_block',
		'createbigcannons:cast_iron_ingot',
		'createbigcannons:cast_iron_nugget',
		'createbigcannons:bronze_block',
		'createbigcannons:bronze_ingot',
		'createbigcannons:bronze_scrap',
		'createbigcannons:steel_block',
		'createbigcannons:steel_ingot',
		'createbigcannons:steel_scrap',
		//
		'createaddition:brass_rod',
		'createaddition:copper_rod',
		'createaddition:electrum_ingot',
		'createaddition:electrum_nugget',
		'createaddition:electrum_rod',
		'createaddition:electrum_sheet',
		//'createaddition:electrum_wire',
		'createaddition:gold_rod',
		'createaddition:iron_rod',
		'createaddition:zinc_sheet',
		//
		'createmetallurgy:copper_dust',
		'createmetallurgy:gold_dust',
		'createmetallurgy:iron_dust',
		'createmetallurgy:steel_block',
		'createmetallurgy:steel_ingot',
		'createmetallurgy:tungsten_block',
		'createmetallurgy:tungsten_ingot',
		'createmetallurgy:tungsten_sheet',
		'createmetallurgy:tungsten_nugget',
		'createmetallurgy:tungsten_wire',
		'createmetallurgy:coke',
		'createmetallurgy:coke_block',
		//
		'htm:sawdust',
		//
		'immersiveengineering:dust_sulfur',
		'immersiveengineering:dust_copper',
		'immersiveengineering:dust_gold',
		'immersiveengineering:dust_iron',
		'immersiveengineering:dust_lead',
		'immersiveengineering:dust_saltpeter',
		'immersiveengineering:dust_steel',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:dust_wood',
		'immersiveengineering:ingot_nickel',
		'immersiveengineering:ingot_silver',
		'immersiveengineering:ingot_steel',
		'immersiveengineering:nugget_copper',
		'immersiveengineering:plate_aluminum',
		'immersiveengineering:plate_constantan',
		'immersiveengineering:plate_copper',
		'immersiveengineering:plate_electrum',
		'immersiveengineering:plate_gold',
		'immersiveengineering:plate_iron',
		'immersiveengineering:plate_lead',
		'immersiveengineering:plate_nickel',
		'immersiveengineering:plate_silver',
		'immersiveengineering:plate_steel',
		'immersiveengineering:plate_uranium',
		'immersiveengineering:stick_aluminum',
		'immersiveengineering:stick_iron',
		'immersiveengineering:stick_steel',
		'immersiveengineering:stick_stick',
		'immersiveengineering:wire_aluminum',
		'immersiveengineering:wire_copper',
		'immersiveengineering:wire_electrum',
		'immersiveengineering:wire_lead',
		'immersiveengineering:wire_steel',
		//
		'immersivegeology:ingot_bronze',
		'immersivegeology:wire_bronze',
		'immersivegeology:rod_bronze',
		'immersivegeology:dust_bronze',
		'immersivegeology:plate_bronze',
		'immersivegeology:nugget_bronze',
		'immersivegeology:storage_block_bronze',
		'immersivegeology:rod_copper',
		'immersivegeology:rod_chromium',
		'immersivegeology:wire_iron',
		'immersivegeology:ingot_osmium',
		'immersivegeology:nugget_osmium',
		'immersivegeology:wire_osmium',
		'immersivegeology:rod_osmium',
		'immersivegeology:dust_osmium',
		'immersivegeology:plate_osmium',
		'immersivegeology:storage_block_osmium',
		'immersivegeology:nugget_tin',
		'immersivegeology:wire_tin',
		'immersivegeology:plate_tin',
		'immersivegeology:rod_tin',
		'immersivegeology:ingot_tin',
		'immersivegeology:wire_platinum',
		'immersivegeology:ingot_zinc',
		'immersivegeology:rod_zinc',
		'immersivegeology:plate_zinc',
		'immersivegeology:wire_zinc',
		'immersivegeology:wire_chromium',
		'immersivegeology:gear_aluminum',
		'immersivegeology:gear_bronze',
		'immersivegeology:gear_chromium',
		'immersivegeology:gear_copper',
		'immersivegeology:gear_gold',
		'immersivegeology:gear_iron',
		'immersivegeology:gear_lead',
		'immersivegeology:gear_nickel',
		'immersivegeology:gear_silver',
		'immersivegeology:gear_steel',
		'immersivegeology:gear_stainlesssteel',
		'immersivegeology:gear_tin',
		'immersivegeology:gear_uranium',
		'immersivegeology:gear_zinc',
		//
		'mekanism:block_lead',
		'mekanism:block_steel',
		'mekanism:block_uranium',
		'mekanism:dust_charcoal',
		'mekanism:dust_diamond',
		'mekanism:dust_obsidian',
		'mekanism:dust_sulfur',
		'mekanism:ingot_bronze',
		'mekanism:ingot_lead',
		'mekanism:ingot_steel',
		'mekanism:ingot_tin',
		'mekanism:ingot_uranium',
		'mekanism:nugget_lead',
		'mekanism:nugget_steel',
		'mekanism:nugget_uranium',
		'mekanism:raw_lead',
		'mekanism:raw_uranium',
		'mekanism:sawdust',
		//
		'minecraft:chest',
		'minecraft:copper_ingot',
		'minecraft:glass',
		'minecraft:gold_ingot',
		//
		'pneumaticcraft:diesel',
		'pneumaticcraft:ethanol',
		'pneumaticcraft:gasoline',
		'pneumaticcraft:kerosene',
		'pneumaticcraft:lubricant',
		'pneumaticcraft:oil',
		'pneumaticcraft:wheat_flour',
		//
		'car:iron_stick',
		//
		'tfc_items:leather_sheet',
		'tfc_items:leather_strip',
		'tfc_items:aluminum_wire',
		'tfc_items:bronze_wire',
		'tfc_items:brass_wire',
		'tfc_items:copper_wire',
		'tfc_items:nickel_wire',
		'tfc_items:wrought_iron_wire',
		'tfc_items:caast_iron_wire',
		'tfc_items:gold_wire',
		'tfc_items:rose_gold_wire',
		'tfc_items:electrum_wire',
		'tfc_items:constantan_wire',
		'tfc_items:lead_wire',
		'tfc_items:uranium_wire',
		'tfc_items:tin_wire',
		'tfc_items:zinc_wire',
		//
		'tfmg:steel_block',
		'tfmg:aluminum_block',
		'tfmg:lead_block',
		'tfmg:nickel_block',
		'tfmg:coal_coke_block',
		'tfmg:lead_ore',
		'tfmg:deepslate_lead_ore',
		'tfmg:deepslate_nickel_ore',
		'tfmg:nickel_ingot',
		'tfmg:nickel_ore',
		'tfmg:lithium_ore',
		'tfmg:deepslate_lithium_ore',
		'tfmg:sulfur',
		'tfmg:lignite',
		'tfmg:aluminum_ingot',
		'tfmg:cast_iron_ingot',
		'tfmg:lead_ingot',
		'tfmg:coal_coke',
		'tfmg:coal_coke_dust',
		'tfmg:heavy_plate',
		'tfmg:steel_ingot',
		'tfmg:lead_ingot',
		'tfmg:copper_coil',
		'tfmg:copper_wire',
		'tfmg:aluminum_wire',
		'tfmg:raw_lead',
		'tfmg:raw_nickel',
		'tfmg:steel_helmet',
		'tfmg:steel_chestplate',
		'tfmg:steel_leggings',
		'tfmg:steel_boots',
		'tfmg:copper_cable',
		'tfmg:steel_axe',
		'tfmg:steel_hoe',
		'tfmg:steel_shovel',
		'tfmg:steel_pickaxe',
		'tfmg:steel_sword',
		'tfmg:aluminum_axe',
		'tfmg:aluminum_hoe',
		'tfmg:aluminum_shovel',
		'tfmg:aluminum_pickaxe',
		'tfmg:aluminum_sword',
		'tfmg:lead_axe',
		'tfmg:lead_hoe',
		'tfmg:lead_shovel',
		'tfmg:lead_pickaxe',
		'tfmg:lead_sword',
		'tfmg:sulfur_dust',
		'tfmg:sulfur_dust',

		//
		'tinycoal:tinycharcoal',
		'tinycoal:tinycoal',
		//
		'vintageimprovements:aluminum_rod',
		'vintageimprovements:aluminum_sheet',
		'vintageimprovements:bronze_rod',
		'vintageimprovements:bronze_sheet',
		'vintageimprovements:cast_iron_rod',
		'vintageimprovements:cast_iron_sheet',
		'vintageimprovements:constantan_rod',
		'vintageimprovements:constantan_sheet',
		'vintageimprovements:electrum_rod',
		'vintageimprovements:lead_rod',
		'vintageimprovements:lead_sheet',
		'vintageimprovements:nickel_rod',
		'vintageimprovements:nickel_sheet',
		'vintageimprovements:nickel_sheet',
		'vintageimprovements:rose_gold_rod',
		'vintageimprovements:silver_rod',
		'vintageimprovements:silver_sheet',
		'vintageimprovements:steel_rod',
		'vintageimprovements:tin_rod',
		'vintageimprovements:tin_sheet',
		'vintageimprovements:uranium_rod',
		'vintageimprovements:zinc_rod',
		'vintageimprovements:zinc_sheet',
		'vintageimprovements:silver_wire',
		'vintageimprovements:steel_wire',
		//
		//'exnihilosequentia:copper_nugget',
		//'exnihilosequentia:zinc_ingot',
		//'exnihilosequentia:lead_ingot',
		//'exnihilosequentia:silver_ingot',
		//'exnihilosequentia:nickel_ingot',
		//'exnihilosequentia:tin_ingot',
		//'exnihilosequentia:platinum_ingot',
		//'exnihilosequentia:aluminum_ingot',
		//'exnihilosequentia:uranium_ingot',
		//'exnihilosequentia:raw_lead',
		//'exnihilosequentia:raw_silver',
		//'exnihilosequentia:raw_nickel',
		//'exnihilosequentia:raw_tin',
		//'exnihilosequentia:raw_platinum',
		//'exnihilosequentia:raw_aluminum',
		//'exnihilosequentia:raw_uranium',
		//'exnihilosequentia:raw_zinc',
	)
})