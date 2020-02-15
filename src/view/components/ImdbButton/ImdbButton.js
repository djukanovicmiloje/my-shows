import React from "react";

const ImdbButton = show => (
  <a href={`https://www.imdb.com/title/${show.imdb}}`}>IMDB page</a>
);

export default ImdbButton;
