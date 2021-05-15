<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="header-top-container">
        <div class="header-logo">
          <Logo :firstPart="logoFirstPart" :secondPart="logoSecondPart" />
        </div>
        <div class="main-page-button">
          <router-link to="/"
            ><img src="../../assets/search.svg" alt="main-page"
          /></router-link>
        </div>
      </div>

      <div class="film-info" v-if="isMovieLoaded">
        <div class="film-poster">
          <img
            :src="movie.poster_path"
            class="film-img"
            alt="film"
            @error="handlePosterError"
          />
        </div>
        <div class="right-info">
          <div class="film-row">
            <div class="film-title">{{ movie.title }}</div>
            <div class="film-rating">
              {{ movie.vote_average | parseRating }}
            </div>
          </div>
          <div class="film-genre">{{ movie.genres | parseGenres }}</div>
          <div class="film-row">
            <div class="film-year">{{ movie.release_date | parseYear }}</div>
            <div class="film-duration">{{ movieRuntime(movie.runtime) }}</div>
          </div>

          <div class="film-description">
            <p>{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { LOGO_FIRST_PART, LOGO_SECOND_PART } from "@/core/constants";
import { mapActions, mapGetters } from "vuex";
import handlePosterError from "@/core/errorHandler/posterErrorHandler";
import { ACTIONS, GETTERS } from "@/store/storeConstants";

export default {
  name: "FilmInfo",
  components: {
    Logo
  },
  data() {
    return {
      logoFirstPart: LOGO_FIRST_PART,
      logoSecondPart: LOGO_SECOND_PART
    };
  },
  computed: {
    ...mapGetters([GETTERS.IS_MOVIE_BY_ID_LOADED, GETTERS.CURRENT_MOVIE]),
    movie() {
      return this[GETTERS.CURRENT_MOVIE];
    },
    currentMovieId() {
      window.scrollTo(0, 0);
      return this.$route.params.id;
    },
    isMovieLoaded() {
      return this[GETTERS.IS_MOVIE_BY_ID_LOADED];
    }
  },
  watch: {
    currentMovieId: function(newId) {
      this[ACTIONS.FIND_MOVIE_BY_ID](newId);
    }
  },
  methods: {
    ...mapActions([ACTIONS.FIND_MOVIE_BY_ID]),
    movieRuntime(runtime) {
      if (runtime) {
        return `${runtime} min`;
      }
      return "";
    },
    handlePosterError
  },
  created() {
    this[ACTIONS.FIND_MOVIE_BY_ID](this.currentMovieId);
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 350px;
}

.header-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 352px;

  background-image: url("../../assets/header_background.jpg");
  background-size: 80%;
  filter: blur(2px);
  filter: brightness(0.15);
  -webkit-filter: blur(2px) brightness(0.15);
}

.header-logo {
  margin-bottom: auto;
  margin-top: auto;
}

.film-poster {
  padding: 0px 0 10px 40px;
  display: inline-block;
  vertical-align: middle;
}

.film-img {
  height: 260px;
}

.film-row {
  padding-top: 12px;
  display: inline-block;
}

.right-info {
  padding-left: 50px;
  display: inline-block;
  vertical-align: top;
}

.film-info {
  margin-top: 20px;
}

.film-title {
  font-size: 32px;
  font-weight: 200;
  display: inline-block;
  color: white;
}

.film-rating {
  border-radius: 50%;
  /* width:45px; */
  padding: 8px 11px;
  margin-left: 10px;
  font-weight: 400;
  border-color: white;
  font-size: 20px;
  color: #a1e66f;
  display: inline-block;
  border-style: solid;
  border-width: 1px;
}

.film-genre {
  color: white;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 1px;
}

.film-year {
  font-size: 20px;
  color: #f65261;
  display: inline-block;
  font-weight: 100;
  letter-spacing: 1px;
}

.film-duration {
  font-size: 18px;
  padding-left: 18px;
  color: #f65261;
  display: inline-block;
  font-weight: 100;
  letter-spacing: 1px;
}

.film-description {
  margin-top: 20px;
  text-align: justify;
  width: 600px;
  font-size: 13px;
  font-weight: 100;
  color: white;
}

.header-top-container {
  display: flex;
  padding: 10px 30px;
}

.main-page-button {
  order: 2;
  margin-bottom: auto;
  margin-top: auto;
  margin-left: auto;
}

.main-page-button img {
  width: 20px;
  color: green;
}

svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
  vertical-align: bottom;
}
</style>
