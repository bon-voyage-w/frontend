<template>
  <div class="location-select-box">
    <div class="wrap-sido" @click="resetGugunList">
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
      if (this.conditions.sidoCode) this.getRelatedGugun(this.conditions.sidoCode);
    },
    searchAttraction() {
<<<<<<< HEAD
      if (this.gugunCode) this.getAttractionList(this.sidoCode, this.gugunCode);
=======
      if (this.conditions.gugunCode) this.getAttractionList(this.conditions);
    },
    resetGugunList() {
      this.CLEAR_GUGUN_LIST;
      this.gugunCode = null;
>>>>>>> 8174f7b9cbe3f3d917ca924898a40c919b31b95c
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
