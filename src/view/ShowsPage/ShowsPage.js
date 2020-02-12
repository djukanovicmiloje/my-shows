import React from "react";
import fetchShows from "../../services/fetchShows";
import "./ShowsPage.scss";
import ShowCard from "./ShowCard/ShowCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      return <div>Content is loading</div>;
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
