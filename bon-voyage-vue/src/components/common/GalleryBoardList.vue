<template>
  <div class="placeinfo-list">
    <LocationSelectBox />
    <place-info-nav></place-info-nav>

    <div class="placeinfo-list-contents">
      <GalleryBoardListItem />
      <GalleryBoardListItem />
      <GalleryBoardListItem />
      <GalleryBoardListItem />
      <GalleryBoardListItem />
      <GalleryBoardListItem />
    </div>
  </div>
</template>

<script>
import LocationSelectBox from "@/components/common/LocationSelectBox.vue";
import PlaceInfoNav from "@/components/common/PlaceInfoNav";
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";

export default {
  name: "PlaceInfoList",
  components: {
    LocationSelectBox,
    PlaceInfoNav,
    GalleryBoardListItem,
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.placeinfo-list {
  width: 1000px;
  margin: 0 auto;
}
.placeinfo-list-contents {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
}
</style>
