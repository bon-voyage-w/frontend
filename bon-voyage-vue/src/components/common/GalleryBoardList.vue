<template>
  <div class="placeinfo-list">
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
import GalleryBoardListItem from "@/components/common/GalleryBoardListItem.vue";
import http from "@/api/http";

export default {
  name: "GalleryBoardList",
  components: {
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
