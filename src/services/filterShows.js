import { SHOWS_PER_PAGE } from "../shared/constants";

const filterShows = (shows, genre, searchTerm, pageNumber) => {
  let filteredShows = shows;

  if (genre) {
    filteredShows = filteredShows.filter(show => show.genres.includes(genre));
  }

  if (searchTerm) {
    filteredShows = filteredShows.filter(
      show =>
        show.name.slice(0, searchTerm.length).toUpperCase() ===
        searchTerm.toUpperCase()
    );
  }

  const numberOfPages = filterShows.length;

  filteredShows = filteredShows.slice(
    (pageNumber - 1) * SHOWS_PER_PAGE,
    pageNumber * SHOWS_PER_PAGE
  );

  return { filteredShows, numberOfPages };
};

export default filterShows;
