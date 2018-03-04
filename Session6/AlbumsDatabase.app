<aura:application extends="force:slds">
    
    <div class="slds">
        <div class="slds-page-header">
            <p class="slds-page-header__title" title="Albums Database">Albums Database</p>
        </div>
      	
        <div class="slds-m-around--small slds-p-top--large">
            <c.NewAlbum />
        </div>
            
        <div class="slds-m-around--small slds-p-top--large">
	    	<c.ListAlbums />
        </div>
    </div>

</aura:application>