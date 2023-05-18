<template>
  <div id="app">
    <the-header-nav-bar />
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeaderNavBar from "./components/common/TheHeaderNavBar.vue";
import TheFooter from "./components/common/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeaderNavBar,
    TheFooter,
  },
};
</script>

<style>
/* reset */
/* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap"); */
@font-face {
  font-family: "NanumSquareNeo-Variable";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "NanumSquareNeo-Variable";
  /* font-family: "Noto Sans KR", sans-serif; */
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
p,
button,
ul,
li {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
button {
  background-color: initial;
  border: 0;
}
</style>
