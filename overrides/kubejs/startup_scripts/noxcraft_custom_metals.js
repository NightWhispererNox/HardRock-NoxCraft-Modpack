//priority: 10

StartupEvents.registry('item', event => {
    global.metalParts.forEach(part => {
        global.noxcraftMetals.forEach(metal => {
            let partLocation = part.resourceLocation.replace('<metal>', metal.name)
            switch (part.type) {
                case 'item':
                    global.noxcraftMetals.forEach(metal => {
                        switch (part.name){
                            case 'Ingot':
                                event.create(partLocation)
                                    .maxStackSize(part.stack_size)
                                    .texture('layer0', 'kubejs:item/' + partLocation)
                                    .displayName(global.formatItemName(`${metal.name} ${part.name}`))
                                    .tag('tfc:pileable_ingots')
                                break
                            case 'Double Ingot':
                                event.create(partLocation)
                                    .maxStackSize(part.stack_size)
                                    .texture('layer0', 'kubejs:item/' + partLocation)
                                    .displayName(global.formatItemName(`${metal.name} ${part.name}`))
                                    .tag('tfc:pileable_double_ingots')
                                break
                            case 'sheet':
                                event.create(partLocation)
                                    .maxStackSize(part.stack_size)
                                    .texture('layer0', 'kubejs:item/' + partLocation)
                                    .displayName(global.formatItemName(`${metal.name} ${part.name}`))
                                    .tag('tfc:pileable_sheets')
                                break
                            default:
                                event.create(partLocation)
                                    .maxStackSize(part.stack_size)
                                    .texture('layer0', 'kubejs:item/' + partLocation)
                                    .displayName(global.formatItemName(`${metal.name} ${part.name}`))
                            break
                        }
                    });
                    break
            }
        })
    });
});

StartupEvents.registry('block', event => {
    global.metalParts.forEach(part => {
        global.noxcraftMetals.forEach(metal => {
            let partLocation = part.resourceLocation.replace('<metal>', metal.name)
            switch (part.type) {
                case 'anvil':
                    event.create(partLocation, 'tfc:anvil')
                        .tier(1)
                        .texture('all',`kubejs:block/${partLocation}`.toString())
                        .displayName(global.formatItemName(`${metal.name} ${part.name}`));
                    break;
                case 'lamp':
                    event.create(partLocation, 'tfc:lamp')
                        .texture('all',`kubejs:block/${partLocation}`.toString())
                        .displayName(global.formatItemName(`${metal.name} ${part.name}`));
                    break;
                case 'block':
                    event.create(partLocation)
                        .textureAll(`kubejs:block/${partLocation}`.toString())
                        .displayName(global.formatItemName(`${metal.name} ${part.name}`));
                    break;
            }
        });
    });
});