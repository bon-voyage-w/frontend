<template>
  <div>
    <ul class="notice-pagenation">
      <li>이전</li>
      <li class="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>다음</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThePageNation",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.notice-pagenation {
  display: flex;
  max-width: 600px;
  margin: 40px auto;
  /* box-shadow: inset 0 0 10px red; */
}
.notice-pagenation li {
  width: calc(100% - 88px / 12);
  padding: 4px 0;
  text-align: center;
  /* box-shadow: inset 0 0 4px blue; */
  cursor: pointer;
}
.notice-pagenation li:not(:last-child) {
  margin-right: 8px;
}
.notice-pagenation li.active {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #0d6efd;
  font-weight: bold;
}
.notice-pagenation li:not(.active):hover {
  background-color: rgba(150, 165, 212, 0.2);
  border-radius: 4px;
}
</style>
