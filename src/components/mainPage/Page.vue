<template>
  <div class="main-block">
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
        <Logo firstPart="netflix" secondPart="roulette" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/mainPage/Header";
import MiddleBlock from "@/components/mainPage/MiddleBlock";
import ResultList from "@/components/mainPage/ResultList";
import Logo from "@/components/Logo";

export default {
  name: "Page",
  components: {
    Header,
    MiddleBlock,
    ResultList,
    Logo,
  },
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
