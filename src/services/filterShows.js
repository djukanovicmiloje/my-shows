import { SHOWS_PER_PAGE } from "../shared/constants";
import sortShows from "./sortShows";

const filterShows = (shows, genre, searchTerm, pageNumber, sortingCriteria) => {
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

  let sortedShows = sortShows(filteredShows, sortingCriteria);

  const numberOfPages = sortedShows.length;

  sortedShows = sortedShows.slice(
    (pageNumber - 1) * SHOWS_PER_PAGE,
    pageNumber * SHOWS_PER_PAGE
  );

  return { filteredShows: sortedShows, numberOfPages };
};

export default filterShows;
