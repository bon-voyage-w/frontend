<template>
  <div class="location-select-box">
    <b-form-select
      v-model="sidoCode"
      :options="sidos"
      @change="relatedGugunList"
    ></b-form-select>
    <b-form-select
      v-model="gugunCode"
      :options="guguns"
      @change="searchAttraction"
    ></b-form-select>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "LocationSelectBox",
  components: {},
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
    };
  },
  computed: {
    ...mapState(attractionStore, ["sidos", "guguns", "attractions"]),
  },
  created() {
    // empty
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    // state에 시도, 구군 저장
    this.getAllSidoList();
    // this.getAllGugunList();
  },
  methods: {
    ...mapActions(attractionStore, [
      "getAllSidoList",
      // "getAllGugunList",
      "getRelatedGugun",
      "getAttractionList",
    ]),
    ...mapMutations(attractionStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_ATTRACTION_LIST",
    ]),

    relatedGugunList() {
      this.CLEAR_GUGUN_LIST;
      this.gugunCode = null;
      console.log(">>>>>>>>>>>>>> ", this.sidoCode);
      if (this.sidoCode) this.getRelatedGugun(this.sidoCode);
    },
    searchAttraction() {
      if (this.gugunCode) this.getattractionList(this.gugunCode);
    },
  },
};
</script>

<style scoped>
.location-select-box {
  text-align: center;
  margin: 50px 0;
}
</style>
