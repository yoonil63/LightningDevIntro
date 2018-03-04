({
	getAlbums : function(component) {
		var action = component.get('c.getAlbums');        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                component.set("v.albums", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);  
	}
})