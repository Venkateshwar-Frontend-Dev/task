import React from "react";
import { Layout } from "antd";
import CustomHeader from "../components/header/CustomHeader";
import CustomContent from "../components/content/CustomContent";

const AfterAuthLayout = ({ children }) => {
  return (
    <Layout>
      <CustomHeader />
      <CustomContent>{children}</CustomContent>
    </Layout>
  );
};

export default AfterAuthLayout;
