import React from "react";
import "./ShowCard.scss";

const ShowCard = ({ show }) => (
  <div className="show__card">
    <img src={show.image}></img>
    <h2>{show.name}</h2>
    <div>{show.rating}</div>
  </div>
);

export default ShowCard;
