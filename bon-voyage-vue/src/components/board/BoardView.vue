<template>
  <div class="board-write">
    <div class="placeinfo-list-title">
      <h2>공지사항</h2>
      <p>글쓰기</p>
    </div>
    <b-form-input id="input-default" v-model="article.title" disabled></b-form-input>

    <b-form-textarea
        class="board-textarea"
        id="textarea"
        v-model="article.content"
        disabled
    ></b-form-textarea>
  </div>
</template>

<script>
import {apiInstance} from "@/api/index"
export default {
  name: "BoardWrite",
  data() {
    return {
      article: {
        articleId: 0,
        userid: "admin",
        title: "",
        content: "",
      },
      isUserid: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
  created() {
    this.selectedId = this.$route.params.noticeId;
    apiInstance().get(`/notices/${this.selectedId}`).then(
        ({ data }) => {
          this.article = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        });
  }
};
</script>

<style>
.board-write {
  width: 1000px;
  margin: 50px auto;
}
.board-write h2 {
  text-align: center;
}
.board-write .board-textarea {
  margin: 10px 0;
}
.board-write .board-write-btn {
  float: right;
}
.placeinfo-list-title {
  text-align: center;
  margin: 120px 0 80px 0;
}
</style>
