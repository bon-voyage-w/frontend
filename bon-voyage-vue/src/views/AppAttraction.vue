<template>
  <div>
    <div class="placeinfo-list-title">
      <h2>원하는 대로 검색하기</h2>
      <p>검색검색검색검색검색검색검색검색검색검색검색검색검색검색</p>
    </div>
    <SearchBox></SearchBox>
    <MyLocationButton></MyLocationButton>
    <TheMap></TheMap>
    <GalleryBoardList></GalleryBoardList>
  </div>
</template>

<script>
import SearchBox from "@/components/common/SearchBox.vue";
import TheMap from "@/components/common/TheMap.vue";
import GalleryBoardList from "@/components/common/GalleryBoardList.vue";
import MyLocationButton from "@/components/common/item/MyLocationButton.vue";

export default {
  name: "AppAttraction",
  components: {
    SearchBox,
    TheMap,
    GalleryBoardList,
    MyLocationButton,
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
