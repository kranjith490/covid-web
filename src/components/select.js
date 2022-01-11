import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";

const SelectDropdown = (props) => {
  const { options, handleChange, value } = props;
  console.log("Selectlue", value, options);
  return (
    <Fragment>
      <Select
        native
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        label="Age"
        className="align-center"
      >
        {options
          ? options.map((value, key) => {
              return (
                <option value={value.iso2} key={key}>
                  {value.name}
                </option>
              );
            })
          : ""}
      </Select>
    </Fragment>
  );
};

export default SelectDropdown;
