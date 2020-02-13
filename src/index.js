import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import MyShows from "./view/MyShows";

ReactDOM.render(
  <HashRouter>
    <MyShows />
  </HashRouter>,
  document.getElementById("root")
);
