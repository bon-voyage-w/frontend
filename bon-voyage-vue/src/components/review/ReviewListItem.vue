<template>
  <ul>
    <li>
      <div class="wrap-review-top">
        <div class="wrap-review-profile">
          <div class="profile-image">
            <!-- <img
            :src="userInfo.profileImg"
            style="
              width: 50px;
              height: 50px;
              object-fit: contain;
              border-radius: 50%;
            "
            @error="replaceNoImg"
          /> -->
          </div>
          <p>{{ review.writerName }}</p>
        </div>
        <ReviewListItemButton
          :writerLoginId="review.writerLoginId"
          :currentReviewId="review.reviewId"
        />
      </div>
      <div class="wrap-review-bottom">
        <p>{{ review.reviewContent }}</p>
        <p>
          {{ review.writeDate }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import ReviewListItemButton from "@/components/review/ReviewListItemButton.vue";
export default {
  name: "ReviewListItem",
  data() {
    return {
      writerLoginId: "",
      currentReviewId: 0,
    };
  },

  props: {
    review: Object,
  },

  methods: {
    // replaceNoImg(e) {
    //   e.target.src =
    //     "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg";
    // },
  },
  components: { ReviewListItemButton },
};
</script>

<style scoped>
ul li {
  margin-bottom: 40px;
}
.wrap-review-profile {
  display: flex;
  vertical-align: middle;
}
.wrap-review-top {
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.profile-image {
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 50%;
  display: inline-block;
}
.profile-img img {
  object-fit: cover;
  border-radius: 50%;
}
.wrap-review-top p {
  margin: auto 8px;
}
.wrap-review-bottom p {
  margin-left: 60px;
}
</style>
