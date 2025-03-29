//priority: 10
ServerEvents.recipes(event => {
	// ==== replace item on crafting =========================================================================================
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:torch', 'tfc:torch')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:kelp', 'tfc:plant/leafy_kelp')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cake', 'tfc:cake')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:shears', '#tfc:shears')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_button', '#minecraft:buttons')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#tfc:rock/raw')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:shears', '#tfc:shears')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_button', '#minecraft:buttons')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_slab', '#forge:slab/raw_stone')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:furnace', 'minecraft:blast_furnace')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:chest', '#forge:chests')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:wheat', 'tfc:food/wheat')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:carrot', 'tfc:food/carrot')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:chain', 'tfc:metal/chain/wrought_iron')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:dried_kelp', 'tfc:food/dried_kelp')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:barrel', '#tfcbarrels:barrels')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:sand', '#forge:sand')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:fishing_rod', '#forge:fishing_rods')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:iron_ingot', '#forge:ingots/irons')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:gold_ingot', '#forge:ingots/gold')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:copper_ingot', '#forge:ingots/copper')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cocoa_beans', 'firmalife:food/cocoa_beans')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:composter', 'tfc:composter')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'mekanism:dust_charcoal', 'tfc:powder/charcoal')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:zinc_ingot', '#forge:ingots/zinc')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:compass', 'firmaciv:firmaciv_compass')
	//
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:stone', '#tfc:rock/raw')
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:sand', '#forge:sand')
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:fishing_rod', '#forge:fishing_rods')
	//
	event.replaceOutput({}, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')
	event.replaceOutput({}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
//============================================================================================================================
//         UNIFY WOOD VANILLA on TFC
//============================================================================================================================
	event.shapeless('minecraft:oak_log', ['tfc:wood/log/oak'])
    event.shapeless('minecraft:oak_log', ['tfc:wood/log/maple'])
    event.shaped('minecraft:oak_planks', ['A'], {A: 'tfc:wood/planks/oak'})
	event.shaped('minecraft:oak_planks', ['A'], {A: 'tfc:wood/planks/maple'})
	event.shaped('minecraft:oak_stairs', ['A'], {A: 'tfc:wood/planks/oak_stairs'})
	event.shaped('minecraft:oak_stairs', ['A'], {A: 'tfc:wood/planks/maple_stairs'})
	event.shaped('minecraft:oak_slab', ['A'], {A: 'tfc:wood/planks/oak_slab'})
	event.shaped('minecraft:oak_slab', ['A'], {A: 'tfc:wood/planks/maple_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:spruce_log', ['tfc:wood/log/spruce'])
    event.shapeless('minecraft:spruce_log', ['tfc:wood/log/sequoia'])
    event.shaped('minecraft:spruce_planks', ['A'], {A: 'tfc:wood/planks/spruce'})
	event.shaped('minecraft:spruce_planks', ['A'], {A: 'tfc:wood/planks/sequoia'})
	event.shaped('minecraft:spruce_stairs', ['A'], {A: 'tfc:wood/planks/spruce_stairs'})
	event.shaped('minecraft:spruce_stairs', ['A'], {A: 'tfc:wood/planks/sequoia_stairs'})
	event.shaped('minecraft:spruce_slab', ['A'], {A: 'tfc:wood/planks/spruce_slab'})
	event.shaped('minecraft:spruce_slab', ['A'], {A: 'tfc:wood/planks/sequoia_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:birch_log', ['tfc:wood/log/birch'])
    event.shapeless('minecraft:birch_log', ['tfc:wood/log/douglas_fir'])
    event.shapeless('minecraft:birch_log', ['tfc:wood/log/pine'])
    event.shaped('minecraft:birch_planks', ['A'], {A: 'tfc:wood/planks/birch'})
	event.shaped('minecraft:birch_planks', ['A'], {A: 'tfc:wood/planks/douglas_fir'})
	event.shaped('minecraft:birch_planks', ['A'], {A: 'tfc:wood/planks/pine'})
	event.shaped('minecraft:birch_stairs', ['A'], {A: 'tfc:wood/planks/birch_stairs'})
	event.shaped('minecraft:birch_stairs', ['A'], {A: 'tfc:wood/planks/douglas_fir_stairs'})
	event.shaped('minecraft:birch_stairs', ['A'], {A: 'tfc:wood/planks/pine_stairs'})
	event.shaped('minecraft:birch_slab', ['A'], {A: 'tfc:wood/planks/birch_slab'})
	event.shaped('minecraft:birch_slab', ['A'], {A: 'tfc:wood/planks/douglas_fir_slab'})
	event.shaped('minecraft:birch_slab', ['A'], {A: 'tfc:wood/planks/pine_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:jungle_log', ['tfc:wood/log/ash'])
    event.shapeless('minecraft:jungle_log', ['tfc:wood/log/sycamore'])
    event.shaped('minecraft:jungle_planks', ['A'], {A: 'tfc:wood/planks/ash'})
	event.shaped('minecraft:jungle_planks', ['A'], {A: 'tfc:wood/planks/sycamore'})
	event.shaped('minecraft:jungle_stairs', ['A'], {A: 'tfc:wood/planks/ash_stairs'})
	event.shaped('minecraft:jungle_stairs', ['A'], {A: 'tfc:wood/planks/sycamore_stairs'})
	event.shaped('minecraft:jungle_slab', ['A'], {A: 'tfc:wood/planks/ash_slab'})
	event.shaped('minecraft:jungle_slab', ['A'], {A: 'tfc:wood/planks/sycamore_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:mangrove_log', ['tfc:wood/log/mangrove'])
    event.shaped('minecraft:mangrove_planks', ['A'], {A: 'tfc:wood/planks/mangrove'})
	event.shaped('minecraft:mangrove_stairs', ['A'], {A: 'tfc:wood/planks/mangrove_stairs'})
	event.shaped('minecraft:mangrove_slab', ['A'], {A: 'tfc:wood/planks/mangrove_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:cherry_log', ['tfc:wood/log/kapok'])
    event.shaped('minecraft:cherry_planks', ['A'], {A: 'tfc:wood/planks/kapok'})
	event.shaped('minecraft:cherry_stairs', ['A'], {A: 'tfc:wood/planks/kapok_stairs'})
	event.shaped('minecraft:cherry_slab', ['A'], {A: 'tfc:wood/planks/kapok_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:acacia_log', ['tfc:wood/log/acacia'])
    event.shapeless('minecraft:acacia_log', ['tfc:wood/log/rosewood'])
    event.shaped('minecraft:acacia_planks', ['A'], {A: 'tfc:wood/planks/acacia'})
	event.shaped('minecraft:acacia_planks', ['A'], {A: 'tfc:wood/planks/rosewood'})
	event.shaped('minecraft:acacia_stairs', ['A'], {A: 'tfc:wood/planks/acacia_stairs'})
	event.shaped('minecraft:acacia_stairs', ['A'], {A: 'tfc:wood/planks/rosewood_stairs'})
	event.shaped('minecraft:acacia_slab', ['A'], {A: 'tfc:wood/planks/acacia_slab'})
	event.shaped('minecraft:acacia_slab', ['A'], {A: 'tfc:wood/planks/rosewood_slab'})
	//------------------------------------------------------------------------------------
	event.shapeless('minecraft:dark_oak_log', ['tfc:wood/log/aspen'])
    event.shapeless('minecraft:dark_oak_log', ['tfc:wood/log/blackwood'])
    event.shaped('minecraft:dark_oak_planks', ['A'], {A: 'tfc:wood/planks/aspen'})
	event.shaped('minecraft:dark_oak_planks', ['A'], {A: 'tfc:wood/planks/blackwood'})
	event.shaped('minecraft:dark_oak_stairs', ['A'], {A: 'tfc:wood/planks/aspen_stairs'})
	event.shaped('minecraft:dark_oak_stairs', ['A'], {A: 'tfc:wood/planks/blackwood_stairs'})
	event.shaped('minecraft:dark_oak_slab', ['A'], {A: 'tfc:wood/planks/aspen_slab'})
	event.shaped('minecraft:dark_oak_slab', ['A'], {A: 'tfc:wood/planks/blackwood_slab'})
	// -------------------------------------------------------------------------------------
	event.shapeless('minecraft:bamboo_slab', ['minecraft:bamboo_stairs'])
	event.shapeless('minecraft:bamboo_stairs', ['minecraft:stripped_bamboo_block'])
// ========================================================================================================================
// ==================================        remove all recipes for type      =============================================
// ========================================================================================================================
	event.remove({type: 'minecraft:campfire_cooking'})
	event.remove({type: 'minecraft:smelting'})
	//
	//event.remove({type: 'minecraft:stonecutting'})
	event.remove({output: ['#forge:ingots', '#forge:nuggets', '#minecraft:coals', '#forge:gems', 'minecraft:redstone'], type: 'minecraft:blasting'})
	event.remove({output: ['#forge:meats'], type: 'minecraft:smoking'})
	event.remove({output: [
		'#forge:colored_sleeping_bag',
		'#forge:colored_hammock',
		'#forge:dyes',
		'#forge:ingots',
		'#forge:nuggets',
		//'#forge:dusts',
		'#forge:plates',
		'#forge:storage_blocks',
		'#forge:wires',
		'immersiveengineering:nugget_copper',
		'minecraft:bone_meal',
		'#minecraft:coals',
		'minecraft:honey_bottle',
		'minecraft:leather',
		'#minecraft:planks',
		'minecraft:paper',
		'minecraft:sugar',
		'minecraft:string',
		'minecraft:snow',
		'minecraft:white_carpet',
		'minecraft:white_bed',
		'#minecraft:wool',
		'#mekanism:colorable/candle',
		'mekanism:nugget_lead',
		'mekanism:nugget_steel',
		'mekanism:nugget_uranium',
		'#tfc:colored_shulker_boxes'
	], type: 'minecraft:crafting_shapeless'})
	event.remove({output: [
		'#forge:colored_sleeping_bag',
		'#forge:colored_hammock',
		//'#forge:glass',	
		'#forge:ingots',
		'#forge:storage_blocks',
		'minecraft:leather',
		'minecraft:paper',
		'#minecraft:wooden_slabs',
		'#minecraft:stairs',
		'minecraft:white_terracotta'
	], type: 'minecraft:crafting_shaped'})
//=================================================================================================
	event.remove([
		{id: 'minecraft:acacia_planks'},
		{id: 'minecraft:activator_rail'},
		{id: 'minecraft:arrow'},
		{id: 'minecraft:baked_potato_from_smoking'},
		{id: 'minecraft:birch_planks'},
		{id: 'minecraft:blaze_powder'},
		{id: 'minecraft:book'},
		{id: 'minecraft:cauldron'},
		{id: 'minecraft:crafting_table'},
		{id: 'minecraft:crimson_planks'},
		{id: 'minecraft:crossbow'},
		{id: 'minecraft:dark_oak_planks'},
		{id: 'minecraft:detector_rail'},
		{id: 'minecraft:diamond'},
		{id: 'minecraft:emerald'},
		{id: 'minecraft:ender_eye'},
		{id: 'minecraft:ens_ancient_debris'},
		{id: 'minecraft:ens_andesite'},
		{id: 'minecraft:ens_basalt'},
		{id: 'minecraft:ens_blackstone'},
		{id: 'minecraft:ens_cobblestone'},
		{id: 'minecraft:ens_crying_obsidian'},
		{id: 'minecraft:ens_diorite'},
		{id: 'minecraft:ens_granite'},
		//{id: 'minecraft:glass_pane'},
		{id: 'minecraft:glistering_melon_slice'},
		{id: 'minecraft:golden_apple'},
		{id: 'minecraft:golden_carrot'},
		{id: 'minecraft:honey_block'},
		{id: 'minecraft:hopper'},
		{id: 'minecraft:iron_bars'},
		{id: 'minecraft:iron_door'},
		{id: 'minecraft:iron_trapdoor'},
		{id: 'minecraft:jungle_planks'},
		{id: 'minecraft:lead'},
		{id: 'minecraft:minecart'},
		{id: 'minecraft:nether_brick'},
		{id: 'minecraft:oak_planks'},
		{id: 'minecraft:observer'},
		{id: 'minecraft:paper'},
		{id: 'minecraft:piston'},
		{id: 'minecraft:powered_rail'},
		{id: 'minecraft:soul_campfire'},
		{id: 'minecraft:spruce_planks'},
		{id: 'minecraft:stick'},
		{id: 'minecraft:stone_bricks'},
		{id: 'minecraft:warped_planks'},		
	])
//=============================================================================================================
	event.remove({output: [
		'minecraft:baked_potato',
		'minecraft:barrel',
		'minecraft:beehive',
		'minecraft:beetroot_soup',
		'#minecraft:boats',
		'minecraft:bread',
		'minecraft:cake',
		'minecraft:candle',
		'minecraft:carrot',
		'minecraft:cooked_porkchop',
	//	'minecraft:cooked_beef',	// should not be removed as that breaks TFC Artisanal's can/pot opening recipes
		'minecraft:cooked_chicken',
		'minecraft:cooked_rabbit',
		'minecraft:cooked_mutton',
		'minecraft:cooked_mutton',
		'minecraft:cooked_salmon',
		'minecraft:cooked_cod',
		'minecraft:cocoa_beans',
		'minecraft:copper_ingot',
		'minecraft:dried_kelp',
		'minecraft:fishing_rod',
		'minecraft:gold_ingot',
		'minecraft:kelp',
		'minecraft:lantern',
		'minecraft:mushroom_stew',
		'minecraft:potato',
		'minecraft:rabbit_stew',
		'minecraft:soul_lantern',
		'minecraft:suspicious_stew',
		'minecraft:shield',		
		'minecraft:stonecutter',		
		//'minecraft:smoker',
		'minecraft:torch',	
		// woods
		//'minecraft:oak_planks',
		//'minecraft:spruce_planks',
		//'minecraft:birch_planks',
		//'minecraft:jungle_planks',
		//'minecraft:acacia_planks',
		//'minecraft:dark_oak_planks',
		//'minecraft:oak_slab',
		//'minecraft:spruce_slab',
		//'minecraft:birch_slab',
		//'minecraft:jungle_slab',
		//'minecraft:acacia_slab',
		//'minecraft:dark_oak_slab',			
	]})
	event.remove({input: [
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken'
	], type: 'minecraft:crafting_shaped'})
})