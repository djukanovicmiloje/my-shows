import React from "react";
import ActorCardGrid from "../ActorCardGrid/ActorCardGrid";
import ActorCardList from "../ActorCardList/ActorCardList";
import "./CastDetails.scss";

const CastDetails = ({ cast, isGrid, onChangeLayoutClick }) => (
  <React.Fragment>
    <button onClick={() => onChangeLayoutClick()}>Change Layout</button>
    <div className="cast__details">
      {isGrid
        ? cast.map((actor, key) => <ActorCardGrid key={key} actor={actor} />)
        : cast.map((actor, key) => <ActorCardList key={key} actor={actor} />)}
    </div>
  </React.Fragment>
);

export default CastDetails;
