import React from "react";
import { Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import ShowsPage from "./ShowsPage";
import SingleShowPage from "./SingleShowPage";

class MyShows extends React.Component {
  render() {
    return (
      <div className="myShows__container">
        <HashRouter>
          <Switch>
            <Route path="/show/:id" component={SingleShowPage} />
            <Route path="/" component={ShowsPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default MyShows;
