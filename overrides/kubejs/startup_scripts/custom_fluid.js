//priority: 90

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry("fluid", (event) => {
	event.create("diamond_steel")	.thickTexture(0x339999).bucketColor(0x339999)	.displayName("Molten Diamond Steel").noBlock() 
	event.create("iron_quartz")		.thickTexture(0xdedede).bucketColor(0xdedede)	.displayName("Molten Quartz Enriched Iron").noBlock() 
	event.create("quartz")			.thickTexture(0xcccccc).bucketColor(0xcccccc)	.displayName("Molten Quartz").noBlock() 
	event.create("glass")			.thickTexture(0xccecff).bucketColor(0xccecff)	.displayName("Molten Glass").noBlock() 
	event.create("andesite_alloy")	.thickTexture(0x669999).bucketColor(0x669999)	.displayName("Molten Andesite Alloy").noBlock()
	event.create("andesite_stone")	.thickTexture(0x666666).bucketColor(0x666666)	.displayName("Molten Andesite Stone").noBlock()
	event.create("purified_water")	.thinTexture(0x003366).bucketColor(0x003366)	.displayName("Purified Water").noBlock()
	event.create("boiled_water")	.thinTexture(0x6699cc).bucketColor(0x6699cc)	.displayName("Boiled Water").noBlock()
	event.create("herbal_water")	.thinTexture(0x336666).bucketColor(0x336666)	.displayName("Herbal Water").noBlock()
	event.create("mineral_water")	.thinTexture(0x3399ff).bucketColor(0x3399ff)	.displayName("Mineral Water").noBlock()
	event.create("active_redstone")	.thinTexture(0xcc0000).bucketColor(0xcc0000)	.displayName("Molten Active Redstone").noBlock()
	event.create("seed_oil_water")	.thinTexture(0x936e52).bucketColor(0x936e52)	.displayName("Tree Seed Oil Water").noBlock() 
	event.create("resin")			.thinTexture(0xcccc66).bucketColor(0xcccc66)	.displayName("Molten Resin").noBlock() 
	event.create("latex")			.thinTexture(0xcccccc).bucketColor(0xcccccc)	.displayName("Molten latex").noBlock() 
})