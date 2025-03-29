ClientEvents.lang('en_us', event => { // 'en_us' is the name of the U.S. English asset file (assets/mod_id/lang/en_us.json)
    global.noxcraftMetals.forEach(metal => {
        event.add(`metal.kubejs.${metal.name}`, global.formatItemName(metal.name))
        global.metalParts.forEach(part => {
            let partKey = 'kubejs:'+part.resourceLocation.replace('<metal>', metal.name)
            let partName = global.formatItemName(`${metal.name}_${part.name}`)
            event.add(partKey,partName)
        })
    })
    
})