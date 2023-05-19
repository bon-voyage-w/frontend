<template>
  <div>
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

<style scoped></style>
