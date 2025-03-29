//priority: 1
ItemEvents.modification(event => {
	event.modify('create:sand_paper', item => {
		item.maxStackSize = 1,
		item.maxDamage = 1
	})
})