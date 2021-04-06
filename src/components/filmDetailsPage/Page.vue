<template>
  <div class="main-block">
    <div class="firs-block">
      <FilmInfo
        imageSrc="https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/12/IMG_1021-scaled.jpeg"
        title="Back To The Future"
        year="1985"
        genre="Sci-Fi"
        rating="8.8"
        description="Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis. Written by Zemeckis and Bob Gale, it stars Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, and Thomas F. Wilson. Set in 1985, the story follows Marty McFly (Fox), a teenager accidentally sent back to 1955 in a time-traveling DeLorean automobile built by his eccentric scientist friend Doctor Emmett 'Doc' Brown (Lloyd)"
        duration="155"
      />
    </div>
    <div class="second-block">
      <MiddleBlock />
    </div>
    <div class="third-block">
      <SimilarList />
    </div>
    <div class="footer-block">
      <div class="footer-logo">
        <Logo :firstPart="logoFirstPart" :secondPart="logoSecondPart" />
      </div>
    </div>
  </div>
</template>

<script>
import FilmInfo from "@/components/filmDetailsPage/FilmInfo";
import MiddleBlock from "@/components/filmDetailsPage/MiddleBlock";
import SimilarList from "@/components/filmDetailsPage/SimilarList";
import Logo from "@/components/Logo";
import { LOGO_FIRST_PART, LOGO_SECOND_PART } from "@/core/constants";

export default {
  name: "Page",
  components: {
    FilmInfo,
    MiddleBlock,
    SimilarList,
    Logo
  },
  data() {
    return {
      logoFirstPart: LOGO_FIRST_PART,
      logoSecondPart: LOGO_SECOND_PART
    };
  }
};
</script>

<style scoped>
.main-block {
  width: 1000px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(31, 30, 30, 0.8);
  -moz-box-shadow: 0px 0px 15px 2px rgba(31, 30, 30, 0.8);
  box-shadow: 0px 0px 20px 2px rgba(31, 30, 30, 0.8);
}

.footer-block {
  background-color: #555555;
  width: 100%;
  display: flex;
}

.footer-logo {
  padding: 10px 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
