({
	loadOptions : function(component)
    {
        var genres = [
            {class: "optionClass", label: "Blues", value: "Blues"},
            {class: "optionClass", label: "Classic", value: "Classic"},
            {class: "optionClass", label: "Reggae", value: "Reggae"},
            {class: "optionClass", label: "Rock", value: "Rock"} ];

        var rates = [
            {class: "optionClass", label: "Bad", value: "Bad"},
            {class: "optionClass", label: "Good", value: "Good"},
            {class: "optionClass", label: "Best", value: "Best"} ];

        var statuses = [
            {class: "optionClass", label: "Present", value: "Present"},
            {class: "optionClass", label: "Rent", value: "Rent"},
            {class: "optionClass", label: "Wishlist", value: "Wishlist"} ];

         component.find("Genre").set("v.options", genres);
         component.find("Rate").set("v.options", rates);
         component.find("Status").set("v.options", statuses);	
	},
    
    createNewAlbum : function(component)
    {
		var action = component.get('c.insertAlbum');        
        action.setParams(
            {"album" : component.get("v.newAlbum"),
             "author" : component.get("v.author") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                console.log("Album successfully inserted.");
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