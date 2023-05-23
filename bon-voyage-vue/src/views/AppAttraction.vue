<template>
  <div>
    <div class="placeinfo-list-title">
      <h2>여행지 검색</h2>
      <p>원하는 여행지를 쉽게 찾아볼 수 있어요</p>
    </div>
    <LocationSelectBox />
    <SearchBox></SearchBox>

    <TheMap></TheMap>
    <place-info-nav></place-info-nav>
    <GalleryBoardList></GalleryBoardList>
  </div>
</template>

<script>
import SearchBox from "@/components/common/SearchBox.vue";
import LocationSelectBox from "@/components/common/LocationSelectBox.vue";
import PlaceInfoNav from "@/components/common/PlaceInfoNav";
import TheMap from "@/components/common/TheMap.vue";
import GalleryBoardList from "@/components/common/GalleryBoardList.vue";

export default {
  name: "AppAttraction",
  components: {
    SearchBox,
    LocationSelectBox,
    PlaceInfoNav,
    TheMap,
    GalleryBoardList,
  },
  // data() {
  //   return {
  //     message: "",
  //   };
  // },
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
