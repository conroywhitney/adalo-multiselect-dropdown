import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MultiSelect from "@khanacademy/react-multi-select";
import { compose, isNil, map, path, reject, uniq } from "ramda";

const filterOptions = (options, filter) => {
  console.log("filterOptions", "options", options, "filter", filter);

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

    this.state = {
      selected: [],
    };
  }

  generateOption(item) {
    const { itemLabel, itemList, itemValue } = this.props;
    const record = path(["_meta", "record"], item);

    console.log("generateOption", "item", item, "record", record);

    if (!record) return null;

    return {
      label: record[itemLabel],
      value: record[itemValue],
    };
  }

  generateOptions() {
    const { itemLabel, itemList, itemValue } = this.props;

    console.log(
      "generateOptions",
      "itemLabel",
      itemLabel,
      "itemList",
      itemList,
      "itemValue",
      itemValue
    );

    if (!itemLabel || !itemList || !itemValue) return [];

    return compose(reject(isNil), uniq, map(this.generateOption))(itemList);
  }

  render() {
    console.log("render", "props", this.props);

    const {
      _height: height,
      _width: width,
      allItemsAreSelectedLabel,
      searchLabel,
      selectAllLabel,
      selectSomeItemsLabel,
    } = this.props;
    const { selected } = this.state;

    console.log("render", "selected", selected);

    return (
      <MultiSelect
        filterOptions={filterOptions}
        options={this.generateOptions()}
        overrideStrings={{
          selectSomeItems: selectSomeItemsLabel,
          allItemsAreSelected: allItemsAreSelectedLabel,
          selectAll: selectAllLabel,
          search: searchLabel,
        }}
        selected={selected}
        onSelectedChanged={(selected) => this.setState({ selected })}
        styles={{ height, width }}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default MultiselectDropdown;
