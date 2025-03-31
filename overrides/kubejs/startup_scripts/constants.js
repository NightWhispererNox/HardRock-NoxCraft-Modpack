//priority: 100

// Magic
global.inertMagicItems = [
    { name: 'novice_spellbook', mod: 'ars_nouveau', display_name: "Novice Spellbook", texture: "kubejs:item/ars_nouveau/item/novice_spellbook" },
    { name: 'cooldown_ring', mod: 'iron_spellbooks', display_name: "Ring of Recovery", texture: "kubejs:item/iron_spellbooks/item/cooldown_ring" },
    { name: 'cast_time_ring', mod: 'iron_spellbooks', display_name: "Ring of Expediency", texture: "kubejs:item/iron_spellbooks/item/cast_time_ring" },
    { name: 'mana_ring', mod: 'iron_spellbooks', display_name: "Ring of Mana", texture: "kubejs:item/iron_spellbooks/item/mana_ring" },
    { name: 'fireward_ring', mod: 'iron_spellbooks', display_name: "Fireward Ring", texture: "kubejs:item/iron_spellbooks/item/fireward_ring" },
    { name: 'frostward_ring', mod: 'iron_spellbooks', display_name: "Frostward Ring", texture: "kubejs:item/iron_spellbooks/item/frostward_ring" },
    { name: 'poisonward_ring', mod: 'iron_spellbooks', display_name: "Poisonward Ring", texture: "kubejs:item/iron_spellbooks/item/poisonward_ring" },
    { name: 'affinity_ring', mod: 'iron_spellbooks', display_name: "Ring of No Affinity", texture: "kubejs:item/iron_spellbooks/item/affinity_ring" },
    { name: 'emerald_stoneplate_ring', mod: 'iron_spellbooks', display_name: "Emerald Stoneplate Ring", texture: "kubejs:item/iron_spellbooks/item/emerald_stoneplate_ring" }
];


global.noxcraftMetals = [{
    name: 'mithril', // Name of the metal
    color: 0xDDDDFF, // Color of the metal
    melting_point: 960, // Melting point of the metal in celsius
    forging_point: null,
    wielding_point: 645
}]

global.metalParts = [
    {
        name: "Anvil",
        type: "anvil",
        heat_capacity: 7.4,
        can_forge: false,
        can_wield: false,
        weight: 'very heavy',
        size: 'very large',
        mb: 1400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/anvil/<metal>',
        mod: 'tfc'
    },
    {
        name: "Chain",
        type: "chain",
        heat_capacity: 0.5,
        can_forge: true,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 6, // Example value, adjust as needed
        stack_size: 32,
        resourceLocation: 'metal/chain/<metal>',
        mod: 'tfc'
    },
    {
        name: "Dirty Dust",
        type: "item",
        heat_capacity: 0.1,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 0, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'dirty_dust_<metal>',
        mod: 'tfcorewashing'
    },
    {
        name: "Dirty Pile",
        type: "item",
        heat_capacity: 0.1,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 0, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'dirty_pile_<metal>',
        mod: 'tfcorewashing'
    },
    {
        name: "Chunks",
        type: "item",
        heat_capacity: 0.1,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 0, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'chunks_<metal>',
        mod: 'tfcorewashing'
    },
    {
        name: "Rocky Chunks",
        type: "item",
        heat_capacity: 0.1,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 0, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'rocky_chunks_<metal>',
        mod: 'tfcorewashing'
    },
    {
        name: "Powder",
        type: "item",
        heat_capacity: 0.01,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 5, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'powder/native_<metal>',
        mod: 'tfc'
    },
    {
        name: "Pellet",
        type: "item",
        heat_capacity: 0.2,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 20, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'pellet_<metal>',
        mod: 'tfcorewashing'
    },
    {
        name: "Briquet",
        type: "item",
        heat_capacity: 0.4,
        can_forge: false,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 80, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: 'briquet_<metal>',
        mod: 'tfcorewashing'
    },
    {
        name: "Gear",
        type: "item",
        heat_capacity: 0.3,
        can_forge: true,
        can_wield: false,
        weight: 'heavy',
        size: 'large',
        mb: 400, // Example value, adjust as needed
        stack_size: 4,
        resourceLocation: '<metal>_gear',
        mod: 'tfc_items'
    },
    {
        name: "Plated Block",
        type: "block",
        heat_capacity: 0.5,
        can_forge: false,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 100, // Example value, adjust as needed
        stack_size: 32,
        resourceLocation: 'metal/block/<metal>',
        mod: 'tfc'
    },
    {
        name: "Double Ingot",
        type: "item",
        heat_capacity: 1.3,
        can_forge: true,
        can_wield: true,
        weight: 'heavy',
        size: 'large',
        mb: 200, // Example value, adjust as needed
        stack_size: 8,
        resourceLocation: 'metal/double_ingot/<metal>',
        mod: 'tfc'
    },
    {
        name: "Double Sheet",
        type: "item",
        heat_capacity: 1.5,
        can_forge: true,
        can_wield: true,
        weight: 'heavy',
        size: 'large',
        mb: 200, // Example value, adjust as needed
        stack_size: 8,
        resourceLocation: 'metal/double_sheet/<metal>',
        mod: 'tfc'
    },
    {
        name: "Horse Armor",
        type: "armor",
        heat_capacity: 2.0,
        can_forge: false,
        can_wield: false,
        weight: 'heavy',
        size: 'large',
        mb: 360, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/horse_armor/<metal>',
        mod: 'tfc'
    },
    {
        name: "Ingot",
        type: "item",
        heat_capacity: 0.65,
        can_forge: true,
        can_wield: true,
        weight: 'small',
        size: 'light',
        mb: 100, // Example value, adjust as needed
        stack_size: 16,
        resourceLocation: 'metal/ingot/<metal>',
        mod: 'tfc'
    },
    {
        name: "Lamp",
        type: "lamp",
        heat_capacity: 0.7,
        can_forge: false,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 72, // Example value, adjust as needed
        stack_size: 32,
        resourceLocation: 'metal/lamp/<metal>',
        mod: 'tfc'
    },
    {
        name: "Rod",
        type: "item",
        heat_capacity: 0.4,
        can_forge: true,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 50, // Example value, adjust as needed
        stack_size: 16,
        resourceLocation: 'metal/rod/<metal>',
        mod: 'tfc'
    },
    {
        name: "Stamen",
        type: "item",
        heat_capacity: 0.2,
        can_forge: true,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 25, // Example value, adjust as needed
        stack_size: 32,
        resourceLocation: '<metal>_stamen',
        mod: 'tfc_items'
    },
    {
        name: "Sheet",
        type: "item",
        heat_capacity: 0.75,
        can_forge: true,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 8,
        resourceLocation: 'metal/sheet/<metal>',
        mod: 'tfc'
    },
    {
        name: "Unfinished Helmet",
        type: "armor",
        heat_capacity: 1.0,
        can_forge: true,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/unfinished_helmet/<metal>',
        mod: 'tfc'
    },
    {
        name: "Unfinished Chestplate",
        type: "armor",
        heat_capacity: 1.5,
        can_forge: true,
        can_wield: false,
        weight: 'heavy',
        size: 'large',
        mb: 400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/unfinished_chestplate/<metal>',
        mod: 'tfc'
    },
    {
        name: "Unfinished Greaves",
        type: "armor",
        heat_capacity: 1.2,
        can_forge: true,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/unfinished_greaves/<metal>',
        mod: 'tfc'
    },
    {
        name: "Unfinished Boots",
        type: "armor",
        heat_capacity: 0.8,
        can_forge: true,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 200, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/unfinished_boots/<metal>',
        mod: 'tfc'
    },
    {
        name: "Trapdoor",
        type: "trapdoor",
        heat_capacity: 1.0,
        can_forge: false,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 200, // Example value, adjust as needed
        stack_size: 16,
        resourceLocation: 'metal/trapdoor/<metal>',
        mod: 'tfc'
    },
    {
        name: "Fish Hook",
        type: "item",
        heat_capacity: 0.1,
        can_forge: true,
        can_wield: false,
        weight: 'light',
        size: 'tiny',
        mb: 50, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/fish_hook/<metal>',
        mod: 'tfc'
    },
    {
        name: "Tuyere",
        type: "item",
        heat_capacity: 0.9,
        can_forge: true,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/tuyere/<metal>',
        mod: 'tfc'
    },
    {
        name: "Pickaxe Head",
        type: "tool_head",
        heat_capacity: 0.7,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/pickaxe_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Propick Head",
        type: "tool_head",
        heat_capacity: 0.7,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/propick_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Axe Head",
        type: "tool_head",
        heat_capacity: 0.8,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/axe_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Shovel Head",
        type: "tool_head",
        heat_capacity: 0.6,
        can_forge: true,
        can_wield: true,
        weight: 'light',
        size: 'small',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/shovel_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Hoe Head",
        type: "tool_head",
        heat_capacity: 0.7,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/hoe_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Chisel Head",
        type: "tool_head",
        heat_capacity: 0.5,
        can_forge: true,
        can_wield: true,
        weight: 'light',
        size: 'small',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/chisel_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Hammer Head",
        type: "tool_head",
        heat_capacity: 1.0,
        can_forge: true,
        can_wield: true,
        weight: 'heavy',
        size: 'large',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/hammer_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Saw Blade",
        type: "tool_head",
        heat_capacity: 0.9,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/saw_blade/<metal>',
        mod: 'tfc'
    },
    {
        name: "Javelin Head",
        type: "tool_head",
        heat_capacity: 0.6,
        can_forge: true,
        can_wield: true,
        weight: 'light',
        size: 'small',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/javelin_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Sword Blade",
        type: "tool_head",
        heat_capacity: 0.8,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/sword_blade/<metal>',
        mod: 'tfc'
    },
    {
        name: "Mace Head",
        type: "tool_head",
        heat_capacity: 1.0,
        can_forge: true,
        can_wield: true,
        weight: 'heavy',
        size: 'large',
        mb: 200, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/mace_head/<metal>',
        mod: 'tfc'
    },
    {
        name: "Knife Blade",
        type: "tool_head",
        heat_capacity: 0.4,
        can_forge: true,
        can_wield: true,
        weight: 'light',
        size: 'small',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/knife_blade/<metal>',
        mod: 'tfc'
    },
    {
        name: "Scythe Blade",
        type: "tool_head",
        heat_capacity: 0.9,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 100, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/scythe_blade/<metal>',
        mod: 'tfc'
    },
    {
        name: "Helmet",
        type: "armor",
        heat_capacity: 1.2,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 600, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/helmet/<metal>',
        mod: 'tfc'
    },
    {
        name: "Chestplate",
        type: "armor",
        heat_capacity: 1.8,
        can_forge: true,
        can_wield: true,
        weight: 'heavy',
        size: 'large',
        mb: 800, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/chestplate/<metal>',
        mod: 'tfc'
    },
    {
        name: "Greaves",
        type: "armor",
        heat_capacity: 1.5,
        can_forge: true,
        can_wield: true,
        weight: 'medium',
        size: 'medium',
        mb: 600, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/greaves/<metal>',
        mod: 'tfc'
    },
    {
        name: "Boots",
        type: "armor",
        heat_capacity: 1.0,
        can_forge: true,
        can_wield: true,
        weight: 'light',
        size: 'small',
        mb: 400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/boots/<metal>',
        mod: 'tfc'
    },
    {
        name: "Shield",
        type: "shield",
        heat_capacity: 1.5,
        can_forge: true,
        can_wield: true,
        weight: 'very heavy',
        size: 'very large',
        mb: 400, // Example value, adjust as needed
        stack_size: 1,
        resourceLocation: 'metal/shield/<metal>',
        mod: 'tfc'
    },
    {
        name: "Screw",
        type: "item",
        heat_capacity: 0.05,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 5, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: '<metal>_screw',
        mod: 'tfc_items'
    },
    {
        name: "Ring",
        type: "item",
        heat_capacity: 0.05,
        can_forge: false,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 12, // Example value, adjust as needed
        stack_size: 32,
        resourceLocation: '<metal>_ring',
        mod: 'tfc_items'
    },
    {
        name: "Nail",
        type: "item",
        heat_capacity: 0.05,
        can_forge: false,
        can_wield: false,
        weight: 'very light',
        size: 'very small',
        mb: 5, // Example value, adjust as needed
        stack_size: 64,
        resourceLocation: '<metal>_nail',
        mod: 'tfc_items'
    },
    {
        name: "Foil",
        type: "item",
        heat_capacity: 0.05,
        can_forge: false,
        can_wield: false,
        weight: 'light',
        size: 'small',
        mb: 100, // Example value, adjust as needed
        stack_size: 16,
        resourceLocation: '<metal>_foil',
        mod: 'tfc'
    },
    {
        name: "Bars",
        type: "item",
        heat_capacity: 0.8,
        can_forge: false,
        can_wield: false,
        weight: 'heavy',
        size: 'large',
        mb: 25, // Example value, adjust as needed
        stack_size: 32,
        resourceLocation: 'metal/bars/<metal>',
        mod: 'tfc'
    },
    {
        name: "Trapdoor",
        type: "item",
        heat_capacity: 1.0,
        can_forge: false,
        can_wield: false,
        weight: 'medium',
        size: 'medium',
        mb: 200, // Example value, adjust as needed
        stack_size: 4,
        resourceLocation: 'metal/trapdoor/<metal>',
        mod: 'tfc'
    }
];

global.colors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

global.limitedColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'white',
    'black'
]

global.removeAndHide = [
    'framedblocks:framed_torch',
    'framedblocks:framed_soul_torch',
    'framedblocks:framed_redstone_torch',
    'framedblocks:framed_chest',
    'framedblocks:framed_chest',
    'framedblocks:framed_rail_slope',
    'framedblocks:framed_powered_rail_slope',
    'framedblocks:framed_detector_rail_slope',
    'framedblocks:framed_activator_rail_slope',
    'framedblocks:framed_fancy_rail',
    'framedblocks:framed_fancy_powered_rail',
    'framedblocks:framed_fancy_detector_rail',
    'framedblocks:framed_fancy_activator_rail',
    'framedblocks:framed_fancy_rail_slope',
    'framedblocks:framed_fancy_powered_rail_slope',
    'framedblocks:framed_fancy_detector_rail_slope',
    'framedblocks:framed_fancy_activator_rail_slope',
    'framedblocks:framed_secret_storage',
    'supplementaries:quark/sign_post_azalea',
    'supplementaries:quark/hanging_sign_azalea',
    'supplementaries:quark/hanging_sign_blossom',
    'supplementaries:quark/sign_post_blossom',
    'supplementaries:botania/sign_post_livingwood',
    'supplementaries:botania/hanging_sign_livingwood',
    'supplementaries:botania/sign_post_dreamwood',
    'supplementaries:botania/hanging_sign_dreamwood',
    'tfc_metalwork:metal/block/copper',
    'tfc_metalwork:metal/block/copper_slab',
    'tfc_metalwork:metal/block/copper_stairs',
    'tfc_metalwork:metal/cut/copper',
    'tfc_metalwork:metal/cut/copper_slab',
    'tfc_metalwork:metal/cut/copper_stairs',
    'tfc:powder/coke',
    'supplementaries:ash_bricks_vertical_slab',
    'botania:pebble',
    'createaddition:diamond_grit',
    'rosia:copper_wire',
    'rosia:copper_coil',
    'rosia:purple_steel_rifle',
    'rosia:bullets',
    'rosia:rifle_ammo',
    'createbigcannons:cast_iron_ingot',
    'createbigcannons:cast_iron_nugget',
    'createbigcannons:nethersteel_ingot',
    'createbigcannons:nethersteel_nugget',
    'createbigcannons:cast_iron_block',
    'createbigcannons:nethersteel_block',
    'thermal:apple_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:beetroot_block',
    'create:dough',
    'create:wheat_flour',
    'create:crushed_platinum_ore',
    'dynamictrees:cocoa_seed',
    'dynamictrees:azalea_seed',
    'dynamictrees:apple_oak_seed',
    'mekanism:ingot_refined_glowstone',
    'mekanism:ingot_refined_obsidian',
    'mekanism:nugget_refined_glowstone',
    'mekanism:nugget_refined_obsidian',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank',
    'supplementaries:brass_lantern',
    'supplementaries:silver_lantern',
    'supplementaries:lead_lantern',
    'pneumaticcraft:compressed_iron_helmet',
    'pneumaticcraft:compressed_iron_chestplate',
    'pneumaticcraft:compressed_iron_leggings',
    'pneumaticcraft:compressed_iron_boots',
    'pneumaticcraft:compressed_iron_gear',
    'pneumaticcraft:ingot_iron_compressed',
    'tfc:metal/bucket/red_steel',
    'tfc:metal/bucket/blue_steel',
    'supplementaries:checker_vertical_slab',
    'create:bar_of_chocolate',
    'create:tree_fertilizer',
    'create:sweet_roll',
    'create:chocolate_glazed_berries',
    'create:honeyed_apple',
    'create:empty_blaze_burner',
    'create:blaze_burner',
    'create:red_sand_paper',
    'minecraft:barrier'
]

global.weatheringLevels = [
    'exposed',
    'weathered',
    'oxidized'
]

global.waxingAgents = [
    'minecraft:honeycomb',
    'immersivepetroleum:paraffin_wax',
    'firmalife:beeswax'
]

global.removeAndHideFluid = [
    'createaddition:seed_oil'
]

global.tfcGrass = [
    'tfc:peat_grass'
]

global.stoneToolsTypes = [
    'igneous_extrusive/60',
    'igneous_intrusive/60',
    'metamorphic/55',
    'sedimentary/50'
]

global.scrapingItems = [
    'small_soaked_hide',
    'medium_soaked_hide',
    'large_soaked_hide',
    'unrefined_paper'
]

global.framesTypes = [
    'andesite',
    'copper',
    'brass',
    'railway',
    'refined_radiance',
    'shadow_steel'
]

global.tfcRockTypes = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'claystone',
    'limestone',
    'conglomerate',
    'dolomite',
    'chert',
    'chalk',
    'rhyolite',
    'basalt',
    'andesite',
    'dacite',
    'quartzite',
    'slate',
    'phyllite',
    'schist',
    'gneiss',
    'marble'
]

global.anvilRockTypes = [
    'granite',
    'diorite',
    'gabbro',
    'rhyolite',
    'basalt',
    'andesite',
    'dacite'
]

global.tfcSandstoneTypes = [
    'brown',
    'white',
    'black',
    'red',
    'green',
    'pink',
    'yellow'
]

global.tfcSoilsTypes = [
    'silt',
    'loam',
    'sandy_loam',
    'silty_loam'
]

global.cutBlocksTypes = [
    'slab',
    'stairs'
]

global.cutBlocksStoneTypes = [
    'slab',
    'wall',
    'stairs'
]

global.invisibleQuernInput = [
    'dirt'
];

global.nonTfcVanillaWoodTypes = [
    'dark_oak',
    'jungle'
];

global.netherWoodTypes = [
    'crimson',
    'warped'
];

global.miscRoofTypes = [
    'diorite',
    'andesite',
    'sandstone',
    'red_sandstone',
    'blackstone',
    'deepslate',
    'stone',
    'prismarine_brick',
    'dark_prismarine',
    'nether_bricks',
    'red_nether_bricks',
    'cobblestone'
];

global.tfcSoils = [
    'silt',
    'loam',
    'sandy_loam',
    'silty_loam'
]

global.tfcSoils.forEach(i => global.tfcGrass.push(`tfc:grass/${i}`));
global.tfcSoils.forEach(i => global.tfcGrass.push(`tfc:clay_grass/${i}`));

global.tfcFoodSeeds = [
    'firmalife:seed_ball'
]

global.tfcFoods = [
    'barley',
    'oat',
    'rye',
    'maize',
    'wheat',
    'rice',
    'beet',
    'cabbage',
    'carrot',
    'garlic',
    'green_bean',
    'potato',
    'onion',
    'soybean',
    'squash',
    'sugarcane',
    'tomato',
    'jute',
    'pumpkin',
    'melon'
];
global.tfcFoods.forEach(i => global.tfcFoodSeeds.push(`tfc:seeds/${i}`));

global.tfcSaplings = [
    'tfc:plant/cherry_sapling',
    'tfc:plant/green_apple_sapling',
    'tfc:plant/lemon_sapling',
    'tfc:plant/olive_sapling',
    'tfc:plant/orange_sapling',
    'tfc:plant/peach_sapling',
    'tfc:plant/plum_sapling',
    'tfc:plant/red_apple_sapling',
    'tfc:plant/banana_sapling',
    'firmalife:plant/cocoa_sapling',
    'firmalife:plant/fig_sapling'
]

global.resinWoodTypes = [
    'acacia',
    'pine',
    'spruce',
    'birch'
]

global.tfcWoodTypes = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]
global.tfcWoodTypes.forEach(i => global.tfcSaplings.push(`tfc:wood/sapling/${i}`));

global.nonVanillatfcWoodTypes = [
    'ash',
    'aspen',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'maple',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'sycamore',
    'white_cedar',
    'willow'
]

global.tfcGlobalMetalTypes = [

];

global.oreRarity = [
    'rich',
    'normal',
    'poor',
    'small'
]

global.tfcMetallumMedTierOres = [
    'uraninite',
    'stibnite',
    'bertrandite',
    'cobaltite',
    'native_osmium',
    'native_iridium',
    'rutile',
    'monazite',
    'bauxite'
]

global.highTierMetals = [
    'stainless_steel'
]

global.tier6MetalTypes = [
    'blue_steel',
    'red_steel'
];
global.tier5MetalTypes = [
    'black_steel',
];
global.tier6MetalTypes.forEach(i => global.tier5MetalTypes.push(i));
global.tier4MetalTypes = [
    'steel',
];
global.tier5MetalTypes.forEach(i => global.tier4MetalTypes.push(i));
global.tier4MetalTypes.forEach(i => global.highTierMetals.push(i));
global.tier3MetalTypes = [
    'wrought_iron',
];
global.tier4MetalTypes.forEach(i => global.tier3MetalTypes.push(i));
global.tier2MetalTypes = [
    'bismuth_bronze',
    'bronze',
    'black_bronze'
];
global.tier3MetalTypes.forEach(i => global.tier2MetalTypes.push(i));
global.tier1MetalTypes = [
    'copper'
];
global.tier2MetalTypes.forEach(i => global.tier1MetalTypes.push(i));

global.tier6MetallumMetalTypes = [
    'tungsten_steel',
    'tungsten',
    'titanium',
    'thorium',
    'ferroboron'
];
global.tier5MetallumMetalTypes = [
    'enderium',
];
global.tier6MetallumMetalTypes.forEach(i => global.tier5MetallumMetalTypes.push(i));
global.tier4MetallumMetalTypes = [
    'refined_obsidian',
    'refined_glowstone',
    'signalum',
    'lumium'
];
global.tier5MetallumMetalTypes.forEach(i => global.tier4MetallumMetalTypes.push(i));
global.tier4MetallumMetalTypes.forEach(i => global.highTierMetals.push(i));
global.tier3MetallumMetalTypes = [
    'uranium',
    'pewter',
    'osmium',
    'osmiridium',
    'invar',
    'florentine_bronze',
    'compressed_iron',
    'cobalt',
    'boron',
    'beryllium_copper',
    'aluminum',
];
global.tier4MetallumMetalTypes.forEach(i => global.tier3MetallumMetalTypes.push(i));
global.tier2MetallumMetalTypes = [
    'nickel_silver',
    'mithril'
];
global.tier3MetallumMetalTypes.forEach(i => global.tier2MetallumMetalTypes.push(i));
global.tier1MetallumMetalTypes = [
];
global.tier2MetallumMetalTypes.forEach(i => global.tier1MetallumMetalTypes.push(i));

global.toolMetalTypes = [

];

global.tier1MetallumMetalTypes.forEach(i => global.toolMetalTypes.push(i));
global.tier1MetalTypes.forEach(i => global.toolMetalTypes.push(i));

global.tfcMetalParts = [
    'anvil',
    'chain',
    'dust',
    'small_gear',
    'block',
    'cut',
    'double_ingot',
    'double_sheet',
    'horse_armor',
    'ingot',
    'lamp',
    'rod',
    'sheet',
    'unfinished_helmet',
    'unfinished_chestplate',
    'unfinished_greaves',
    'unfinished_boots',
    'trapdoor'
]

global.forgingBonusWhitelist = [
    "fish_hook",
    "tuyere",
    "pickaxe_head",
    "propick_head",
    "axe_head",
    "shovel_head",
    "hoe_head",
    "chisel_head",
    "hammer_head",
    "saw_blade",
    "javelin_head",
    "sword_blade",
    "mace_head",
    "knife_blade",
    "scythe_blade",
    "helmet",
    "chestplate",
    "greaves",
    "boots",
    "shield"
];

global.forgingBonusWhitelist.forEach(i => global.tfcMetalParts.push(i));

global.tfcToolsTypes = [
    'axe',
    'chisel',
    'fishing_rod',
    'hammer',
    'hoe',
    'javelin',
    'knife',
    'mace',
    'pickaxe',
    'propick',
    'saw',
    'scythe',
    'shears',
    'shovel',
    'sword'
]

global.tfcToolsTypes.forEach(i => global.tfcMetalParts.push(i));

global.tfcMetalPartsComplete = [
    'ladder',
    'plate',
    'large_rod',
    'large_gear'
]

global.tfcMetalParts.forEach(i => global.tfcMetalPartsComplete.push(i));

global.rosiaMetalTypes = [
    'purple_steel',
    'invar'
]

global.tfcGemTypes = [
    'amethyst',
    'diamond',
    'emerald',
    'lapis_lazuli',
    'opal',
    'pyrite',
    'ruby',
    'sapphire',
    'topaz'
]

global.botaniaMetalTypes = [
    'manasteel',
    'terrasteel',
    'elementium'
]

global.tfcMetalTypes = [
    'bismuth',
    'bismuth_bronze',
    'black_bronze',
    'bronze',
    'brass',
    'copper',
    'gold',
    'nickel',
    'rose_gold',
    'silver',
    'tin',
    'zinc',
    'sterling_silver',
    'wrought_iron',
    'cast_iron',
    'steel',
    'black_steel',
    'blue_steel',
    'red_steel'
];
global.tfcMetalTypes.forEach(i => global.tfcGlobalMetalTypes.push(i));

global.firmalifeMetalTypes = [
    'chromium',
    'stainless_steel'
];
global.firmalifeMetalTypes.forEach(i => global.tfcGlobalMetalTypes.push(i));

global.customSheetmetalTypes = [
    'black_steel'
]

global.tfcBarTypes = [
    'wrought_iron',
    'gold',
    'steel',
    'black_steel',
    'red_steel',
    'blue_steel',
    'gold'
]

global.tfcSheetmetalTypes = [
    'copper',
    'silver',
    'nickel',
    'steel',
    'gold',
    'wrought_iron'
]


global.globalSheetmetalTypes = [

]

global.tfcSheetmetalTypes.forEach(i => global.globalSheetmetalTypes.push(i));

global.tfcMeatTypes = [
    'beef',
    'calamari',
    'pork',
    'chicken',
    'quail',
    'mutton',
    'bear',
    'horse_meat',
    'pheasant',
    'turkey',
    'grouse',
    'venison',
    'wolf',
    'rabbit',
    'hyena',
    'duck',
    'chevon',
    'camelidae',
    'gran_feline',
    'shellfish',
    'cod',
    'salmon',
    'bluegill',
    'tropical_fish',
    'turtle'
];

global.tfcRawMeatTypes = [
    'minecraft:egg',
    'firmalife:food/bacon'
];
global.tfcMeatTypes.forEach(i => global.tfcRawMeatTypes.push(`tfc:food/${i}`));

global.tfcMoldTypes = [
    'ingot',
    'pickaxe_head',
    'shovel_head',
    'axe_head',
    'hoe_head',
    'chisel_head',
    'sword_blade',
    'mace_head',
    'saw_blade',
    'javelin_head',
    'hammer_head',
    'propick_head',
    'knife_blade',
    'scythe_blade',
    'bell',
    'fire_ingot'
];

global.vanillaWoodTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'crimson',
    'warped'
];

global.botaniaWoodTypes = [
    'livingwood',
    'dreamwood'
]

global.quarkWoodTypes = [
    'azalea',
    'blossom'
]

global.vanillaRockTypes = [
    'stone',
    'mossy_cobblestone',
    'mossy_stone_brick',
    'stone_brick',
    'cobblestone',
    'deepslate_tile',
    'deepslate_brick',
    'andesite',
    'granite',
    'diorite',
    'deepslate',
    'red_sandstone',
    'sandstone',
    'cobbled_deepslate'
];

global.botaniaRockTypes = [
    'forest',
    'plains',
    'mountain',
    'fungal',
    'swamp',
    'desert',
    'taiga',
    'mesa'
]

global.createRockTypes = [
    'granite',
    'diorite',
    'andesite',
    'calcite',
    'dripstone',
    'deepslate',
    'tuff',
    'asurine',
    'crimsite',
    'limestone',
    'ochrum',
    'scoria',
    'scorchia',
    'veridium'
];

global.thermalOreTypes = [
    'cinnabar',
    'niter',
    'sulfur',
    'tin',
    'lead',
    'silver',
    'nickel',
    'bronze',
    'electrum',
    'invar',
    'apatite',
    'constantan',
    'signalum',
    'lumium',
    'enderium'
]

global.ieOreTypes = [
    'aluminum',
    'lead',
    'silver',
    'saltpeter',
    'sulfur',
    'hop_graphite',
    'nickel',
    'uranium',
    'constantan',
    'electrum',
    'steel'
]

global.ieItems = [
    'seed',
    'fertilizer',
    'potion_bucket',
    'hemp_fiber',
    'gunpowder_barrel',
    'dust_wood',
    'blastbrick',
    'blastbrick_reinforced',
    'slab_blastbrick',
    'slab_blastbrick_reinforced',
    'cokebrick',
    'slab_cokebrick'
]

global.caItems = [
    'connector',
    'accumulator',
    'redstone_relay',
    'chocolate_cake',
    'honey_cake',
    'spool',
    'straw',
    'festive_spool',
    'copper_spool',
    'gold_spool',
    'copper_wire',
    'iron_wire',
    'gold_wire',
    'cake_base',
    'cake_base_baked'
]

global.duplicateAnimals = [
    'horse',
    'sheep',
    'goat',
    'mule',
    'cod',
    'cat',
    'rabbit',
    'dolphin',
    'tropical_fish',
    'salmon',
    'fox',
    'squid',
    'cow',
    'turtle',
    'glow_squid',
    'polar_bear',
    'pufferfish',
    'chicken',
    'donkey',
    'ocelot',
    'panda',
    'wolf',
    'pig'
]

global.mekanismOreTypes = [
    'osmium',
    'tin',
    'steel',
    'bronze',
    'lead',
    'uranium'
]

global.modFluids = [
    'createbigcannons:molten_cast_iron',
    'createbigcannons:molten_bronze',
    'createaddition:seed_oil',
    'createaddition:bioethanol',
    'pneumaticcraft:oil',
    'pneumaticcraft:diesel',
    'pneumaticcraft:gasoline',
    'pneumaticcraft:ethanol',
    'pneumaticcraft:biodiesel',
    'pneumaticcraft:kerosene',
    'pneumaticcraft:lubricant',
    'pneumaticcraft:vegetable_oil',
    'immersivepetroleum:ethylene',
    'immersivepetroleum:propylene',
    'immersivepetroleum:benzene',
    'thermal:crude_oil',
    'thermal:creosote',
    'cofh_core:honey',
    'cofh_core:potion',
    'rosia:invar_fluid',
    'rosia:weak_purple_steel_fluid',
    'rosia:purple_steel_fluid',
    'createbigcannons:molten_steel',
    'createbigcannons:molten_nethersteel'
]

global.createOreTypes = [
    'brass',
    'zinc'
]

global.vanillaOreTypes = [
    'wooden',
    'golden',
    'iron',
    'gold',
    'stone',
    'lapis',
    'copper',
    'coal',
    'diamond',
    'netherite',
    'emerald',
    'lapis_lazuli',
    'redstone'
];

global.vanillaFoodTypes = [
    'beef',
    'porkchop',
    'rabbit_stew',
    'carrot',
    'baked_potato',
    'pufferfish',
    'cod',
    'apple',
    'potato',
    'tropical_fish',
    'bread',
    'poisonous_potato',
    'mushroom_stew',
    'dried_kelp',
    'honey_bottle',
    'dried_kelp_block',
    'beetroot_soup',
    'beetroot',
    'sweet_berries',
    'salmon',
    'rabbit',
    'chicken',
    'mutton'
];

global.vanillaCoralTypes = [
    'tube',
    'brain',
    'bubble',
    'fire',
    'horn'
];

global.tfcGrains = [
    'rye',
    'wheat',
    'oat',
    'maize',
    'rice',
    'barley'
]

global.tfcJarTypes = [
    'blackberry',
    'blueberry',
    'bunchberry',
    'cloudberry',
    'cranberry',
    'elderberry',
    'gooseberry',
    'raspberry',
    'snowberry',
    'strawberry',
    'wintergreen_berry',
    'banana',
    'cherry',
    'green_apple',
    'lemon',
    'olive',
    'orange',
    'peach',
    'plum',
    'red_apple'
]

global.firmalifeJarTypes = [
    'fig',
    'pineapple',
    'pumpkin_chunks'
]

global.thermalItems = [
    'sugar_cane_block',
    'apple_block',
    'carrot_block',
    'potato_block',
    'beetroot_block',
    'rosin_block',
    'oil_sand',
    'oil_red_sand',
    'ender_pearl_dust',
    'coal_coke_block',
    'coal_coke',
    'bitumen_block',
    'bitumen',
    'sawdust',
    'sawdust_block',
    'bitumen',
    'bitumen_block',
    'quartz_gear',
    'quartz_dust'
]

global.mekanismItems = [
    'dust_sulfur',
    'sawdust',
    'salt',
    'creative_fluid_tank',
    'dirty_netherite_scrap',
    'block_charcoal',
    'creative_chemical_tank'
]

global.vanillaItems = [
    'calcite',
    'tuff',
    'dripstone_block',
    'grass_block',
    'grass',
    'seagrass',
    'tall_grass',
    'podzol',
    'sand',
    'red_sand',
    'nether_gold_ore',
    'bookshelf',
    'pumpkin',
    'jack_o_lantern',
    'melon',
    'lantern',
    'soul_lantern',
    'mycelium',
    'iron_trapdoor',
    'fern',
    'seagrass',
    'dead_bush',
    'dandelion',
    'poppy',
    'blue_orchid',
    'allium',
    'red_tulip',
    'orange_tulip',
    'white_tulip',
    'azure_bluet',
    'pink_tulip',
    'oxeye_daisy',
    'cornflower',
    'lily_of_the_valley',
    'brown_mushroom',
    'red_mushroom',
    'crimson_fungus',
    'warped_fungus',
    'sugar_cane',
    'moss_carpet',
    'big_dripleaf',
    'small_dripleaf',
    'torch',
    'petrified_oak_slab',
    'chest',
    'crafting_table',
    'farmland',
    'furnace',
    'cactus',
    'soul_torch',
    'campfire',
    'soul_campfire',
    'hanging_roots',
    'chest_minecart',
    'infested_stone',
    'infested_cobblestone',
    'infested_stone_bricks',
    'infested_mossy_stone_bricks',
    'infested_cracked_stone_bricks',
    'infested_chiseled_stone_bricks',
    'infested_deepslate',
    'pufferfish_bucket',
    'salmon_bucket',
    'cod_bucket',
    'tropical_fish_bucket',
    'powder_snow_bucket',
    'axolotl_bucket',
    'bee_nest',
    'beehive',
    'brown_mushroom_block',
    'red_mushroom_block',
    'respawn_anchor',
    'mushroom_stem',
    'ancient_debris',
    'kelp',
    'netherite_scrap',
    'sunflower',
    'barrel',
    'lilac',
    'rose_bush',
    'peony',
    'large_fern',
    'candle',
    'composter',
    'cocoa_beans',
    'smoker',
    'azalea_leaves',
    'flowering_azalea_leaves',
    'azalea',
    'flowering_azalea',
    'blast_furnace',
    'diamond_horse_armor',
    'glow_berries',
    'amethyst_shard',
    'sea_pickle',
    'nautilus_shell',
    'netherite_block',
    'turtle_egg',
    'melon_seeds',
    'trapped_chest',
    'lily_pad',
    'cake',
    'shears',
    'chain',
    'cookie',
    'pointed_dripstone',
    'spore_blossom',
    'wheat_seeds',
    'pumpkin_seeds',
    'iron_horse_armor',
    'ladder',
    'golden_horse_armor',
    'beetroot_seeds',
    'fishing_rod',
    'slime_ball',
    'dirt',
    'coarse_dirt',
    'rooted_dirt',
    'rabbit_hide',
    'dirt_path'
];