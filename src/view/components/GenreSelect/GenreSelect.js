import React from "react";
import { GENRES } from "../../../shared/constants";

import "./GenreSelect.scss";

const GenreSelect = ({ onGenreClick }) => (
  <div className="genre_select">
    <li onClick={() => onGenreClick("")}>All genres</li>
    {GENRES.map((genre, key) => (
      <li key={key} onClick={() => onGenreClick(genre)}>
        {genre}
      </li>
    ))}
  </div>
);

export default GenreSelect;
