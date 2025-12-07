import React from "react";
import { Form } from "antd";
import CustomInput from "./CustomInput";

const CustomInputItem = ({ label, name, type, rules, prefix, placeholder }) => {
  return (
    <Form.Item name={name} rules={rules} label={label}>
      <CustomInput type={type} prefix={prefix} placeholder={placeholder} />
    </Form.Item>
  );
};

export default CustomInputItem;
