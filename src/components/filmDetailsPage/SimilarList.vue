<template>
  <div class="films-list">
    <Error />
    <div class="film-card" v-for="movie in movies" v-bind:key="movie.id">
      <router-link :to="filmRoute(movie.id)">
        <FilmCard :movie="movie" />
      </router-link>
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import { mapGetters } from "vuex";
import { filmDetailsRoute } from "@/router/routeCreators";
import { GETTERS } from "@/store/storeConstants";
import Error from "@/components/Error";

export default {
  name: "SimilarList",
  components: {
    Error,
    FilmCard
  },
  computed: {
    ...mapGetters([GETTERS.GET_SIMILAR_MOVIES]),
    movies() {
      return this[GETTERS.GET_SIMILAR_MOVIES];
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
