import React from "react";
import fetchShows from "../../services/fetchShows";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import GenreSelect from "./GenreSelect/GenreSelect";
import Pagination from "./Pagination/Pagination";
import Shows from "./ShowsContainer/Shows";

import "./ShowsPage.scss";
const SHOWS_PER_PAGE = 6;

class ShowsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pageNumber: 1
    };
  }

  componentDidMount() {
    fetchShows().then(shows => this.setState({ shows, loading: false }));
  }

  onGenreClick(genre) {
    this.setState({ genre, pageNumber: 1 });
  }

  onPageClick(pageNumber) {
    this.setState({ pageNumber });
  }
  //Move this to a separate file filterShowsToDisplay.js in services

  onSearchBarChange(e) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  }

  filterShowsToDisplay() {
    //Filters by Genre
    const allShows = this.state.shows;
    const chosenGenre = this.state.genre;

    let showsToDisplay = chosenGenre
      ? allShows.filter(show => show.genres.includes(chosenGenre))
      : allShows;

    const searchTerm = this.state.searchTerm;
    if (searchTerm) {
      showsToDisplay = showsToDisplay.filter(
        show =>
          show.name.slice(0, searchTerm.length).toUpperCase() ===
          searchTerm.toUpperCase()
      );
    }
    const numberOfShows = showsToDisplay.length;

    //Filters by Page
    const pageNumber = this.state.pageNumber;
    const showsPageFiltered = showsToDisplay.slice(
      (pageNumber - 1) * SHOWS_PER_PAGE,
      pageNumber * SHOWS_PER_PAGE
    );

    return { showsPageFiltered, numberOfShows };
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    //ON GENERE CHANGE SET PAGE TO 1

    const help = this.filterShowsToDisplay(); //THIS NEEDS ATTENTION
    const showsToDisplay = help.showsPageFiltered;
    const numberOfPages = parseInt(help.numberOfShows / SHOWS_PER_PAGE);

    return (
      <div>
        <Header />
        <input
          onChange={e => this.onSearchBarChange(e)}
          placeholder="Search Shows"
        />
        <GenreSelect onGenreClick={genre => this.onGenreClick(genre)} />
        <Shows shows={showsToDisplay} />
        <Pagination
          numberOfPages={numberOfPages}
          onPageClick={pageNumber => this.onPageClick(pageNumber)}
        />
        <Footer />
      </div>
    );
  }
}

export default ShowsPage;
