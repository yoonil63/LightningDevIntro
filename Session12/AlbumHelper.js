({
	loadOptions : function(component)
    {
        var statuses = [
            {class: "optionClass", label: "Present", value: "Present"},
            {class: "optionClass", label: "Rent", value: "Rent"},
            {class: "optionClass", label: "Wishlist", value: "Wishlist"} ];

         component.find("Status").set("v.options", statuses);	
	},
    
    updateAlbum : function(component) {
        var album = component.get("v.album");
        console.log("update album " + album);
        
		var action = component.get('c.updateAlbum');        
        action.setParams({"album" : album});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                console.log("Album successfully updated.");
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            } else {
                console.log("Action State returned was: " + state);
            }
        });
        
        $A.enqueueAction(action);           
    }
})