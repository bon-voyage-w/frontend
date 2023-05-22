<template>
  <button class="placeinfo-list-item" @click="selectHouse">
    <img src="https://placekitten.com/300/300" alt="" />
    <div class="placeinfo-list-item-text">
      <h3>{{ attraction.title }}</h3>
      <p>{{ attraction.addr1 }}</p>
    </div>
  </button>
</template>

<script>
// import { mapActions } from "vuex";

// const attractionStore = "attractionStore";

export default {
  name: "GalleryBoardListItem",
  props: {
    attraction: Object,
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
