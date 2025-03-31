TFCEvents.data(event => {
    global.noxcraftMetals.forEach(metal => {
        event.metal(
            'kubejs:' + metal.name, metal.melting_point, 0.00857,
            'kubejs:metal/ingot/' + metal.name,
            'kubejs:metal/double_ingot/' + metal.name,
            'kubejs:metal/sheet/' + metal.name,
            3,
            'kubejs:' + metal.name
        );
        
    })
})

