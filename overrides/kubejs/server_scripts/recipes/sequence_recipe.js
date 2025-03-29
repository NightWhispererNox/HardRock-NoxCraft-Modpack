ServerEvents.recipes(e => {
     e.custom({
        type: 'create:sequenced_assembly',
        ingredient: [{ type: 'tfc:heatable', min_temp: 920, ingredient: { tag: 'forge:double_ingots/compressed_iron' }}],
        transitionalItem: { item: 'create:unprocessed_obsidian_sheet' },
        sequence: [
            { type: 'create:pressing', ingredients: [{ item: 'create:unprocessed_obsidian_sheet' }], results: [{ item: 'create:unprocessed_obsidian_sheet' }]},
            { type: 'create:pressing', ingredients: [{ item: 'create:unprocessed_obsidian_sheet' }], results: [{ item: 'create:unprocessed_obsidian_sheet' }]},
            { type: 'create:pressing', ingredients: [{ item: 'create:unprocessed_obsidian_sheet' }], results: [{ item: 'create:unprocessed_obsidian_sheet' }]},
            { type: 'create:pressing', ingredients: [{ item: 'create:unprocessed_obsidian_sheet' }], results: [{ item: 'create:unprocessed_obsidian_sheet' }]},
            { type: 'create:pressing', ingredients: [{ item: 'create:unprocessed_obsidian_sheet' }], results: [{ item: 'create:unprocessed_obsidian_sheet' }]}
        ],
        results: [{  item: 'kubejs:compressed_sheet', modifiers: 'tfc:copy_heat' }],
        loops: 4
    })
})