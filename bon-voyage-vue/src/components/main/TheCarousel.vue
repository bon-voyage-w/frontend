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
        img-src="https://plus.unsplash.com/premium_photo-1682091715689-b6ab529fd9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
      ></b-carousel-slide>
      <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
      ></b-carousel-slide>
      <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1618590393910-0ffae52e90ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
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
<style>
b-carousel-slide {
}
</style>
