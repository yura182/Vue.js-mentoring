export const parseYear = date => parseInt(date);
export const getOneGenre = listOfGenres => {
  const random = Math.floor(Math.random() * listOfGenres.length);
  return listOfGenres[random];
};
export const parseGenre = genres => {
  return genres.join(", ");
};

export const parseRating = rating => {
  return parseFloat(rating).toFixed(1);
};
