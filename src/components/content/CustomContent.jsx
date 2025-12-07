import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

const CustomContent = ({ children }) => {
  return (
    <Content
      style={{
        padding: "30px",
        minHeight: "calc(100vh - 64px)",
        marginTop: 64,
      }}
    >
      {children}
    </Content>
  );
};

export default CustomContent;
