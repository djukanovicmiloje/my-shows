import React from "react";

import "./ActorCardList.scss";

const ActorCardList = ({ actor }) => (
  <div className="actorCard__list">
    <div>
      <img src={actor.image} alt="" />
    </div>
    <div>{actor.name}</div>
  </div>
);

export default ActorCardList;
