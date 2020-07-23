import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MultiSelect from "@khanacademy/react-multi-select";
import { compose, isNil, map, path, pick, reject, uniq } from "ramda";

const filterOptions = (options, filter) => {
  const optionIncludesText = (option) =>
    (option.label || "").toLowerCase().includes(filter);

  return options.filter(optionIncludesText);
};

const itemRecord = (item) => {
  const { _meta: meta } = item;

  if (!meta) return null;

  const { record } = meta;
};

class MultiselectDropdown extends Component {
  constructor(props) {
    super(props);

    this.generateOption = this.generateOption.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.handleSelectedChanged = this.handleSelectedChanged.bind(this);

    this.state = {
      selected: [],
    };
  }

  generateOption(item) {
    const { itemLabel, itemList, itemValue } = this.props;
    const record = path(["_meta", "record"], item);

    if (!record) return null;

    return {
      label: record[itemLabel],
      value: record[itemValue],
    };
  }

  generateOptions() {
    const { itemLabel, itemList, itemValue } = this.props;

    if (!itemLabel || !itemList || !itemValue) return [];

    return compose(reject(isNil), uniq, map(this.generateOption))(itemList);
  }

  handleSelectedChanged(selected) {
    this.setState({ selected });

    console.log("handleSelectedChanged", "selected", selected);
  }

  render() {
    const { _height: height, _width: width, stringOverrides } = this.props;
    const { selected } = this.state;
    const overrideStrings = pick(
      ["allItemsAreSelected", "search", "selectAll", "selectSomeItems"],
      stringOverrides
    );

    return (
      <MultiSelect
        filterOptions={filterOptions}
        options={this.generateOptions()}
        overrideStrings={overrideStrings}
        selected={selected}
        onSelectedChanged={this.handleSelectedChanged}
        styles={{ height, width }}
      />
    );
  }
}

export default MultiselectDropdown;
