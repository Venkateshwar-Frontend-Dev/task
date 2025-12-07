import React from "react";
import {Flex} from "antd"

const BeforeAuthLayout = ({ children }) => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ height: "100vh", backgroundColor: "#e7e7e7" }}
    >
      {children}
    </Flex>
  );
};

export default BeforeAuthLayout;
