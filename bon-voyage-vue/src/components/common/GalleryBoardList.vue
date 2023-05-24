<template>
  <div class="placeinfo-list">
    <div class="placeinfo-list-contents">
      <GalleryBoardListItem
        v-for="attraction in boardAttractions"
        :key="attraction.contentId"
        :attraction="attraction"
      />
    </div>
  </div>
</template>

<script>
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";
import http from "@/api/http";
import { mapState, mapActions } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "GalleryBoardList",
  components: {
    GalleryBoardListItem,
  },
  data() {
    return {
      boardAttractions: [],
    };
  },
  computed: {
    ...mapState(attractionStore, ["attractions"]),
  },
  created() {
    http.get(`/attractions`).then(({ data }) => {
      this.boardAttractions = data.content;
    });
  },
  methods: {
    ...mapActions(attractionStore, ["detailAttraction"]),
    // ...mapMutations(attractionStore, [
    //   "CLEAR_SIDO_LIST",
    //   "CLEAR_GUGUN_LIST",
    //   "CLEAR_ATTRACTION_LIST",
    // ]),

    // relatedGugunList() {
    //   this.CLEAR_GUGUN_LIST;
    //   this.gugunCode = null;
    //   console.log(">>>>>>>>>>>>>> ", this.sidoCode);
    //   if (this.sidoCode) this.getRelatedGugun(this.sidoCode);
    // },
    // searchAttraction() {
    //   if (this.gugunCode) this.getattractionList(this.gugunCode);
    // },
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
