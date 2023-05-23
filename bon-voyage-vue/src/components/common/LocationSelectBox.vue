<template>
  <div class="location-select-box">
    <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
    <b-form-select v-model="gugunCode" :options="guguns" @change="searchAttraction"></b-form-select>
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
    this.getAllLocation();
    this.getSido();
  },
  methods: {
    ...mapActions(attractionStore, ["getAllLocation", "getSido", "getGugun", "getAttractionList"]),
    ...mapMutations(attractionStore, [
      // "CLEAR_SIDO_LIST",
      // "CLEAR_GUGUN_LIST",
      "CLEAR_ATTRACTION_LIST",
    ]),
    // sidoList() {
    //   this.getSido();
    // },
    gugunList() {
      console.log(this.sidoCode);
      // this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
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
