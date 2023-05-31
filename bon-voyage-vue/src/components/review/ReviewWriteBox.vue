<template>
  <div class="wrap-review-write">
    <form>
      <input v-model="InputReview" type="text" placeholder="리뷰를 써주세요" />
    </form>
    <button class="box-search-btn" @click="registerReview">
      <font-awesome-icon
        :icon="['fas', 'paper-plane']"
        style="color: #eabb4d"
      />
    </button>
  </div>
</template>

<script>
import { writeReview } from "@/api/review";
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";
const attractionStore = "attractionStore";

export default {
  name: "ReviewWriteBox",
  data() {
    return {
      InputReview: "",
      review: {
        reviewContent: "",
        writerName: "",
        writerLoginId: "",
        contentId: "",
      },
    };
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(attractionStore, ["getAttractionContentId"]),
  },
  methods: {
    registerReview() {
      if (this.isLogin) {
        let param = {
          review: {
            reviewContent: this.InputReview,
            writerName: this.userInfo.name,
            writerLoginId: this.userInfo.loginId,
            contentId: this.getAttractionContentId,
          },
        };
        console.log("param ::: ", param);
        writeReview(
          param,
          ({ data }) => {
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("리뷰 ::: 로그인 안 된 상태로 넘어감");
        alert("로그인을 하셔야 리뷰를 작성할 수 있습니다.");
      }
    },
  },
};
</script>

<style scoped>
.wrap-review-write {
  width: 800px;
  text-align: center;
  margin: 0px auto 60px auto;
  padding-top: 40px;
}
.wrap-review-write form {
  display: inline-block;
}
.wrap-review-write input {
  width: 600px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px;
}
.box-search-btn {
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 50px;
  padding: 12px 3px;
  /* margin-left: 10px; */
}
.box-search-btn {
  margin-left: 10px;
}
</style>
