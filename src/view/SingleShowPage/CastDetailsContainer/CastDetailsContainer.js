import React from "react";
import CastDetails from "../../components/CastDetails/CastDetails";

class CastDetailsContainer extends React.Component {
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
      <CastDetails
        cast={this.state.cast}
        isGrid={this.state.isGrid}
        onChangeLayoutClick={() => this.onChangeLayoutClick()}
      />
    );
  }
}

export default CastDetailsContainer;
