import React from "react";

const Pagination = ({ numberOfPages, onPageClick }) => {
  const pages = new Array(numberOfPages);
  pages.fill(null);

  return (
    <div className="pagination">
      {pages.map((val, num) => (
        <div key={num} onClick={() => onPageClick(num + 1)}>
          {num + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
