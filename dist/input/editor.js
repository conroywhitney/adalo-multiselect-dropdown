import {
  MultiselectDropdown
} from '../../index.js'

export const components = {
  MultiselectDropdown
}

export const config = {"displayName":"Multiselect Dropdown","logo":"./logo.png","name":"multiselect-dropdown","version":"dev","components":[{"name":"MultiselectDropdown","displayName":"MultiSelect Dropdown","icon":"./icon.png","defaultWidth":300,"defaultHeight":36,"props":[{"name":"itemList","displayName":"Item List","type":"list","default":""},{"name":"itemLabel","displayName":"Item Label","type":"text","default":"","role":"listItem","reference":"itemList"},{"displayName":"Every time any item is selected","name":"selectedAction","type":"action","role":"listItem","reference":"itemList"},{"displayName":"Every time any item is deselected","name":"deselectedAction","type":"action","role":"listItem","reference":"itemList","arguments":[{"type":"text","displayName":"Selected Item"}]}],"childComponents":[{"name":"stringOverrides","displayName":"String Overrides","props":[{"name":"selectSomeItems","displayName":"Select","type":"text","default":"Select some items..."},{"name":"allItemsAreSelected","displayName":"All Selected","type":"text","default":"All items are selected"},{"name":"selectAll","displayName":"Select All","type":"text","default":"Select all"},{"name":"search","displayName":"Search","type":"text","default":"Search"}]}],"resizeX":true}]}