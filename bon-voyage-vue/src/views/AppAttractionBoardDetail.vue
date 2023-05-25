<template>
  <div>
    <AttractionBoardDetail></AttractionBoardDetail>
    <ReviewWriteBox></ReviewWriteBox>
    <ReviewList></ReviewList>
    <ThePageNation></ThePageNation>
  </div>
</template>

<script>
import AttractionBoardDetail from "@/components/attractionBoard/AttractionBoardDetail.vue";
import ReviewWriteBox from "@/components/review/ReviewWriteBox.vue";
import ReviewList from "@/components/review/ReviewList.vue";
import ThePageNation from "@/components/common/ThePageNation.vue";

export default {
  name: "AppAttractionBoardDetail",
  components: {
    AttractionBoardDetail,
    ReviewList,
    ReviewWriteBox,
    ThePageNation,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
