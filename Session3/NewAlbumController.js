({
	doInit : function(component, event, helper)
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
	}
})