ServerEvents.recipes(e => {
    e.custom({
        type: 'vintageimprovements:hammering',
        ingredients: [{ type: 'tfc:heatable', min_temp: 920, ingredient: { tag: 'forge:double_ingots/compressed_iron' }}],
        hammerBlows: 4,
        results: [{  item: 'kubejs:compressed_sheet', modifiers: 'tfc:copy_heat' }]
    })
})