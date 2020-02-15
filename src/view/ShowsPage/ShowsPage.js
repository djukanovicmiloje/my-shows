import React from "react";

import fetchShows from "../../services/fetchShows";
import filterShows from "../../services/filterShows";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import GenreSelect from "./GenreSelect/GenreSelect";
import Pagination from "./Pagination/Pagination";
import Shows from "./ShowsContainer/Shows";

import "./ShowsPage.scss";
import SearchBar from "./SearchBar/SearchBar";

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

  onSearchBarChange(e) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    const { filteredShows, numberOfPages } = filterShows(
      this.state.shows,
      this.state.genre,
      this.state.searchTerm,
      this.state.pageNumber
    );

    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={e => this.onSearchBarChange(e)} />
        <div className="showbox">
          <GenreSelect onGenreClick={genre => this.onGenreClick(genre)} />
          <Shows shows={filteredShows} />
        </div>
        <Pagination
          numberOfPages={numberOfPages}
          onPageClick={pageNumber => this.onPageClick(pageNumber)}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ShowsPage;
