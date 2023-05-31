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
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { mapGetters } from "vuex";

import { listReview } from "@/api/review";

const attractionStore = "attractionStore";
// const reviewStore = "reviewStore";

export default {
  name: "ReviewList",
  components: { ReviewListItem },
  data() {
    return {
      reviews: [],
    };
  },

  computed: {
    // ...mapState(reviewStore, ["reviews"]),
    ...mapGetters(attractionStore, {
      contentIdForReview: "getAttractionContentId",
    }),
  },
  watch: {
    contentIdForReview() {
      console.log("watch ::: contentId", this.contentIdForReview);
      listReview(
        this.contentIdForReview,
        ({ data }) => {
          this.reviews = data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  created() {
    console.log(
      ">>>>> created ::: 111111 ::: contentId",
      this.contentIdForReview
    );

    // listReview(
    //   this.contentIdForReview,
    //   ({ data }) => {
    //     this.reviews = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  },
  methods: {
    // ...mapMutations(reviewStore, ["CLEAR_REVIEW_LIST"]),
    // ...mapActions(reviewStore, ["getAttractionReviewList"]),
  },
};
</script>

<style scoped>
.wrap-review-list {
  width: 800px;
  margin: 0 auto;
}
</style>
