import React from "react";
import fetchShows from "../../services/fetchShows";
import ShowCard from "./ShowCard/ShowCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

import "./ShowsPage.scss";
import GenreSelect from "./GenreSelect/GenreSelect";

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

  onGenreClick(genre) {
    this.setState({ genre });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    const allShows = this.state.shows;
    const chosenGenre = this.state.genre;
    const showsToDisplay = chosenGenre
      ? allShows.filter(show => show.genres.includes(chosenGenre))
      : allShows;

    return (
      <div>
        <Header />
        <GenreSelect onGenreClick={genre => this.onGenreClick(genre)} />
        <div className="shows__container">
          {showsToDisplay.map((show, key) => (
            <Link to={`/show/${show.id}`} key={key}>
              <ShowCard show={show} key={key} />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShowsPage;
