//priority: 0

// ===============================================================================================================
// ================== BLOCKS ========================= BLOCKS ========================= BLOCKS ===================
// ===============================================================================================================
let oreTags = [
	'#c:ores',
	'#minecraft:mineable/pickaxe',
	'#chiselsandbits:chiselable/blocked',
	'#rsgauges:ores',
	'#mekanism:atomic_disassembler_ore',
	'#tfc:prospectable',
	'#pneumaticcraft:jackhammer_ores',
	'#twilightforest:druid_projectile_replaceable',
	'#immersiveengineering:mineable/drill',
	'#tfc:can_collapse',
	'#tfc:powderkeg_breaking_blocks',
	'#tfc:can_start_collapse',
	'#immersiveengineering:mineable/rockcutter',
	'#minecraft:needs_stone_tool',
	'#tfc:monster_spawns_on',
	'#tfc:can_trigger_collapse'
]
ServerEvents.tags('entity_type', event => {
	event.add('buffalo_dance_targets','untamedwilds:bison')
})

ServerEvents.tags('block', event => {
	function copyTags(source, target, replacements) {
		console.log("Copying tags from " + source + " to " + target);
		let tags = Item.of(source).getTags().map((key) => key.location().toString()).toList()
		tags.forEach(tag => {
			console.log("Tag: " + tag);
			if (replacements[0]) {
				tag = tag.replace(replacements[0], replacements[1]);
			}
			event.add(tag, target)
		})
	}

	//Rock Tags
	event.add('tfc:rock/smooth/ingeous_extrusive', [
		'tfc:rock/smooth/basalt',
		'tfc:rock/smooth/andesite',
		'tfc:rock/smooth/dacite',
		'tfc:rock/smooth/rhyolite'
	])
	event.add('tfc:rock/raw/ingeous_extrusive', [
		'tfc:rock/raw/basalt',
		'tfc:rock/raw/andesite',
		'tfc:rock/raw/dacite',
		'tfc:rock/raw/rhyolite'
	])
	event.add('tfc:rock/raw/ingeous_intrusive', [

	])
	event.add('tfc:rock/smooth/ingeous_intrusive', [

	])
	global.noxcraftMetals.forEach(metal => {
		global.customOres.forEach(ore => {
			let source = 'tfc:ore/' + ore.name.replace(metal.name, 'silver')
			let target = 'kubejs:ore/' + ore.name
			copyTags(source, target, ['silver', metal.name]);
			oreTags.forEach(tag => {
				event.add(tag.replace("#",''), target)
			})
		});
	});
});

// ===============================================================================================================
// ================== FLUIDS ========================= FLUIDS ========================= FLUIDS ===================
// ===============================================================================================================
ServerEvents.tags('fluid', event => {
	global.noxcraftMetals.forEach(metal => {
		event.add('tfc:molten_' + metal.name, ['kubejs:fluid/' + metal.name])
		event.add('forge:molten_' + metal.name, ['kubejs:fluid/' + metal.name])
	})
	// water & more =========================

	// usable  ===============================
	event.add('lithiccoins:usable_in_coin_mold', ['kubejs:glass'])
	event.add('tfc:usable_in_ingot_mold', ['kubejs:mithril'])
	event.add('tfc:usable_in_barrel', [])
	event.add('tfc:usable_in_blue_steel_bucket', ['kubejs:mithril'])
	event.add('tfc:usable_in_red_steel_bucket', ['kubejs:mithril'])
	event.add('tfc:usable_in_wooden_bucket', [])
	event.add('tfc:usable_in_pot', [])
	event.add('tfc:usable_in_jug', [])
	event.add('firmalife:usable_in_mixing_bowl', [])
	event.add('firmalife:usable_in_vat', [])

	event.add('tfc:mithril', ['kubejs:mithril'])
})
// ========== ENTITY TYPE
// ===============================================================================================================
// ================== ITEMS ========================= ITEMS ========================= ITEMS ======================
// ===============================================================================================================
ServerEvents.tags('item', event => {
	// Copy Tags
	function copyTags(source, target, replacements) {
		console.log("Copying tags from " + source + " to " + target);
		let tags = Item.of(source).getTags().map((key) => key.location().toString()).toList()
		tags.forEach(tag => {
			console.log("Tag: " + tag);
			if (replacements[0]) {
				tag = tag.replace(replacements[0], replacements[1]);
			}
			event.add(tag, target)
		})
	}
	//Custom Powder
	event.add('forge:powders/kaolinite', ['tfc:powder/kaolinite'])
	// Custom Metal Items
	global.noxcraftMetals.forEach(metal => {
		global.metalParts.forEach(part => {
			let source = part.mod +':'+part.resourceLocation.replace('<metal>','silver')
			let target = 'kubejs:'+part.resourceLocation.replace('<metal>', metal.name)
			if (Item.of(target) && Item.of(source)) {
				copyTags(source, target, ['silver', metal.name]);
				try {
					switch (part.name) {
						case 'dirty_pile':
							event.add('forge:ores/dirty_piles', target)
							break;
						case 'pellet':
							event.add('forge:ores/pellets', target)
							break;
						case 'briquette':
							event.add('forge:ores/briquettes', target)
							break;
						case 'gear':
							event.add('forge:gears/' + metal.name, target)
							event.add('forge:gears', target)
							break;
						case 'powder':
							event.add('forge:powders/' + metal.name, target)
							event.add('tfc:powder/' + metal.name, target)
							event.add('forge:ores/clean_dusts/'+metal.name, target)
							break;
						case 'plate':
							event.add('forge:plates/' + metal.name, target)
							event.add('forge:plates', target)
							break;
						case 'rod':
							event.add('forge:rods/' + metal.name, target)
							event.add('forge:rods', target)
							break;
						case 'ingot':
							event.add('tfc:pileable_ingots',target)
							break;
						case 'double_ingot':
							event.add('forge:double_ingots/' + metal.name, target)
							break;
						case 'sheet':
							event.add('forge:sheets/' + metal.name, target)
							break;
					}
				} catch (error) {
					console.log("Error: " + error);
					console.log("Part: " + metal.name + '/'+ part.name);
				}
			}
		})
		global.oreGrades.forEach(grade => {
			copyTags('tfc:ore/' + grade + '_native_silver', 'kubejs:ore/' + grade + '_native_' + metal.name, ['silver', metal.name]);
			event.add('tfc:ore_pieces/mithril', 'kubejs:ore/' + grade + '_native_' + metal.name)
		})
	})
})