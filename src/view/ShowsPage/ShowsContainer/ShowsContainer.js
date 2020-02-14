import React from "react";
import ShowCard from "../ShowCard/ShowCard";

//receives 6 shows and paints them
const ShowsContainer = ({ shows }) => (
  <div className="shows__container">
    {shows.map((show, key) => (
      <ShowCard show={show} key={key} />
    ))}
  </div>
);

export default ShowsContainer;
