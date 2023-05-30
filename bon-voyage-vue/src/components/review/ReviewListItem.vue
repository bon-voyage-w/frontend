<template>
  <ul>
    <li>
      <div class="review-id">
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
      <p>{{ review.reviewContent }}</p>
      <p>
        {{ review.writeDate }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ReviewListItem",
  props: {
    review: Object,
  },
  methods: {
    // replaceNoImg(e) {
    //   e.target.src =
    //     "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg";
    // },
  },
};
</script>

<style scoped>
ul li {
  margin-bottom: 40px;
}
.review-id {
  margin-bottom: 10px;
  align-items: center;
  display: flex;
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
.review-id p {
  margin: 0 0 0 8px;
}
</style>
