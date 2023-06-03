<template>
  <div class="wrap-review-btns">
    <button class="btn-for-review" id="btn-review-modify">수정</button>
    <button class="btn-for-review" id="btn-review-delete">삭제</button>
  </div>
</template>

<script>
export default {
  name: "ReviewListItemButton",
  data() {
    return {
      message: "",
    };
  },

  methods: {},
};
</script>

<style scoped>
.btn-for-review {
  width: 50px;
}
</style>
