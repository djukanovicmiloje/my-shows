import React from "react";
import ShowCard from "../ShowCard/ShowCard";

import "./Shows.scss";

//receives 6 shows and paints them
const Shows = ({ shows }) => (
  <div className="shows__container">
    {shows.map((show, key) => (
      <ShowCard show={show} key={key} />
    ))}
  </div>
);

export default Shows;
