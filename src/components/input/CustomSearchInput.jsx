import React from "react";
import { Input } from "antd";
const { Search } = Input;

const CustomSearchInput = ({ placeholder, ...props }) => {
  return (
    <Search
      {...props}
      placeholder={placeholder || "input search text"}
      allowClear
      style={{ width: 200 }}
    />
  );
};

export default CustomSearchInput;
