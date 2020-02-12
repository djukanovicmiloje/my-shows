import API from "../shared/API";
import Show from "../models/show";

const fetchSingleShow = showId => {
  const requestPath = `/shows/${showId}?embed[]=seasons&embed[]=cast`;

  return API.get(requestPath).then(
    showData =>
      new Show(
        showData.id,
        showData.name,
        showData.genres,
        showData.rating.average,
        showData.image.original,
        showData.summary,
        showData.externals.imdb
      )
  );
};

export default fetchSingleShow;
