<template>
  <div>
    <div class="placeinfo-list-title">
      <h2>여행 경로 공유 게시판</h2>
      <p>내가 다녀온 여행 경로를 공유해보세요</p>
    </div>
    <GalleryBoardList></GalleryBoardList>
  </div>
</template>

<script>
import GalleryBoardList from "@/components/common/GalleryBoardList.vue";

export default {
  name: "AppShareBoard",
  components: {
    GalleryBoardList,
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
