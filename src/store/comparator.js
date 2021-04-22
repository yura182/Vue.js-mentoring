const comparator = {
  releaseDate: function(a, b) {
    return new Date(b.release_date) - new Date(a.release_date);
  },
  rating: function(a, b) {
    return b.vote_average - a.vote_average;
  }
};

export { comparator };
