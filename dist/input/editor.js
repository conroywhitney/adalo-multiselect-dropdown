import {
  MultiselectDropdown
} from '../../index.js'

export const components = {
  MultiselectDropdown
}

export const config = {"displayName":"Multiselect Dropdown","name":"multiselect-dropdown","version":"dev","components":[{"name":"MultiselectDropdown","displayName":"MultiSelect Dropdown","icon":"./icon.png","defaultWidth":300,"defaultHeight":36,"props":[{"name":"itemList","displayName":"Item List","type":"list","default":""},{"name":"itemLabel","displayName":"Item Label","type":"text","default":"label"},{"name":"itemValue","displayName":"Item Value","type":"text","default":"value"},{"displayName":"Selected Changed","name":"selectChangedAction","type":"action","arguments":[{"type":"text","displayName":"Selected Items"}]}],"childComponents":[{"name":"stringOverrides","displayName":"String Overrides","props":[{"name":"selectSomeItems","displayName":"Select","type":"text","default":"Select some items..."},{"name":"allItemsAreSelected","displayName":"All Selected","type":"text","default":"All items are selected"},{"name":"selectAll","displayName":"Select All","type":"text","default":"Select all"},{"name":"search","displayName":"Search","type":"text","default":"Search"}]}],"resizeX":true}]}