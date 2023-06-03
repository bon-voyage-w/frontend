<template>
  <div class="wrap-review-list">
    <ReviewListItem
      v-for="review in reviews"
      :key="review.reviewId"
      :review="review"
    />
  </div>
</template>

<script>
import ReviewListItem from "@/components/review/ReviewListItem";
import { mapGetters } from "vuex";

import { listReview } from "@/api/review";

const attractionStore = "attractionStore";

export default {
  name: "ReviewList",
  components: { ReviewListItem },
  data() {
    return {
      reviews: [],
    };
  },
  props: {
    selectedId: Number,
  },
  computed: {
    ...mapGetters(attractionStore, {
      contentIdForReview: "getAttractionContentId",
    }),
  },
  created() {
    listReview(
      this.selectedId,
      ({ data }) => {
        this.reviews = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style scoped>
.wrap-review-list {
  width: 800px;
  margin: 0 auto;
}
</style>
