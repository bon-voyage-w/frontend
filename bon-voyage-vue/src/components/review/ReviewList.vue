<template>
  <div class="wrap-review-list">
    <p>리뷰 n개</p>
    <ReviewListItem
      v-for="review in reviews"
      :key="review.reviewId"
      :reveiw="review"
    />
  </div>
</template>

<script>
import attractionStore from "@/store/modules/attractionStore";
import ReviewListItem from "./ReviewListItem.vue";
import { mapState, mapActions } from "vuex";

const reviewStore = "reviewStore";

export default {
  name: "ReviewList",
  components: { ReviewListItem },
  data() {
    return {};
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttraction"]),
  },
  created() {
    // this.selectedId = this.$route.params.contentId;
    // AttractionDetailByContentId(
    //   // console.log(this.selectedId),
    //   this.selectedId,
    //   ({ data }) => {
    //     this.attractionDetail = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
