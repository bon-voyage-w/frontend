<template>
  <div>
    <h2>ssssssss</h2>
    <!-- 좌측 이미지 -->
    <!-- 우측 제목, 주소, 상세설명 -->

    <!-- 하단 리뷰 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
const attractionStore = "attractionStore";

export default {
  name: "AttractionBoardDetail",
  computed: {
    ...mapState(attractionStore, ["attraction"]),
  },
  created() {
    this.getAttractionList();
  },
  methods: {},
};
</script>

<style scoped></style>
