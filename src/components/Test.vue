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
import Header from "@/components/Header";
import MiddleBlock from "@/components/MiddleBlock";
import ResultList from "@/components/ResultList";
import Logo from "@/components/Logo";

export default {
  components: {
    Header,
    MiddleBlock,
    ResultList,
    Logo
  }
};
</script>

<style scoped>
.main-block {
  width: 1000px;
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
