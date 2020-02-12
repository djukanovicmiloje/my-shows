const URL = "https://api.tvmaze.com";

class API {
  get(path) {
    return fetch(URL + path).then(res => res.json());
  }
}

export default new API();
