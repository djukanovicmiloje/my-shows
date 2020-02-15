import React from "react";

const ImdbButton = ({ imdbTag }) => (
  <a href={`https://www.imdb.com/title/${imdbTag}`}>IMDB page</a>
);

export default ImdbButton;
