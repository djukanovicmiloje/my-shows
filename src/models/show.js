class Show {
  constructor(id, name, genres, rating, image, summary, imdb, cast) {
    this.id = id;
    this.name = name;
    this.genres = genres;
    this.rating = rating;
    this.image = image;
    this.summary = summary;
    this.imdb = imdb;
    this.cast = cast;
  }
  isTopRated() {
    return this.rating > 8 ? true : false;
  }
}

export default Show;
