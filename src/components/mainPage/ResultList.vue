<template>
  <div class="films-list">
    <div class="film-card" v-for="movie in movies" v-bind:key="movie.id">
      <router-link :to="filmRoute(movie.id)">
        <FilmCard :movie="movie" />
      </router-link>
    </div>
    <LoadMore v-if="showButton" />
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import { mapGetters } from "vuex";
import { filmDetailsRoute } from "@/router/routeCreators";
import { GETTERS } from "@/store/storeConstants";
import LoadMore from "@/components/LoadMore";

export default {
  name: "ResultList",
  components: {
    FilmCard,
    LoadMore
  },
  computed: {
    ...mapGetters([
      GETTERS.GET_SEARCH_MOVIES,
      GETTERS.IS_LOAD_MORE_BUTTON_SHOWN
    ]),
    showButton() {
      return this[GETTERS.IS_LOAD_MORE_BUTTON_SHOWN];
    },
    movies() {
      return this[GETTERS.GET_SEARCH_MOVIES];
    }
  },
  methods: {
    filmRoute(id) {
      return filmDetailsRoute(id);
    }
  }
};
</script>

<style scoped>
.films-list {
  width: 100%;
  background-color: #232323;
  padding: 30px;
}

.film-card {
  padding: 8px;
  display: inline-block;
}
</style>
