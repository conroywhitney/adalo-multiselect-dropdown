import React, { Component } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import {
  compose,
  filter,
  forEach,
  includes,
  isNil,
  map,
  path,
  pick,
  reject,
  uniq,
  without,
} from "ramda";

const filterOptions = (options, filter) => {
  const optionIncludesText = (option) =>
    (option.label || "").toLowerCase().includes(filter);

  return options.filter(optionIncludesText);
};

const generateOption = (item) => ({
  label: item.itemLabel,
  value: item.id,
});

const itemRecord = (item) => {
  const { _meta: meta } = item;

  if (!meta) return null;

  const { record } = meta;
};

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
