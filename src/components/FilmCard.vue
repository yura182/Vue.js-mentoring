<template>
  <div class="film-card">
    <div class="film-image">
      <img
        :src="movie.poster_path"
        class="film-img"
        alt="film"
        @error="handlePosterError"
      />
    </div>
    <div class="film-card-info">
      <div class="film-card-tile">
        {{ movie.title }}
      </div>
      <div class="film-card-year">
        <span class="border">{{ movie.release_date | parseYear }}</span>
      </div>
    </div>
    <div class="film-card-genre">{{ movie.genres | getOneGenre }}</div>
  </div>
</template>

<script>
import handlePosterError from "@/core/errorHandler/posterErrorHandler";

export default {
  name: "FilmCard",
  props: {
    movie: Object
  },
  methods: {
    handlePosterError
  }
};
</script>

<style scoped>
.film-card {
  width: 295px;
  color: white;
}

.film-img {
  width: 100%;
  height: 413px;
}

.film-card-info {
  margin-top: 15px;
  display: flex;
}

.film-card-tile {
  width: 890%;

  font-size: 12px;
}

.film-card-year {
  margin-left: auto;
  font-size: 10px;
}

.border {
  border-radius: 6px;
  padding: 2px 8px;
}

.film-card-genre {
  width: 100%;
  font-size: 60%;
}
</style>
