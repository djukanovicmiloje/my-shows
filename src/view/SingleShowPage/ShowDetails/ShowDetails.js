import React from "react";
import "./ShowDetails.scss";
import GenreCard from "./GenreCard/GenreCard";

const ShowDetails = ({ show }) => (
  <div className="show__details">
    <div className="image__container">
      <img src={show.image} alt="show-img" />
    </div>
    <div className="info__container">
      <h3>{show.name}</h3>
      {show.genres.map((genre, key) => (
        <GenreCard genre={genre} key={key} />
      ))}
    </div>
  </div>
);

export default ShowDetails;
