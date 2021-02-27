import React from "react";

import {SelectWrapper, Option, Label, OptionsWrapper} from "./Select.styles";

const Select = ({options}) => {
  return (
    <SelectWrapper>
      <Label>Sort by:</Label>
      {options.map((o) => (
        <Option key={o.value} value={o.value}>
          {o.name}
        </Option>
      ))}
    </SelectWrapper>
  );
};

export default Select;
