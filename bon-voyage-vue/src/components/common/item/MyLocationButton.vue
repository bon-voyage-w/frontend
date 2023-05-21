<template>
  <div class="wrap-my-location-button">
    <button class="my-location">주변 관광지 보기</button>
  </div>
</template>

<script>
export default {
  name: "MyLocationButton",
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
.wrap-my-location-button {
  width: 1000px;
  margin: 0 auto;
}

.my-location {
  background-color: #eabb4d;
  border-radius: 10px;
  padding: 15px;
  color: white;
  transition: 0.1s ease-in;
  margin: 5px auto;
  border-radius: 10px;
}
.my-location:hover {
  background-color: #eabb4d;
  font-weight: bold;
}
</style>
