import React from "react";
import { Input } from "antd";

const CustomInput = ({ type, prefix, placeholder, value, onChange }) => {
  if (type === "password") {
    return (
      <Input.Password
        value={value}
        onChange={onChange}
        prefix={prefix}
        placeholder={placeholder}
      />
    );
  }

  return (
    <Input
      value={value}
      onChange={onChange}
      prefix={prefix}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
