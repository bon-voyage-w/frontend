<template>
  <div class="card">
    <h3>{{ attraction.title }}</h3>
    <span class="num">{{ review.reviewContent }}</span>
    <span class="writeDate">{{ review.writeDate.substr(0, 10) }}</span>
  </div>
</template>
<script>
import { attractionDetailByContentId } from "@/api/attraction";

export default {
  data() {
    return {
      attraction: {},
    };
  },
  props: {
    review: Object,
  },
  created() {
    attractionDetailByContentId(
      this.review.contentId,
      ({ data }) => {
        this.attraction = data.attractionInfoDto;
      },
      () => {}
    );
  },
};
</script>
<style>
.card {
  border-radius: 6px;
  border: 1px solid #deebfd;
  box-shadow: 0 3px 10px rgba(62, 85, 120, 0.045);
  margin: 15px 8px 10px;
  position: relative;
  background-color: #5cad8a;
  height: 80px;
  padding: 10px;
  z-index: 0;
}

.card .icon {
  color: rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 38px;
  bottom: 69px;
}

.card .num,
.card h3 {
  position: relative;
  margin: 0;
  padding: 0;
}

.card .num {
  font-size: 15px;
}

.card h3 {
  font-size: 15px;
  font-weight: bold;
}

.writeDate {
  position: absolute;
  right: 10px;
}
</style>
