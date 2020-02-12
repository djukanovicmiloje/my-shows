import React from "react";
import ShowsPage from "./ShowsPage/ShowsPage";
import "./MyShows.scss";

class MyShows extends React.Component {
  render() {
    return (
      <div className="myShows__container">
        <ShowsPage />
      </div>
    );
  }
}

export default MyShows;
