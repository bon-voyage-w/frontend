<template>
  <div class="placeinfo-list">
    <div class="placeinfo-list-contents">
      <GalleryBoardListItem
        v-for="attraction in attractions.content"
        :key="attraction.contentId"
        :attraction="attraction"
      />
    </div>
  </div>
</template>

<script>
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";
import { mapState, mapActions } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "GalleryBoardList",
  components: {
    GalleryBoardListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(attractionStore, ["attractions"]),
  },
  created() {
    this.getAllAttractionList();
  },
  methods: {
    ...mapActions(attractionStore, ["getAllAttractionList"]),
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
