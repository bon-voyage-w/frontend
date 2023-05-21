<template>
  <ul class="placeinfo-nav">
    <li>
      <button>관광지</button>
    </li>
    <li>
      <button>숙박</button>
    </li>
    <li>
      <button>음식점</button>
    </li>
    <li>
      <button>여가</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PlaceInfoNav",
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
.placeinfo-nav {
  display: flex;
  width: 80%;
  margin: 60px auto;
  gap: 20px;
  padding: 0;
}

.placeinfo-nav li {
  width: calc(100% / 4);
  text-align: center;
  padding: 8px 0;

  transition: 0.1s ease-in;
  cursor: pointer;

  border-radius: 10px;
}
.placeinfo-nav li:hover {
  background-color: #eabb4d;
  font-weight: bold;
}
</style>
