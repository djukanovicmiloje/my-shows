import React from "react";
import "./ShowDetails.scss";
import GenreCard from "../GenreCard/GenreCard";
import CastDetailsContainer from "../../SingleShowPage/CastDetailsContainer/CastDetailsContainer";

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
      <div
        className="summary__container"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      ></div>
    </div>
    <CastDetailsContainer cast={show.cast} />
  </div>
);

export default ShowDetails;
