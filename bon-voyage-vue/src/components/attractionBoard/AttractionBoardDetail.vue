<template>
  <div>
    <div class="wrap-attraction-detail">
      <img :src="attractionDetail.attractionInfoDto.firstImage" />
      <div class="wrap-attraction-detail-text">
        <button id="like" class="btn-like">
          <font-awesome-icon
            :icon="['far', 'heart']"
            size="2xl"
            style="color: #696969"
          />
        </button>
        <h2>{{ attractionDetail.attractionInfoDto.title }}</h2>

        <h5>{{ attractionDetail.attractionInfoDto.addr1 }}</h5>

        <p>
          {{ attractionDetail.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { AttractionDetailByContentId } from "@/api/attraction";

export default {
  name: "AttractionBoardDetail",
  data() {
    return {
      attractionDetail: {},
    };
  },

  created() {
    let selectedContentId = this.$route.params.contentId;

    AttractionDetailByContentId(
      selectedContentId,
      ({ data }) => {
        this.attractionDetail = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {},
};
</script>

<style scoped>
.wrap-attraction-detail {
  display: flex;
  gap: 30px;
  width: 1000px;
  margin: 150px auto 0 auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 120px;
}
.wrap-attraction-detail img {
  width: 450px;
  height: 500px;
  object-fit: cover;
}
.wrap-attraction-detail-text {
  padding-left: 0px;
}
.wrap-attraction-detail-text h2 {
  margin-bottom: 20px;
}
.wrap-attraction-detail-text h5 {
  margin-bottom: 30px;
}
.wrap-attraction-detail-text p {
  line-height: 1.8em;
  text-align: justify;
}
.btn-like {
  float: right;
}
</style>
