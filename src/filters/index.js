import { FILTERS } from "@/filters/filters";

const parseYear = date => parseInt(date);
const getOneGenre = listOfGenres => {
  const random = Math.floor(Math.random() * listOfGenres.length);
  return listOfGenres[random];
};
const parseGenres = genres => {
  return genres.join(", ");
};

const parseRating = rating => {
  return parseFloat(rating).toFixed(1);
};

export default {
  [FILTERS.PARSE_YEAR]: parseYear,
  [FILTERS.GET_ONE_GENRE]: getOneGenre,
  [FILTERS.PARSE_GENRES]: parseGenres,
  [FILTERS.PARSE_RATING]: parseRating
};
