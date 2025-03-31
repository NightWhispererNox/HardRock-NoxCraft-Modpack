// Unify Totemic Mod with TFC
ServerEvents.tags('item', event => {
    event.remove('forge:leather','totemic:buffalo_hide')
    event.add('tfc:scrappable','totemic:buffalo_hide')
    event.add('forge:hides','totemic:buffalo_hide')

})
// ===============================================================================================================
ServerEvents.tags('entity_type', event => {
    event.add('totemic:buffalo_dance_targets', 'tfc:cow', 'tfc:wildebeest', 'tfc:yak', 'tfc:musk_ox')
    event.add('totemic:eagle_dance_targets', 'tfc:pheasant', 'tfc:penguin', 'tfc:turkey', 'tfc:chicken', 'tfc:duck', 'tfc:grouse', 'tfc:quail', 'tfc:peafowl')
})
// ===============================================================================================================
ServerEvents.recipes(event => {
    event.recipes.tfc.scraping(
        'tfc:larged_scraped_hide',
        'totemic:buffalo_hide',
        'tfc:item/larged_scraped_hide',
        'totemic:item/buffalo_hide'
    )
    event.remove({ input: 'totemic:cedar_planks', output: 'minecraft:stick'})
    event.remove({ id: 'totemic:cedar_hanging_sign'})
    event.remove({ input: 'totemic:buffalo_hide' , output: 'minecraft:leather'})
    event.remove({ id: 'totemic:tipi_from_hide'})

    event.replaceInput({mod: 'totemic'}, 'totemic:iron_bells', 'kubejs:copper_bells')

//-----------------------------------Anvil Recipies---------------------------------------------
	event.recipes.tfc.anvil(
		'3x kubejs:copper_bells', 
		'tfc:metal/sheet/copper',
		['bend_last', 'bend_second_last', 'upset_third_last']
	)
//---------- all remove-------------------------------------------------------------------------
    event.remove([
		{id: 'totemic:iron_bells'},
		{id: 'totemic:ceremony_cheat'},
		{id: 'totemic:creative_medicine_bag'}
    ])

//---------------------------------------Melting-------------------------------------------------
	event.recipes.tfc.heating('kubejs:copper_bells', 1000)
		.resultFluid(Fluid.of('tfc:metal/copper', 33));
})

TFCEvents.data(event => {

	event.itemHeat(
		Ingredient.of('kubejs:copper_bells'),
		0.02,
		null,
		null,
		'kubejs:copper_bells_heating'
	)
})