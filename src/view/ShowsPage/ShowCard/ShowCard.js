import React from "react";
import { Link } from "react-router-dom";
import "./ShowCard.scss";

const ShowCard = ({ show }) => (
  <div className="show__card">
    <Link to={`/show/${show.id}`}>
      <div className="show__rating">
        {show.rating} <i className="fas fa-star"></i>
      </div>
      <img src={show.image} alt={`${show.name} image`} />
      <div className="show__title">{show.name}</div>
    </Link>
  </div>
);

export default ShowCard;
