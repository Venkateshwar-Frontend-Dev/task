import React from "react";
import { Row, Col } from "antd";

const BeforeAuthLayout = ({ children }) => {
  return (
    <Row
      gutter={16}
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#e7e7e7", margin: 0 }}
    >
      <Col xs={22} sm={12} md={10} lg={8} xl={6}>
        {children}
      </Col>
    </Row>
  );
};

export default BeforeAuthLayout;
