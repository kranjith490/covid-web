import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";

const SelectDropdown = (props) => {
  const { options, handleChange, value, valueType } = props;
  return (
    <Fragment>
      <Select
        native
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        label="Age"
        className="align-center"
      >
        {options.map((value, key) => {
          return valueType ? (
            <option value={value.iso2} key={key}>
              {value}
            </option>
          ) : (
            <option value={value.iso2} key={key}>
              {value.name}
            </option>
          );
        })}
        {/*  <option aria-label="None" value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option> */}
      </Select>
    </Fragment>
  );
};

export default SelectDropdown;
