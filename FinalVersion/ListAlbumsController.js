({
	doInit : function(component, event, helper) {
		helper.getAlbums(component);
	},
    
    handleAddToAlbums : function(component, event, helper) {
    	helper.addToAlbums(component, event)   
	}
})