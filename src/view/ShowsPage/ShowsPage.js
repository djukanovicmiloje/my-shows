import React from "react";
import fetchShows from "../../services/fetchShows";
import "./ShowsPage.scss";
import ShowCard from "./ShowCard/ShowCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";

class ShowsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    fetchShows().then(shows => this.setState({ shows, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <div>
        <Header />
        <div className="shows__container">
          {this.state.shows.map((show, key) => (
            <ShowCard show={show} key={key} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShowsPage;
