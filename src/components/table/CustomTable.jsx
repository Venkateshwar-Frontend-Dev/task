import React from "react";
import { Table } from "antd";

const CustomTable = ({ ...props }) => {
  return (
    <Table {...props} scroll={{ x: "max-content" }} style={{ width: "100%" }} />
  );
};

export default CustomTable;
