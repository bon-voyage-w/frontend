<template>
  <div class="placeinfo-nav" @change="searchContentTypeId">
    <li>
      <input
        type="radio"
        value="0"
        id="0"
        v-model="selectedContentType"
        checked
      />
      <label for="0">전체</label>
    </li>
    <li>
      <input type="radio" value="12" id="12" v-model="selectedContentType" />
      <label for="12">관광지</label>
    </li>
    <li>
      <input type="radio" value="32" id="32" v-model="selectedContentType" />
      <label for="32">숙박</label>
    </li>
    <li>
      <input type="radio" value="39" id="39" v-model="selectedContentType" />
      <label for="39">음식점</label>
    </li>
    <li>
      <input type="radio" value="14" id="14" v-model="selectedContentType" />
      <label for="14">여가</label>
    </li>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "PlaceInfoNav",
  components: {},
  data() {
    return {
      selectedContentType: null,
    };
  },
  computed: {
    ...mapState(attractionStore, ["conditions"]),
  },
  methods: {
    ...mapActions(attractionStore, [
      "getAttractionList",
      "getConditionsKeyword",
      "getContentTypeId",
    ]),
    searchContentTypeId() {
      console.log("메소드 호출");
      this.getContentTypeId(this.selectedContentType);
      this.getAttractionList(this.conditions);
    },
  },
};
</script>

<style scoped>
.placeinfo-nav {
  display: flex;
  width: 1000px;
  margin: 60px auto;
  gap: 20px;
  padding: 0;
}

.placeinfo-nav li {
  width: calc(100% / 5);
  text-align: center;
  padding: 8px 0;

  transition: 0.1s ease-in;
  cursor: pointer;

  border-radius: 10px;
}
.placeinfo-nav li:hover {
  background-color: #eabb4d;
  color: white;
  font-weight: bold;
}
.placeinfo-nav input[type="radio"] {
  display: none;
}
.placeinfo-nav li:checked {
  box-shadow: inset 0 0 10px red;
  background-color: #eabb4d;
  color: white;
  font-weight: bold;
}
</style>
