<template>
  <div class="wrap-review-list">
    <ReviewListItem
      v-for="(review, index) in reviews"
      :key="index"
      :review="review"
    />
  </div>
</template>

<script>
import ReviewListItem from "@/components/review/ReviewListItem";
import { mapState, mapGetters, mapActions } from "vuex";

const attractionStore = "attractionStore";
const reviewStore = "reviewStore";

export default {
  name: "ReviewList",
  components: { ReviewListItem },
  data() {
    return {};
  },
  computed: {
    ...mapState(reviewStore, ["reviews"]),
    ...mapGetters(attractionStore, {
      contentIdForReview: "getAttractionContentId",
    }),
  },
  created() {
    this.getAttractionReviewList(this.contentIdForReview);
  },
  methods: {
    ...mapActions(reviewStore, ["getAttractionReviewList"]),
  },
};
</script>

<style scoped>
.wrap-review-list {
  width: 800px;
  margin: 0 auto;
}
</style>
