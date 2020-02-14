import React from "react";
import fetchShows from "../../services/fetchShows";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import "./ShowsPage.scss";
import GenreSelect from "./GenreSelect/GenreSelect";
import Pagination from "./Pagination/Pagination";
import ShowsContainer from "./ShowsContainer/ShowsContainer";

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
    this.setState({ genre });
  }

  onPageClick(pageNumber) {
    this.setState({ pageNumber });
  }

  filterShowsToDisplay() {
    //Filters by Genre
    const allShows = this.state.shows;
    const chosenGenre = this.state.genre;

    const showsToDisplay = chosenGenre
      ? allShows.filter(show => show.genres.includes(chosenGenre))
      : allShows;

    //Filters by Page
    const pageNumber = this.state.pageNumber;
    const showsPageFiltered = showsToDisplay.slice(
      (pageNumber - 1) * SHOWS_PER_PAGE,
      pageNumber * SHOWS_PER_PAGE
    );

    return showsPageFiltered;
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    const showsToDisplay = this.filterShowsToDisplay();

    return (
      <div>
        <Header />
        <GenreSelect onGenreClick={genre => this.onGenreClick(genre)} />
        <ShowsContainer shows={showsToDisplay} />
        <Pagination
          numberOfPages={parseInt(this.state.shows.length / SHOWS_PER_PAGE)}
          onPageClick={pageNumber => this.onPageClick(pageNumber)}
        />
        <Footer />
      </div>
    );
  }
}

export default ShowsPage;
