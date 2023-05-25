<template>
  <div class="board-write">
    <div class="placeinfo-list-title">
      <h2>공지사항</h2>
      <p>글쓰기</p>
    </div>
    <b-form-input id="input-default" placeholder="제목을 입력하세요."></b-form-input>

    <b-form-textarea
      class="board-textarea"
      id="textarea"
      v-model="article.content"
      placeholder="글을 입력하세요."
      rows="20"
      max-rows="6"
      @submit.prevent="handleSubmit"
      required
    ></b-form-textarea>

    <b-button class="board-write-btn" variant="outline-primary">등록</b-button>
  </div>
</template>

<script>
export default {
  name: "BoardWrite",
  data() {
    return {
      article: {
        articleno: 0,
        userid: "admin",
        subject: "",
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
