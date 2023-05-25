<template>
  <ul>
    <li>
      <div class="review-id">
        <div class="profile-image">
          <img :src="userInfo.profileImg" style="width:50px; height: 50px; object-fit: contain;  border-radius: 50%;">
        </div>
        <p>김싸피</p>
      </div>
      <p>
        뭐 한번쯤은 가보기 괜찮은 곳 같아요~!
      </p>
    </li>
  </ul>
</template>

<script>
import {mapState} from "vuex";
const userStore = "userStore";
export default {
  name: "ReviewListItem",
  computed :{
    ...mapState(userStore, ["userInfo"]),
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
