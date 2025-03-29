//priority: 90
global.formatItemName = function(itemName) {
    return itemName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

global.getTexture = function(texture) {
    try {
        // Assuming `resourceManager` is available in the global scope
        return resourceManager.getResourcePath(texture) !== null;
    } catch (e) {
        console.log(`Error while checking texture: ${texture}`);
        return false;
    }
};