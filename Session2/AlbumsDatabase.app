<aura:application >
    <aura:attribute name="name" type="String" />
    <aura:attribute name="author" type="String" />
    <aura:attribute name="albums" type="String[]" default="['Album 1', 'Album 2', 'Album 3']" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />

    <div>
        <h1>Enter new Album</h1>
        <ui:inputText label="Name" aura:id="Name" value="{!v.name}" />
        <ui:inputText label="Author" aura:id="author" value="{!v.author}" />
        <ui:inputSelect label="Genre" aura:id="genre" />
        <ui:inputSelect label="Rate" aura:id="Rate" />
        <ui:inputSelect label="Status" aura:id="status" />
        <ui:button label="Submit" press="{!c.newAlbum}" />
    </div>
    
    <div>
        <aura:iteration items="{!v.albums}" var="album">
            <ui:outputText value="{!album}"/><br/>
        </aura:iteration>
    </div>
</aura:application>