<template>
  <div class="placeinfo-list">
    <div class="placeinfo-list-title">
      <h2>이 지역은 이 숙소!</h2>
      <p>SNS에서 유명한 펜션부터 5성급 호텔까지 여행은 본보야지에서</p>
    </div>
    <LocationSelectBox />
    <place-info-nav></place-info-nav>

    <div class="placeinfo-list-contents">
      <PlaceInfoListItem />
      <PlaceInfoListItem />
      <PlaceInfoListItem />
      <PlaceInfoListItem />
      <PlaceInfoListItem />
      <PlaceInfoListItem />
    </div>
  </div>
</template>

<script>
import LocationSelectBox from "@/components/common/LocationSelectBox.vue";
import PlaceInfoNav from "@/components/common/PlaceInfoNav";
import PlaceInfoListItem from "@/components/main/PlaceInfoListItem.vue";

export default {
  name: "PlaceInfoList",
  components: {
    LocationSelectBox,
    PlaceInfoNav,
    PlaceInfoListItem,
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.placeinfo-list {
  width: 1000px;
  margin: 140px auto 200px auto;
}
.placeinfo-list-contents {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
}
.placeinfo-list-title {
  text-align: center;
  margin-bottom: 40px;
}
</style>
