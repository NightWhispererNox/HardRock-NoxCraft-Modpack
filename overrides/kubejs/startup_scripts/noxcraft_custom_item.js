//priority: 10

console.info('Hello, Noxcraft items! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
    //material
    event.create('encased_copper_sheet').maxStackSize(4).displayName('Encased Copper Sheet')
    event.create('reinforced_copper_sheet').maxStackSize(2).displayName('Reinforced Copper Sheet')
    event.create('copper_double_rod').maxStackSize(8).displayName('Copper Double Rod')
    event.create('copper_pole').maxStackSize(4).displayName('Copper Pole')
    event.create('graphite_sheet').maxStackSize(16).displayName('Graphite Sheet')
    event.create('double_graphite_sheet').maxStackSize(4).displayName('Double Graphite Sheet')
    event.create('graphite_mixture').maxStackSize(32).displayName('Graphite Mixture')
    event.create('ink_bottle').maxStackSize(32).displayName('Ink Bottle')
    event.create('copper_bells').maxStackSize(32).displayName('Copper Bells')
    event.create('hollow_log').maxStackSize(1).displayName('Hollow Log')
    event.create('bison_tooth').maxStackSize(32).displayName('Bison Tooth')

    global.inertMagicItems.forEach(element => {
        event.create(`kubejs:inert_${element.name}`)
        .maxStackSize(1)
        .displayName(element.display_name)
        .tooltip('This item is inert and cannot be used.')
        .texture('layer0', element.texture)
        .color(0,0xFFFFFF)
    });
})