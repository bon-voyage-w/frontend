<template>
  <div class="wrap-app-kakao-map">
    <MapSideBar></MapSideBar>
    <TheKakaoMap></TheKakaoMap>
  </div>
</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
import MapSideBar from "@/components/map/MapSideBar.vue";
export default {
  name: "AppRoute",
  components: {
    TheKakaoMap,
    MapSideBar,
  },

  created() {},
  methods: {},
};
</script>

<style scoped>
.wrap-app-kakao-map {
  width: 100vw;
  height: 100vh;
}
</style>
