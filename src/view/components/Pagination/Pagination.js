import React from "react";

import "./Pagination.scss";

const Pagination = ({ numberOfPages, onPageClick }) => {
  let numberOfPagesAdjusted = parseInt(numberOfPages + 1);
  if (numberOfPagesAdjusted > 10) {
    numberOfPagesAdjusted = 10;
  }
  const pages = new Array(numberOfPagesAdjusted);
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
