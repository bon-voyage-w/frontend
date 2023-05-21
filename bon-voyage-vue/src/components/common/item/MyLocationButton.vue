<template>
  <button class="my-location">주변 관광지 보기</button>
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
.my-location {
  background-color: #eabb4d;
  border-radius: 10px;
  padding: 15px;
  color: white;
  transition: 0.1s ease-in;
  position: absolute;
  right: 0;
}
.my-location:hover {
  background-color: #eabb4d;
  font-weight: bold;
}
</style>
