<template>
  <div>
    <AttractionBoardDetail></AttractionBoardDetail>
    <ReviewWriteBox></ReviewWriteBox>
    <ReviewList></ReviewList>
  </div>
</template>

<script>
import AttractionBoardDetail from "@/components/attractionBoard/AttractionBoardDetail.vue";
import ReviewWriteBox from "@/components/review/ReviewWriteBox.vue";
import ReviewList from "@/components/review/ReviewList.vue";

export default {
  name: "AppAttractionDetail",
  components: {
    AttractionBoardDetail,
    ReviewWriteBox,
    ReviewList,
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
