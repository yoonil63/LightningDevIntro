({
	 selectAuthor : function(component, event, helper){         
         var author = component.get("v.author");
         var appEvent = $A.get("e.c:selectAuthorEvent");
         appEvent.setParams({"author" : author });  
         appEvent.fire();
         
         console.log('selectAuthorEvent fired');
    }
})