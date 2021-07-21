const Film = require("./film");

const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.listAllFilms = function() {
  const allFilms = this.films.map(film => film.title);
  return allFilms
}

