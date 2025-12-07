import { useState } from "react";

const usePagination = (data = [], defaultPageSize = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const total = data.length;

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const onChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  return {
    currentPage,
    pageSize,
    total,
    paginatedData,
    onChange,
    setCurrentPage,
    setPageSize,
  };
};

export default usePagination;
