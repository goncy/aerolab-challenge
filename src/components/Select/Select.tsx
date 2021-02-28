import React from "react";

import {SelectWrapper, Option, Label} from "./Select.styles";

const Select = ({options, orderBy, setOrderBy}) => {
  return (
    <SelectWrapper>
      <Label>Sort by:</Label>
      {options.map((o) => (
        <Option
          key={o.value}
          active={o.value === orderBy}
          value={o.value}
          onClick={() => setOrderBy(o.value)}
        >
          {o.name.toUpperCase()}
        </Option>
      ))}
    </SelectWrapper>
  );
};

export default Select;
