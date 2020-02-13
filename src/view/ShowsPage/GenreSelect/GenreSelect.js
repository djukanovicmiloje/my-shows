import React from "react";

const GENRES = [
  "Drama",
  "Thriller",
  "Science-Fiction",
  "Horror",
  "Romance",
  "Crime",
  "Action",
  "Adventure",
  "Mystery",
  "Music",
  "Fantasy"
];

const GenreSelect = ({ onGenreClick }) => (
  <div className="genre__select">
    {GENRES.map((genre, key) => (
      <li key={key} onClick={() => onGenreClick(genre)}>
        {genre}
      </li>
    ))}
  </div>
);

export default GenreSelect;
