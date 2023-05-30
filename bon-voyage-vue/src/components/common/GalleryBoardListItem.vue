<template>
  <button class="placeinfo-list-item">
    <router-link
      :to="{
        name: 'attractiondetail',
        params: { contentId: attraction.contentId },
      }"
    >
      <img :src="attraction.firstImage" alt="" @error="replaceNoImg" />
      <div class="placeinfo-list-item-text">
        <h3>{{ attraction.title }}</h3>
        <p>{{ attraction.addr1 }}</p>
      </div>
    </router-link>
  </button>
</template>

<script>
export default {
  name: "GalleryBoardListItem",
  props: {
    attraction: Object,
  },
  methods: {
    replaceNoImg(e) {
      e.target.src =
        "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg";
      console.log("******** ", this.attraction);
    },
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

  aspect-ratio: 2/1.6;
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
a {
  text-decoration: none;
}
</style>
