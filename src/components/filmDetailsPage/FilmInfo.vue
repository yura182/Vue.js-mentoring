<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="header-top-container">
        <div class="header-logo">
          <Logo firstPart="netflix" secondPart="roulette" />
        </div>
        <div class="main-page-button">
          <router-link to="/"
            ><img src="../../assets/search.svg" alt="main-page"
          /></router-link>
        </div>
      </div>

      <div class="film-info">
        <div class="film-poster">
          <img :src="imageSrc" class="film-img" alt="film" />
        </div>
        <div class="right-info">
          <div class="film-row">
            <div class="film-title">{{ title }}</div>
            <div class="film-rating">{{ rating }}</div>
          </div>
          <div class="film-genre">{{ genre }}</div>
          <div class="film-row">
            <div class="film-year">{{ year }}</div>
            <div class="film-duration">{{ duration }} min</div>
          </div>

          <div class="film-description">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "FilmInfo",
  components: {
    Logo
  },
  props: {
    imageSrc: String,
    title: String,
    year: Number,
    genre: String,
    duration: Number,
    rating: Number,
    description: String
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
  padding-left: 30px;
  display: inline-block;
  vertical-align: top;
}

.film-info {
  margin-top: 20px;
}

.film-title {
  font-size: 28px;
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
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 1px;
}

.film-description {
  color: white;
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
  width: 500px;
  font-size: 12px;
  font-weight: 100;
}

.header-top-container {
  display: flex;
  padding: 10px 12px;
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
