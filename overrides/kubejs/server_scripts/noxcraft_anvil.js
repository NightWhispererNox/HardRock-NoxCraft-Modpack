ServerEvents.recipes(event => {
    global.noxcraftMetals.forEach(metal => {
        event.recipes.tfc.welding(
            'kubejs:metal/double_ingot/' + metal.name,
            'kubejs:metal/ingot/' + metal.name,
            'kubejs:metal/ingot/' + metal.name)
        event.recipes.tfc.welding(
            'kubejs:metal/double_sheet/' + metal.name,
            'kubejs:metal/sheet/' + metal.name,
            'kubejs:metal/sheet/' + metal.name)
        event.recipes.tfc.welding(
            'kubejs:'+metal.name+'_pommel',
            'kubejs:' + metal.name + '_ring',
            'kubejs:' + metal.name + '_ring')
        event.recipes.tfc.welding(
            'kubejs:'+metal.name+'_heavy_sheet',
            'kubejs:metal/sheet/' + metal.name,
            'kubejs:metal/double_sheet/' + metal.name)
        event.recipes.tfc.anvil(
            '2x kubejs:metal/rod/'+metal.name,
            'kubejs:metal/ingot/'+metal.name, 
            ['hit_last', 'hit_second_last', 'hit_third_last']
        )
        event.recipes.tfc.anvil(
            'kubejs:'+metal.name+'_wire',
            'kubejs:metal/rod/'+metal.name, 
            ['hit_last', 'hit_second_last', 'hit_third_last']
        )
        event.recipes.tfc.anvil(
            '2x kubejs:'+metal.name+'_stamen',
            'kubejs:metal/rod/'+metal.name, 
            ['hit_last', 'hit_second_last', 'hit_third_last']
        )
        event.recipes.tfc.anvil(
            '2x kubejs:'+metal.name+'_crossgaurd',
            'kubejs:metal/rod/'+metal.name, 
            ['bend_last', 'draw_second_last', 'draw_third_last']
        )
        event.recipes.tfc.anvil(
            '5x kubejs:'+metal.name+'_rivet',
            'kubejs:'+metal.name+'_stamen', 
            ['draw_not_last', 'bend_any', 'hit_any']
        )
        event.recipes.tfc.anvil(
            '5x kubejs:'+metal.name+'_screw',
            'kubejs:'+metal.name+'_stamen', 
            ['hit_any', 'hit_any', 'draw_last']
        )
        event.recipes.tfc.anvil(
            '2x kubejs:' + metal.name + '_ring',
            'kubejs:'+metal.name+'_stamen', 
            ['hit_last', 'draw_second_last', 'draw_third_last']
        )
        event.recipes.tfc.anvil(
            '5x kubejs:' + metal.name + '_nail',
            'kubejs:'+metal.name+'_stamen', 
            ['punch_last', 'hit_not_last', 'bend_not_last']
        )
        event.recipes.tfc.anvil(
            '2x kubejs:' + metal.name + '_foil',
            'kubejs:metal/sheet/' + metal.name,
            ['hit_last', 'hit_second_last', 'hit_third_last']
        )
        event.recipes.tfc.anvil(
            'kubejs:metal/trapdoor/' + metal.name,
            'kubejs:metal/sheet/' + metal.name,
            ['bend_last', 'hit_second_last', 'hit_third_last']
        )
        event.recipes.tfc.anvil(
            '8x kubejs:metal/bars/' + metal.name,
            'kubejs:metal/sheet/' + metal.name,
            ['upset_last', 'punch_second_last', 'punch_third_last']
        )
        event.recipes.tfc.anvil(
            'kubejs:metal/sheet/'+metal.name,
            'kubejs:metal/double_ingot/'+metal.name, 
            ['bend_last', 'draw_second_last', 'draw_third_last']
        )
        event.recipes.tfc.anvil(
            'kubejs:metal/fish_hook/'+metal.name,
            'kubejs:metal/rod/'+metal.name, 
            ['draw_not_last', 'bend_any', 'hit_any']
        )
        event.recipes.tfc.anvil(
            'kubejs:'+metal.name+'_gear',
            'kubejs:metal/double_sheet/'+metal.name, 
            ['punch_last', 'hit_second_last', 'upset_third_last']
        )

        event.shaped('kubejs:metal/anvil/'+metal.name, [
            'xxx',
            'oxo',
            'xxx'
        ], {
            x: 'kubejs:metal/double_ingot/' + metal.name,
            o: 'minecraft:air'
        })
    })

})
