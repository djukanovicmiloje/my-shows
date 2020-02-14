import React from "react";
import { Link } from "react-router-dom";
import "./ShowCard.scss";

const ShowCard = ({ show }) => (
  <Link to={`/show/${show.id}`}>
    <div className="show__card">
      <img src={show.image}></img>
      <div className="show__desc">
        <div className="show__title">{show.name}</div>
        <div className="show__rating">{show.rating}</div>
      </div>
    </div>
  </Link>
);

export default ShowCard;
