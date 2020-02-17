import React from "react";

import "./SortDropdown.scss";

const SortDropdown = ({ onOptionClick }) => (
  <select className="sort__dropdown">
    <option onClick={() => onOptionClick("popular")}>Popularity</option>
    <option onClick={() => onOptionClick("alpha")}>Alphabetical</option>
  </select>
);

export default SortDropdown;
