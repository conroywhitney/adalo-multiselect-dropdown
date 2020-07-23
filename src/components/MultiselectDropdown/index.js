import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];

const filterOptions = (options, filter) => {
  const optionIncludesText = (option) =>
    (option.label || "").toLowerCase().includes(filter);

  return options.filter(optionIncludesText);
};

class MultiselectDropdown extends Component {
  state = {
    selected: [],
  };

  render() {
    const {
      _height: height,
      _width: width,
      allItemsAreSelectedLabel,
      searchLabel,
      selectAllLabel,
      selectSomeItemsLabel,
    } = this.props;
    const { selected } = this.state;

    return (
      <MultiSelect
        filterOptions={filterOptions}
        options={options}
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
