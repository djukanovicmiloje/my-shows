import React from "react";

import fetchShows from "../../services/fetchShows";
import filterShows from "../../services/filterShows";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import GenreSelect from "../components/GenreSelect/GenreSelect";
import Pagination from "../components/Pagination/Pagination";
import Shows from "../components/Shows/Shows";
import SearchBar from "../components/SearchBar/SearchBar";

class ShowsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pageNumber: 1,
      sort: "popular"
    };
  }

  onSortOptionClick(option) {
    this.setState({ sort: option });
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
      this.state.pageNumber,
      this.state.sort
    );

    return (
      <div className="myShows_container">
        <Header />
        <div className="search_container">
          <SearchBar onChange={e => this.onSearchBarChange(e)} />
        </div>
        <div className="show_box">
          <GenreSelect onGenreClick={genre => this.onGenreClick(genre)} />

          <Shows shows={filteredShows} />
        </div>
        <Pagination
          numberOfPages={numberOfPages}
          onPageClick={pageNumber => this.onPageClick(pageNumber)}
        />
      </div>
    );
  }
}

export default ShowsPage;
