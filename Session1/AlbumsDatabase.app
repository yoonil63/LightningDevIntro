<aura:application >
    <div>
        <h1>Enter new Album</h1>
        <ui:inputText label="Name" aura:id="Name" value="{!v.name}" />
        <ui:inputText label="Author" aura:id="author" value="{!v.author}" />
        <ui:inputSelect label="Genre" aura:id="genre" />
        <ui:inputSelect label="Rate" aura:id="rate" />
        <ui:inputSelect label="Status" aura:id="status" />
        <ui:button label="Submit" press="{!c.newAlbum}" />
    </div>
    
    <div>
        <aura:iteration items="{!v.albums}" var="album">
            <ui:outputText value="{!album}"/><br/>
        </aura:iteration>
    </div>
</aura:application>