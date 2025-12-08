import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

const CustomContent = ({ children }) => {
  return <Content className="content">{children}</Content>;
};

export default CustomContent;
