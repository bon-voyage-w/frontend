<template>
  <div class="location-select-box">
    <div class="wrap-sido" @click="resetGugunList">
      <b-form-select
        v-model="loc.sidoCode"
        :options="sidos"
        @change="relatedGugunList"
      ></b-form-select>
    </div>
    <b-form-select
      v-model="loc.gugunCode"
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
      loc: {
        sidoCode: null,
        gugunCode: null,
      },
    };
  },
  computed: {
    ...mapState(attractionStore, ["sidos", "guguns", "attractions", "selectedLocation"]),
  },
  created() {
    // empty
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    // state에 시도 저장
    this.getAllSidoList();
  },
  methods: {
    ...mapActions(attractionStore, ["getAllSidoList", "getRelatedGugun", "getAttractionList"]),
    ...mapMutations(attractionStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_ATTRACTION_LIST",
      "SELECT_LOCATION",
    ]),

    relatedGugunList() {
      this.SELECT_LOCATION;
      this.CLEAR_GUGUN_LIST;
      this.gugunCode = null;
      if (this.loc.sidoCode) this.getRelatedGugun(this.loc.sidoCode);
    },
    searchAttraction() {
      if (this.loc.gugunCode) this.getAttractionList(this.loc);
    },
    resetGugunList() {
      this.CLEAR_GUGUN_LIST;
      this.gugunCode = null;
    },
  },
};
</script>

<style scoped>
.location-select-box {
  text-align: center;
  margin: 50px 0;
}
.wrap-sido {
  display: inline-block;
}
</style>
