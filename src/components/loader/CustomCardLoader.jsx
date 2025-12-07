import React from "react";
import { Skeleton, Row, Col, Card } from "antd";

const CustomCardLoader = () => {
  // Create an array with 4 items
  const loaders = Array.from({ length: 4 });

  return (
    <Row style={{ width: "100%" }} gutter={[15, 15]}>
      {loaders.map((_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card>
            <Skeleton avatar active paragraph={{ rows: 4 }} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CustomCardLoader;
