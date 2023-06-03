<template>
  <div class="wrap-review-btns">
    <button
      class="btn-for-review"
      id="btn-review-modify"
      @click="startModifyReview"
    >
      수정
    </button>
    <button class="btn-for-review" id="btn-review-delete" @click="deleteReview">
      삭제
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteReview } from "@/api/review";

const userStore = "userStore";

export default {
  name: "ReviewListItemButton",
  //   data() {
  //     return {};
  //   },
  props: {
    writerLoginId: String,
    currentReviewId: Number,
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  methods: {
    startModifyReview() {
      if (this.isLogin) {
        if (this.userInfo.loginId === this.writerLoginId) {
          alert("수정하시겠습니까?");
        } else {
          alert("작성자만 수정할 수 있습니다.");
        }
      } else {
        alert("로그인 후 이용해주세요.");
      }
    },
    deleteReview() {
      if (this.isLogin) {
        if (this.userInfo.loginId === this.writerLoginId) {
          if (confirm("정말로 삭제하시겠습니까?")) {
            deleteReview(
              this.currentReviewId,
              ({ data }) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
            alert("삭제되었습니다.");
            this.$router.go(this.$router.currentRoute);
          }
        } else {
          alert("작성자만 삭제할 수 있습니다.");
        }
      } else {
        alert("로그인 후 이용해주세요.");
      }
    },

    // registerReview() {
    //   if (this.isLogin) {
    //     let param = {
    //       reviewContent: this.InputReview,
    //       writerName: this.userInfo.name,
    //       writerLoginId: this.userInfo.loginId,
    //       contentId: this.getAttractionContentId,
    //     };
    //     console.log("param ::: ", param);
    //     writeReview(
    //       param,
    //       ({ data }) => {
    //         console.log(data);
    //         this.$router.go(this.$router.currentRoute);
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    //   } else {
    //     alert("로그인을 하셔야 리뷰를 작성할 수 있습니다.");
    //   }
    // },
  },
};
</script>

<style scoped>
.btn-for-review {
  width: 50px;
}
</style>
