<template>
  <div>
    <b-carousel
      id="carousel-fade"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=54"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "TheCarousel",
  data() {
    return {};
  },
};
</script>
