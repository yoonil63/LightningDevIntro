({
	doInit : function(component, event, helper)
    {
		helper.loadOptions(component);
	},
    
    newAlbum : function(component, event, helper)
    {
        helper.createNewAlbum(component);
    }
})