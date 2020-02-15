import React from "react";

import "./SearchBar.scss";

const SearchBar = ({ onChange }) => (
  <input
    className="search__bar"
    onChange={e => onChange(e)}
    placeholder="Search shows"
  />
);

export default SearchBar;
