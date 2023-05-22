<template>
  <div class="placeinfo-list">
    <!-- 필터링용 -->
    <LocationSelectBox />
    <place-info-nav></place-info-nav>

    <div class="placeinfo-list-contents">
      <GalleryBoardListItem
        v-for="contentId in attractions"
        :key="contentId"
        :attraction="attraction"
      />
    </div>
  </div>
</template>

<script>
import LocationSelectBox from "@/components/common/LocationSelectBox.vue";
import PlaceInfoNav from "@/components/common/PlaceInfoNav";
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";
import { mapState } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "GalleryBoardList",
  components: {
    LocationSelectBox,
    PlaceInfoNav,
    GalleryBoardListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(attractionStore, ["attractions"]),
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
