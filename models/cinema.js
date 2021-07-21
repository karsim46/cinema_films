const Film = require("./film");

const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.listAllFilms = function() {
  const allFilms = this.films.map(film => film.title);
  return allFilms
}

Cinema.prototype.findFilmByTitle = function(title) {
  let filmsByName = this.films.filter(film => film.title == title);
  filmsByName = filmsByName[0]
  return filmsByName;
}



