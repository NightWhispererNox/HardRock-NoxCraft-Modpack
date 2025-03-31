//priority: 21
const TypeDeposit = [
	"poor",
	"normal",
	"rich"
]
const TypeMineralTFC = [
]
const TypeOreTFC = [
	"native_mithril"
]
const TypeOreIG = [
	"mithril"
]

JEIEvents.hideItems(event => {
	TypeOreTFC.forEach((oretfc) => {
		event.hide(`/^kubejs:ore/poor_${oretfc}/.*/`)
		event.hide(`/^kubejs:ore/normal_${oretfc}/.*/`)
		event.hide(`/^kubejs:ore/rich_${oretfc}/.*/`)
	})
	TypeMineralTFC.forEach((mineral) => {
		event.hide(`/^kubejs:ore/${mineral}/.*/`)
	})
	event.hide([
		'totemic:iron_bells',
		'iceandfire:ghost_chest',
		'totemic:ceremony_cheat',
		'totemic:creative_medicine_bag',
		'irons_spellbooks:alchemist_cauldron'
	])
})