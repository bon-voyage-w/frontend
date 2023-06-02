<template>
  <div>
    <div class="placeinfo-list-title">
      <h2>여행 경로 공유 게시판</h2>
      <p>내가 다녀온 여행 경로를 공유해보세요</p>
    </div>
    <attraction-board-list />
    <the-page-nation-vue />
  </div>
</template>

<script>
import AttractionBoardList from "@/components/attractionBoard/AttractionBoardList.vue";
import ThePageNationVue from "@/components/common/ThePageNation.vue";
export default {
  name: "AppShareBoard",
  components: {
    AttractionBoardList,
    ThePageNationVue,
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.placeinfo-list-title {
  text-align: center;
  margin: 120px 0 80px 0;
}
</style>
