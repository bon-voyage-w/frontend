<template>
  <div>
    <the-carousel></the-carousel>
    <div class="placeinfo-list-title">
      <h2>오늘의 추천 여행지</h2>
      <p>SNS에서 유명한 펜션부터 5성급 호텔까지 여행은 본 보야지에서!</p>
    </div>
    <attraction-board-list />
  </div>
</template>

<script>
import TheCarousel from "@/components/main/TheCarousel";
import AttractionBoardList from "@/components/attractionBoard/AttractionBoardList.vue";
export default {
  name: "AppMain",
  components: {
    TheCarousel,
    AttractionBoardList,
  },
};
</script>

<style scoped>
.placeinfo-list-title {
  text-align: center;
  margin: 120px 0 80px 0;
}
</style>
