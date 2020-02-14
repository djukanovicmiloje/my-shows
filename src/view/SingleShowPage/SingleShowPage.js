import React from "react";
import Loader from "../components/Loader/Loader";
import fetchSingleShow from "../../services/fetchSingleShow";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShowDetails from "../components/ShowDetails/ShowDetails";

class SingleShowPage extends React.Component {
  constructor({ match }) {
    super();
    this.showId = match.params.id;
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    fetchSingleShow(this.showId).then(show =>
      this.setState({ show, loading: false })
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ShowDetails show={this.state.show} />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}

export default SingleShowPage;
