<template>
  <div class="films-list">
    <div class="film-card" v-for="film in movies" v-bind:key="film.id">
      <router-link :to="{ name: 'Film details', params: { id: film.id } }">
        <FilmCard
          :imageSrc="film.poster_path"
          :title="film.title"
          :year="film.release_date | parseYear"
          :genre="film.genres | getOneGenre"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import { mapState } from "vuex";

export default {
  name: "SimilarList",
  components: {
    FilmCard
  },
  computed: {
    ...mapState(["movies"])
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
