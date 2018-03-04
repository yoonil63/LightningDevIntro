<aura:application extends="force:slds">
    
    <div class="slds">
        <c.PageHeader title="Albums Database"/>
      	
        <div class="slds-m-around--small slds-p-top--large">
            <c.NewAlbum />
        </div>
            
        <div class="slds-m-around--small slds-p-top--large">
	    	<c.ListAlbums />
        </div>
    </div>

</aura:application>