//priority: 10
ServerEvents.recipes(event => {
	event.replaceInput({mod: 'car'}, 'minecraft:oak_planks', 'tfc:wood/planks/oak')
    event.replaceInput({mod: 'car'}, 'minecraft:birch_planks', 'tfc:wood/planks/birch')
    event.replaceInput({mod: 'car'}, 'minecraft:acacia_planks', 'tfc:wood/planks/acacia')
    event.replaceInput({mod: 'car'}, 'minecraft:jungle_planks', 'tfc:wood/planks/ash')
    event.replaceInput({mod: 'car'}, 'minecraft:dark_oak_planks', 'tfc:wood/planks/hickory')
    event.replaceInput({mod: 'car'}, 'minecraft:spruce_planks', 'tfc:wood/planks/spruce')
    event.replaceInput({mod: 'car'}, 'minecraft:crimson_planks', 'beneath:wood/planks/crimson')
    event.replaceInput({mod: 'car'}, 'minecraft:warped_planks', 'beneath:wood/planks/warped')
//---------- all remove-------------------------------------------------------------------------
    event.remove({output: [
        'car:iron_stick',
		'car:engine_piston',
		'car:oilmill',
		'car:blastfurnace',
		'car:backmix_reactor',
		'car:backmix_reactor',
		'car:cable',
		'car:fluid_extractor',
		'car:fluid_pipe',
		'car:dynamo',
		'car:crank',
		'car:canola_oil_bucket',
		'car:methanol_bucket',
		'car:canola_methanol_mix_bucket',
		'car:glycerin_bucket',
		'car:canola',
		'car:canola_cake',
		'car:cable_insulator',
    ]})
    event.remove([
		{id: 'car:asphalt_charcoal'},
		{id: 'car:asphalt_coal'},
		{id: 'car:asphalt_wool'},
    ])
})
