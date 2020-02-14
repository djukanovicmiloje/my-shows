import React from "react";

const SearchBar = ({ onChange }) => (
  <input onChange={e => onChange(e)} placeholder="Search shows" />
);

export default SearchBar;
