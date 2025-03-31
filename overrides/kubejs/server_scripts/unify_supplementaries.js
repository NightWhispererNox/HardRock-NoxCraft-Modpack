//priority: 10
ServerEvents.recipes(event => {
	event.replaceInput({mod: 'supplementaries'}, 'minecraft:porkchop', '#tfc:foods/raw_meats')
	//event.replaceInput({mod: 'supplementaries'}, 'minecraft:oak_planks', 'tfc:wood/planks/oak')
    //event.replaceInput({mod: 'supplementaries'}, 'minecraft:birch_planks', 'tfc:wood/planks/birch')
    //event.replaceInput({mod: 'supplementaries'}, 'minecraft:acacia_planks', 'tfc:wood/planks/acacia')
    //event.replaceInput({mod: 'supplementaries'}, 'minecraft:jungle_planks', 'tfc:wood/planks/ash')
    //event.replaceInput({mod: 'supplementaries'}, 'minecraft:dark_oak_planks', 'tfc:wood/planks/hickory')
    //event.replaceInput({mod: 'supplementaries'}, 'minecraft:spruce_planks', 'tfc:wood/planks/spruce')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:stone_bricks', 'tfc:rock/bricks/granite')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:stone_bricks_slab', 'tfc:rock/bricks/granite_slab')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:smooth_stone_slab', 'tfc:rock/smooth/granite_slab')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:deepslate', 'tfc:rock/raw/basalt')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:oak_sign', 'tfc:wood/sign/oak')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:birch_sign', 'tfc:wood/sign/birch')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:acacia_sign', 'tfc:wood/sign/acacia')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:jungle_sign', 'tfc:wood/sign/ash')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:dark_oak_sign', 'tfc:wood/sign/hickory')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:spruce_sign', 'tfc:wood/sign/spruce')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:dirt', '#forge:farmlands')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:honey_bottle', 'firmalife_honey_jar')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:iron_nugget', '#forge:nuggets')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:slime_ball', '#forge:slimeballs')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:rabbit_hide', 'sewingkit:leather_strip')
    event.replaceInput({mod: 'supplementaries'}, 'supplementaries:sconce', 'minecraft:lever')
    event.replaceInput({mod: 'supplementaries'}, 'supplementaries:cobblestone_slab', '#minecraft:slabs')
    event.replaceInput({mod: 'supplementaries'}, 'supplementaries:ash', '#forge:dusts/ash')
    event.replaceInput({mod: 'supplementaries'}, '#comforts:sleeping_bags', '#forge:colored_sleeping_bag')
	event.replaceInput({mod: 'supplementaries'}, '#comforts:hammocks', '#forge:colored_hammock')
    event.replaceInput({mod: 'supplementaries'}, 'minecraft:shroomlight', 'mekanismgenerators:solar_generator')
    event.remove({output: [
        'supplementaries:ash',
        'supplementaries:candy',
        //'supplementaries:stone_lamp',
        //'supplementaries:blackstone_lamp',
        'supplementaries:deepslate_lamp',
        'supplementaries:end_stone_lamp',
        'supplementaries:rope',
        'supplementaries:sconce',
		'supplementaries:sconce_soul',
		'supplementaries:copper_lantern',
		'supplementaries:brass_lantern',
		'supplementaries:crimson_lantern',
		'supplementaries:silver_lantern',
		'supplementaries:lead_lantern',
		'#supplementaries:candle_holders',
    ]
    })
    event.remove([
        {id: 'supplementaries:hanging_sign_oak'},
		{id: 'supplementaries:sign_post_oak'},
		//{id: 'supplementaries:soap'},
        {id: 'supplementaries:sugar_cube_uncrafting'},
    ]
    )
})
