<template>
  <div class="placeinfo-list">
    <div class="placeinfo-list-contents">
      <GalleryBoardListItem
<<<<<<< HEAD
        v-for="attraction in boardAttractions"
=======
        v-for="attraction in attractions.content"
>>>>>>> 8174f7b9cbe3f3d917ca924898a40c919b31b95c
        :key="attraction.contentId"
        :attraction="attraction"
      />
    </div>
  </div>
</template>

<script>
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";
<<<<<<< HEAD
import http from "@/api/http";
=======
// import http from "@/api/http";
>>>>>>> 8174f7b9cbe3f3d917ca924898a40c919b31b95c
import { mapState, mapActions } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "GalleryBoardList",
  components: {
    GalleryBoardListItem,
  },
  data() {
<<<<<<< HEAD
    return {
      boardAttractions: [],
    };
=======
    return {};
  },

  computed: {
    ...mapState(attractionStore, ["attractions"]),
>>>>>>> 8174f7b9cbe3f3d917ca924898a40c919b31b95c
  },
  computed: {
    ...mapState(attractionStore, ["attractions"]),
  },
  created() {
<<<<<<< HEAD
    http.get(`/attractions`).then(({ data }) => {
      this.boardAttractions = data.content;
    });
=======
    this.getAllAttractionList();
  },
  methods: {
    ...mapActions(attractionStore, ["getAllAttractionList"]),
>>>>>>> 8174f7b9cbe3f3d917ca924898a40c919b31b95c
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
