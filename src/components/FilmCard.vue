<template>
  <div class="film-card">
    <div class="film-image">
      <img :src="imageSrc" class="film-img" alt="film" />
    </div>
    <div class="film-card-info">
      <div class="film-card-tile">
        {{ title }}
      </div>
      <div class="film-card-year">
        <span class="border">{{ year }}</span>
      </div>
    </div>
    <div class="film-card-genre">{{ genre }}</div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    year: Number,
    genre: String
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
