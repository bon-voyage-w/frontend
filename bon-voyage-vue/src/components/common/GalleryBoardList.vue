<template>
  <div class="placeinfo-list">
    <!-- 필터링용 -->
    <LocationSelectBox />
    <place-info-nav></place-info-nav>

    <div class="placeinfo-list-contents">
      <GalleryBoardListItem
        v-for="attraction in attractions"
        :key="attraction.contentId"
        :attraction="attraction"
      />
    </div>
  </div>
</template>

<script>
import LocationSelectBox from "@/components/common/LocationSelectBox.vue";
import PlaceInfoNav from "@/components/common/PlaceInfoNav";
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";
import http from "@/api/http";

export default {
  name: "GalleryBoardList",
  components: {
    LocationSelectBox,
    PlaceInfoNav,
    GalleryBoardListItem,
  },
  data() {
    return {
      attractions: [],
    };
  },
  created() {
    http.get(`/attractions`).then(({ data }) => {
      this.attractions = data.content;
    });

    console.log(">>>>>>>>>>>>> 리스트 받아와져라");
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
