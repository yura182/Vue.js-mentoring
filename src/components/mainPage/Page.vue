<template>
  <div class="main-block">
    <Loading />
    <div class="firs-block">
      <Header />
    </div>
    <div class="second-block">
      <MiddleBlock />
    </div>
    <div class="third-block">
      <ResultList />
    </div>
    <div class="footer-block">
      <div class="footer-logo">
        <Logo :firstPart="logoFirstPart" :secondPart="logoSecondPart" />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import Header from "@/components/mainPage/Header";
import MiddleBlock from "@/components/mainPage/MiddleBlock";
import ResultList from "@/components/mainPage/ResultList";
import Logo from "@/components/Logo";
import { LOGO_FIRST_PART, LOGO_SECOND_PART } from "@/core/constants";

export default {
  name: "Page",
  components: {
    Header,
    MiddleBlock,
    ResultList,
    Logo,
    Loading
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
