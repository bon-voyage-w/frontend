<template>
  <div class="wrap-search-box">
    <form>
      <input
        v-model="inputKeyword"
        type="text"
        placeholder="검색어를 입력해주세요."
      />
    </form>
    <button class="box-search-btn" @click="searchKeyword">
      <font-awesome-icon icon="fa-magnifying-glass" style="color: #7d7d7d" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "SearchBox",
  components: {},
  data() {
    return {
      inputKeyword: null,
    };
  },
  computed: {
    ...mapState(attractionStore, ["conditions"]),
  },
  methods: {
    ...mapActions(attractionStore, [
      "getAllAttractionList",
      "getConditionsKeyword",
    ]),

    searchKeyword() {
      if (this.inputKeyword != null) {
        this.getConditionsKeyword(this.inputKeyword);
      }
      this.getAllAttractionList();
    },
  },
};
</script>

<style scoped>
.wrap-search-box {
  text-align: center;
  margin: 50px 0;
}
.wrap-search-box form {
  display: inline-block;
}
.wrap-search-box input {
  width: 400px;
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
</style>
