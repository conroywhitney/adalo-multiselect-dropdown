import React, { Component } from "react";
import { Text, View } from "react-native";

class MultiselectDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _height: height, _width: width, stringOverrides } = this.props;

    return (
      <View>
        <Text>Mobile MultiselectDropdown</Text>
      </View>
    );
  }
}

export default MultiselectDropdown;
