import {
  MultiselectDropdown
} from '../../index.js'

export const components = {
  MultiselectDropdown
}

export const config = {"displayName":"Multiselect Dropdown","name":"multiselect-dropdown","version":"dev","components":[{"name":"MultiselectDropdown","displayName":"MultiSelect Dropdown","icon":"./icon.png","defaultWidth":300,"defaultHeight":36,"props":[{"name":"itemList","displayName":"Item List","type":"list","default":""},{"name":"itemLabel","displayName":"Item Label","type":"text","default":"label"},{"name":"itemValue","displayName":"Item Value","type":"text","default":"value"},{"name":"selectSomeItemsLabel","displayName":"'Select' Label","type":"text","default":"Select some items..."},{"name":"allItemsAreSelectedLabel","displayName":"'All Selected' Label","type":"text","default":"All items are selected"},{"name":"selectAllLabel","displayName":"'Select All' Label","type":"text","default":"Select all"},{"name":"searchLabel","displayName":"'Search' Label","type":"text","default":"Search"}],"resizeX":true}]}