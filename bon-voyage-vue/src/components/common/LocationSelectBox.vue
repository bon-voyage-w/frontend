<template>
  <div class="location-select-box">
    <b-dropdown id="dropdown-1" variant="light" text="---------- 시 ---------">
      <b-dropdown-item>서울</b-dropdown-item>
      <b-dropdown-item>인천</b-dropdown-item>
      <b-dropdown-item>대전</b-dropdown-item>
      <b-dropdown-item>대구</b-dropdown-item>
      <b-dropdown-item>광주</b-dropdown-item>
      <b-dropdown-item>부산</b-dropdown-item>
      <b-dropdown-item>울산</b-dropdown-item>
      <b-dropdown-item>세종특별자치시</b-dropdown-item>
      <b-dropdown-item>경기도</b-dropdown-item>
      <b-dropdown-item>강원도</b-dropdown-item>
      <b-dropdown-item>충청북도</b-dropdown-item>
      <b-dropdown-item>충청남도</b-dropdown-item>
      <b-dropdown-item>경상북도</b-dropdown-item>
      <b-dropdown-item>경상남도</b-dropdown-item>
      <b-dropdown-item>전라북도</b-dropdown-item>
      <b-dropdown-item>전라남도</b-dropdown-item>
      <b-dropdown-item>제주도</b-dropdown-item>
    </b-dropdown>

    <div>
      <b-dropdown
        id="dropdown-2"
        variant="light"
        text="---------- 도 ---------"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationSelectBox",
  components: {},
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.location-select-box {
  margin-bottom: 60px;

  display: flex;
  justify-content: space-around;

  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
