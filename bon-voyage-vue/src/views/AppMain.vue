<template>
  <div>
    <the-carousel></the-carousel>
    <place-info-list></place-info-list>
  </div>
</template>

<script>
import TheCarousel from "@/components/main/TheCarousel";
import PlaceInfoList from "@/components/main/PlaceInfoList";
export default {
  name: "AppMain",
  components: {
    TheCarousel,
    PlaceInfoList,
  },
};
</script>

<style scoped></style>
