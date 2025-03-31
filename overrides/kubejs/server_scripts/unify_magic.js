ServerEvents.recipes(event => {
	global.inertMagicItems.forEach(element => {
		event.replaceOutput({},element.mod+':'+element.name, 'kubejs:inert_'+element.name)
	});
})