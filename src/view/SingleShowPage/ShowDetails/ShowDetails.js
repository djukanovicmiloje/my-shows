import React from "react";

const ShowDetails = ({ show }) => (
  <div className="show__details">
    <img src={show.image} alt="show-img" />
    <h3>{show.name}</h3>
    {show.genres.map((genre, key) => (
      <span key={key}>{genre}</span>
    ))}
  </div>
);

export default ShowDetails;
