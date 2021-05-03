const handlePosterError = function(error) {
  error.target.src = require("@/assets/defaultPoster.png");
};

export default handlePosterError;
