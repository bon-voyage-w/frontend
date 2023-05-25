<template>
  <div class="location-select-box">
    <div class="wrap-sido" @click="clearGugunSelectList">
      <b-form-select
        v-model="conditions.sidoCode"
        :options="sidos"
        @change="relatedGugunList"
      ></b-form-select>
    </div>
    <b-form-select
      v-model="conditions.gugunCode"
      :options="guguns"
      @change="searchAttraction"
    ></b-form-select>
    <!-- <b-form-select v-model="conditions.gugunCode" @change="searchAttraction">
      <option v-for="(gugun, index) in guguns" :key="index" :value="gugun">
        {{ gugun }}
      </option>
    </b-form-select> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "LocationSelectBox",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(attractionStore, [
      "sidos",
      "guguns",
      "attractions",
      "selectedLocation",
      "conditions",
    ]),
  },
  // watch: {
  //   guguns() {
  //     return this.guguns;
  //   },
  // },
  created() {
    // empty
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_CONDITIONS();
    // state에 시도 저장
    this.getAllSidoList();
    // this.conditions = [];
  },
  methods: {
    ...mapActions(attractionStore, [
      "getAllSidoList",
      "getRelatedGugun",
      "getAttractionList",
    ]),
    ...mapMutations(attractionStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_ATTRACTION_LIST",
      "CLEAR_CONDITIONS",
    ]),
    relatedGugunList() {
      this.CLEAR_GUGUN_LIST;
      this.conditions.gugunCode = null;
      // this.gugunCode = null;
      if (this.conditions.sidoCode)
        this.getRelatedGugun(this.conditions.sidoCode);
    },
    searchAttraction() {
      if (this.conditions.gugunCode) this.getAttractionList(this.conditions);
    },
    clearGugunSelectList() {
      console.log("제발 구군리스트 리셋돼라.....제발.....");
      this.CLEAR_GUGUN_LIST;
      this.conditions.gugunCode = null;
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
