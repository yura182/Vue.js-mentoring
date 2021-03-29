<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="header-logo">
        <Logo firstPart="netflix" secondPart="roulette" />
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

  background-image: url("../assets/header_background.jpg");
  background-size: 80%;
  filter: blur(2px);
  filter: brightness(0.15);
  -webkit-filter: blur(2px) brightness(0.15);
}

.header-logo {
  padding: 10px 0 0 30px;
}

.film-poster {
  color: white;
  font-size: 26px;
  font-weight: 100;
  padding: 0px 0 10px 40px;
  letter-spacing: 2px;
  display: inline-block;
  vertical-align: middle;
}

.film-img {
  height: 220px;
}

.film-title {
  color: white;
}

.film-row {
  padding-top: 10px;
  display: inline-block;
}

.right-info {
  padding-left: 20px;
  display: inline-block;
  vertical-align: top;
}

.film-info {
  margin-top: 20px;
}

.film-title {
  font-size: 22px;
  font-weight: 200;
  display: inline-block;
}

.film-rating {
  border-radius: 50%;
  /* width:45px; */
  padding: 4px 7px;
  margin-left: 10px;
  font-weight: 400;
  border-color: white;
  font-size: 22px;
  color: rgb(24, 105, 21);
  display: inline-block;
  border-style: solid;
  border-width: 1px;
}

.film-genre {
  color: white;
  font-size: 10px;
  font-weight: 100;
}
.film-description {
  color: white;
}
.film-year {
  font-size: 18px;
  color: #f65261;
  display: inline-block;
}
.film-duration {
  font-size: 18px;
  padding-left: 10px;
  color: #f65261;
  display: inline-block;
}

.film-description {
  margin-top: 20px;
  text-align: justify;
  width: 500px;
  font-size: 10px;
}
</style>
