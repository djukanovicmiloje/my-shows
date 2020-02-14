import React from "react";

import "./ActorCardGrid.scss";

const ActorCardGrid = ({ actor }) => (
  <div className="actorCard__grid">
    <img src={actor.image} alt="" />
    <div>{actor.name}</div>
  </div>
);

export default ActorCardGrid;
