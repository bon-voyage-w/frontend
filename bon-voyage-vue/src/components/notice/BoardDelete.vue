<template>
  <div class="board-write">
    <div class="placeinfo-list-title">
      <h2>공지사항</h2>
      <p>글수정</p>
    </div>
    <b-form-input id="input-default" placeholder="제목을 입력하세요."></b-form-input>

    <b-form-textarea
      class="board-textarea"
      id="textarea"
      v-model="text"
      placeholder="글을 입력하세요."
      rows="20"
      max-rows="6"
    ></b-form-textarea>

    <button class="board-modify-btn" variant="outline-primary" @click="deleteBoard">삭제</button>
    <button class="board-list-btn" variant="outline-primary" @click="moveList">목록</button>
  </div>
</template>

<script>
export default {
  name: "BoardDelete",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
.board-write {
  max-width: 80%;
  margin: 20px auto;
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
</style>
