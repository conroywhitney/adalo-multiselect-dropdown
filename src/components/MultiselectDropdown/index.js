import React, { Component } from "react";
import { View } from "react-native";
import MultiSelect from "react-native-multiple-select";
import {
  compose,
  filter,
  forEach,
  includes,
  isNil,
  map,
  reject,
  uniq,
  without,
} from "ramda";

const generateOption = (item) => ({
  id: item.id,
  name: item.itemLabel,
});

class MultiselectDropdown extends Component {
  constructor(props) {
    super(props);

    this.fireDeselectedActions = this.fireDeselectedActions.bind(this);
    this.fireSelectedActions = this.fireSelectedActions.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.handleSelectedChanged = this.handleSelectedChanged.bind(this);
    this.itemsFromIds = this.itemsFromIds.bind(this);

    this.state = {
      selected: [],
    };
  }

  generateOptions() {
    const { itemList } = this.props;

    if (!itemList) return [];

    return compose(reject(isNil), uniq, map(generateOption))(itemList);
  }

  itemsFromIds(ids) {
    const { itemList } = this.props;

    if (!itemList) return [];

    return filter((item) => includes(item.id, ids), itemList);
  }

  fireDeselectedActions({ current, previous }) {
    const ids = without(current, previous);

    forEach((item) => {
      if (item.deselectedAction) item.deselectedAction();
    }, this.itemsFromIds(ids));
  }

  fireSelectedActions({ current, previous }) {
    const ids = without(previous, current);

    forEach((item) => {
      if (item.selectedAction) item.selectedAction();
    }, this.itemsFromIds(ids));
  }

  handleSelectedChanged(current) {
    const { itemList } = this.props;
    const { selected: previous } = this.state;

    if (!itemList) return;

    this.fireDeselectedActions({ current, previous });
    this.fireSelectedActions({ current, previous });
    this.setState({ selected: current });
  }

  render() {
    const {
      stringOverrides: { allItemsAreSelected, search, selectSomeItems },
    } = this.props;
    const { selected } = this.state;
    const items = this.generateOptions();
    const allSelected = items.length === selected.length;

    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.handleSelectedChanged}
          selectedItems={selected}
          selectText={allSelected ? allItemsAreSelected : selectSomeItems}
          searchInputPlaceholderText={search}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Done"
        />
        <View>
          {this.multiSelect && this.multiSelect.getSelectedItemsExt(selected)}
        </View>
      </View>
    );
  }
}

export default MultiselectDropdown;
