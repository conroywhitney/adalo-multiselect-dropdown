import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];

class MultiselectDropdown extends Component {
  state = {
    selected: [],
  };

  render() {
    const { _height: height, _width: width } = this.props;
    const { selected } = this.state;

    return (
      <MultiSelect
        options={options}
        overrideStrings={{
          selectSomeItems: "Select Some items...",
          allItemsAreSelected: "All Items are Selected",
          selectAll: "Select All",
          search: "Search",
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
