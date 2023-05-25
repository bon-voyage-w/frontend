<template>
  <div>
    <div class="placeinfo-list-title">
      <h2>관광지 찾기</h2>
      <p>내 주변 관광지를 찾아보세요</p>
    </div>
    <location-select-box-vue />
    <search-box-vue />
    <the-map-vue />
    <place-info-nav-vue />
    <gallery-board-list-vue />
    <the-page-nation-vue />
  </div>
</template>

<script>
import LocationSelectBoxVue from "@/components/common/LocationSelectBox.vue";
import SearchBoxVue from "@/components/common/SearchBox.vue";
import TheMapVue from "@/components/common/TheMap.vue";
import PlaceInfoNavVue from "@/components/common/PlaceInfoNav.vue";
import GalleryBoardListVue from "@/components/common/GalleryBoardList.vue";
import ThePageNationVue from "@/components/common/ThePageNation.vue";

export default {
  name: "AppAttraction",
  components: {
    LocationSelectBoxVue,
    SearchBoxVue,
    TheMapVue,
    PlaceInfoNavVue,
    ThePageNationVue,
    GalleryBoardListVue,
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
