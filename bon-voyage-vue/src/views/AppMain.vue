<template>
  <div>
    <the-carousel></the-carousel>
    <div class="placeinfo-list-title">
      <h2>이 지역은 이 숙소!</h2>
      <p>SNS에서 유명한 펜션부터 5성급 호텔까지 여행은 본보야지에서</p>
    </div>
    <gallery-board-list></gallery-board-list>
  </div>
</template>

<script>
import TheCarousel from "@/components/main/TheCarousel";
import GalleryBoardList from "@/components/common/GalleryBoardList.vue";
export default {
  name: "AppMain",
  components: {
    TheCarousel,
    GalleryBoardList,
  },
};
</script>

<style scoped>
.placeinfo-list-title {
  text-align: center;
  margin: 120px 0 80px 0;
}
</style>
