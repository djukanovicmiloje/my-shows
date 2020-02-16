import React from "react";

const SortDropdown = ({ onOptionClick }) => (
  <select>
    <option onClick={() => onOptionClick("popular")}>Popularity</option>
    <option onClick={() => onOptionClick("alpha")}>Alphabetical</option>
  </select>
);

export default SortDropdown;
