import React from "react";
import ShowsPage from "./ShowsPage/ShowsPage";
import { Switch, Route } from "react-router-dom";

import "./MyShows.scss";
import SingleShowPage from "./SingleShowPage/SingleShowPage";

class MyShows extends React.Component {
  render() {
    return (
      <div className="myShows__container">
        <Switch>
          <Route path="/show/:id" component={SingleShowPage} />
          <Route path="/" component={ShowsPage} />
        </Switch>
      </div>
    );
  }
}

export default MyShows;
