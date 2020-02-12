import React from "react";
import "./ShowCard.scss";

const ShowCard = ({ show }) => (
  <div className="show__card">
    <img src={show.image}></img>
    <div className="show__desc">
      <div className="show__title">{show.name}</div>
      <div className="show__rating">{show.rating}</div>
    </div>
  </div>
);

export default ShowCard;
