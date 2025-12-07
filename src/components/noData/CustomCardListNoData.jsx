import React from "react";
import { Row, Empty } from "antd";

const CustomCardListNoData = () => {
  return (
    <Row justify="center" style={{ width: "100%", padding: 50 }}>
      <Empty description="No data" />
    </Row>
  );
};

export default CustomCardListNoData;
