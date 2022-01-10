import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";

const SelectDropdown = (props) => {
  const { options, handleChange, value } = props;
  return (
    <Fragment>
      <Select
        native
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        label="Age"
        className="align-center"
      >
        {options.map((country, key) => {
          return (
            <option value={country.iso2} key={key}>
              {country.name}
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
