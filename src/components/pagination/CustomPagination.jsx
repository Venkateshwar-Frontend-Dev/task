import React from "react";
import { Pagination } from "antd";

const CustomPagination = ({ currentPage, pageSize, total, onChange }) => {
  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      align="end"
    />
  );
};

export default CustomPagination;
