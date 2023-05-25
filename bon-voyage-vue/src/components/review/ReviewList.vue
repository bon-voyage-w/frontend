<template>
  <div class="wrap-review-list">
    <p>리뷰 9개</p>
    <ReviewListItem></ReviewListItem>
    <ReviewListItem></ReviewListItem>
    <ReviewListItem></ReviewListItem>
    <ReviewListItem></ReviewListItem>
    <ReviewListItem></ReviewListItem>
  </div>
</template>

<script>
import ReviewListItem from "./ReviewListItem.vue";

export default {
  name: "ReviewList",
  components: { ReviewListItem },
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
.wrap-review-list {
  width: 800px;
  margin: 0 auto;
}
</style>
