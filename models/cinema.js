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
  let filmsByName = this.films.filter(film => film.title === title);
  filmsByName = filmsByName[0];
  return filmsByName;
}

Cinema.prototype.findFilmsByGenre = function(genre) {
  let filmsByGenre = this.films.filter(film => film.genre === genre);
  return filmsByGenre;
}

Cinema.prototype.findFilmsByYear = function(year) {
  let filmsByYear = this.films.some(film => film.year === year);
  return filmsByYear;
}

Cinema.prototype.allFilmsLength = function (length) {
  let filmsByLength = this.films.every(film => film.length >= length);
  return filmsByLength;
}

Cinema.prototype.totalRunningTime = function () {
  let allLengths = this.films.map(film => film.length)
  const reducer = function(accumulator, currentValue) {accumulator += currentValue
    return accumulator}
  let totalLengths = allLengths.reduce(reducer)
  return totalLengths
}