const sortShows = (shows, sortingCriteria) => {
  switch (sortingCriteria) {
    case "popular":
      return shows.sort((show1, show2) => show2.rating - show1.rating);
    case "alpha":
      return shows.sort((show1, show2) => show1.name.localeCompare(show2.name));
    default:
      return shows;
  }
};

export default sortShows;
