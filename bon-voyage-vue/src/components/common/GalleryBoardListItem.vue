<template>
  <button class="placeinfo-list-item">
    <img src="https://placekitten.com/300/300" alt="" />
    <div class="placeinfo-list-item-text">
      <h3>국립 청태산자연휴양림</h3>
      <p>강원도 횡성군 둔내면 청태산로 610</p>
    </div>
  </button>
</template>

<script>
export default {
  name: "PlaceInfoListItem",
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.placeinfo-list-item {
  text-align: initial;
  border-radius: 10px;
  width: calc((100% - 60px) / 3);
  overflow: hidden;
  box-shadow: 0 0 8px #dbdbdb;
}
.placeinfo-list-item img {
  width: 100%;
  /* aspect-ratio: 1; */
  object-fit: cover;
  margin-bottom: 10px;
}

.placeinfo-list-item-text {
  margin: 10px;
}
.placeinfo-list-item-text h3 {
  font-size: 1.2em;
  color: #222;
}
.placeinfo-list-item-text p {
  color: #656b72;
  font-size: 0.8em;
}
</style>
