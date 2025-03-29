PlayerEvents.inventoryOpened(event => {
    if (/KnappingContainer/.test(event.getInventoryContainer().toString())) {
        if (event.player.inventory.getSelected().hasTag('tfc:rock_knapping')) {
            const hasLeather = event.player.inventory.find("#forge:leather") != -1
            || event.player.inventory.find("tfc:large_scraped_hide") != -1
            const hasChisel = event.player.inventory.find("#tfc:chisels") != -1
            
            let message = null
            if (!hasLeather && !hasChisel) { message = 'Left click a block of Hardened Stone!' }
            else if (hasLeather && !hasChisel) { message = 'You also need a chisel!' }
            else if (!hasLeather && hasChisel) { message = 'You also need a large scraped hide, or leather!' }
    
            if (message !== null) {
                event.player.statusMessage = message
                event.player.closeMenu()
            }
        }
    }
})