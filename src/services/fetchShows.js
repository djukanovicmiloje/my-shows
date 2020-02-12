import API from "../shared/API";
import Show from "../models/show";

const fetchShows = () => {
  const requestPath = "/shows";
  return API.get(requestPath).then(showsData => {
    const shows = showsData.map(showData => {
      return new Show(
        showData.id,
        showData.name,
        showData.genres,
        showData.rating.average,
        showData.image.medium,
        showData.summary,
        showData.externals.imdb
      );
    });

    return shows;
  });
};

export default fetchShows;
