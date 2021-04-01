<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="header-logo">
        <Logo firstPart="netflix" secondPart="roulette" />
      </div>
      <div class="search-header">FIND YOUR MOVIE</div>
      <div class="search-bar"><SearchBar /></div>
      <div class="search-by">
        <FilterButtons
          message="SEARCH BY"
          firstButtonTitle="TITLE"
          secondButtonTitle="GENRE"
          firstOption="title"
          secondOption="genre"
          options="search-by"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterButtons from "@/components/FilterButtons.vue";

export default {
  components: {
    Logo,
    SearchBar,
    FilterButtons
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 250px;
}

.header-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 252px;

  background-image: url("../../assets/header_background.jpg");
  background-size: 80%;
  filter: blur(2px);
  filter: brightness(0.35);
  -webkit-filter: blur(2px) brightness(0.35);
}

.header-logo {
  padding: 10px 0 0 30px;
}

.search-header {
  color: white;
  font-size: 26px;
  font-weight: 100;
  padding: 30px 60px 10px 60px;
  letter-spacing: 2px;
}

.search-bar {
  padding: 5px 60px;
}

.search-by {
  padding: 5px 60px;
}
</style>
