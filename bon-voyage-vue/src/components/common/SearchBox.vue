<template>
  <div class="wrap">
    <form>
      <input type="text" name="search" placeholder="검색어를 입력해주세요." />
    </form>
    <div class="box-search-icon">
      <font-awesome-icon icon="fa-magnifying-glass" style="color: #7d7d7d" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.wrap {
  text-align: center;
  margin: 50px 0;
}
.wrap form {
  display: inline-block;
}
.wrap input {
  width: 400px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px;
}
.box-search-icon {
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 50px;
  padding: 12px 3px;
  /* margin-left: 10px; */
}
</style>
