import React from "react";
import ActorCardGrid from "./ActorCardGrid/ActorCardGrid";
import ActorCardList from "./ActorCardList/ActorCardList";

import "./CastDetails.scss";

class CastDetails extends React.Component {
  constructor({ cast }) {
    super();
    this.state = {
      isGrid: true,
      cast
    };
  }

  onChangeLayoutClick() {
    this.setState({ isGrid: !this.state.isGrid });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.onChangeLayoutClick()}>
          Change Layout
        </button>
        <div className="cast__details">
          {this.state.isGrid
            ? this.state.cast.map((actor, key) => (
                <ActorCardGrid key={key} actor={actor} />
              ))
            : this.state.cast.map((actor, key) => (
                <ActorCardList key={key} actor={actor} />
              ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CastDetails;
