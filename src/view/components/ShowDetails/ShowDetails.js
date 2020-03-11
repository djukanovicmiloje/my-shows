import React from "react";
import "./ShowDetails.scss";
import GenreCard from "../GenreCard/GenreCard";
import CastDetailsContainer from "../../containers/CastDetailsContainer";
import ImdbButton from "../ImdbButton/ImdbButton";
import HomeButton from "../HomeButton/HomeButton";

const ShowDetails = ({ show }) => (
  <div className="show_details">
    <div className="image_container">
      <img src={show.image} alt="show-img" />
    </div>

    <div className="info_container">
      <h3>{show.name}</h3>
      <div className="genre_container">
        {show.genres.map((genre, key) => (
          <GenreCard genre={genre} key={key} />
        ))}
      </div>
      <div
        className="summary_container"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      ></div>
      <div className="buttons">
        <ImdbButton imdbTag={show.imdb} />
        <HomeButton />
      </div>
    </div>

    <CastDetailsContainer cast={show.cast} />
  </div>
);

export default ShowDetails;
