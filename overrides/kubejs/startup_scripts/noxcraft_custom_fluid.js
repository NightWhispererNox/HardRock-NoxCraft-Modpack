//priority: 10

console.info('Hello, Noxcraft Fluids! (You will only see this line once in console, during startup)')

StartupEvents.registry("fluid", (event) => {

	global.noxcraftMetals.forEach(metal => {
		event
			.create(metal.name)
			.thickTexture(metal.color)
			.bucketColor(metal.color)
			.displayName("Molten " + global.formatItemName(metal.name))
	})
	event.create("graphite").thickTexture(0x1A1A1A).bucketColor(0x1A1A1A).displayName("Molten Graphite").noBlock()

})