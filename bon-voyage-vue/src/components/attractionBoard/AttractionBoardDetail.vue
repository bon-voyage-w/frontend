<template>
  <div>
    <img :src="attractionDetail.attractionInfoDto.firstImage" />

    <h2>{{ attractionDetail.attractionInfoDto.title }}</h2>
    <h5>{{ attractionDetail.attractionInfoDto.addr1 }}</h5>
    <p>
      {{ attractionDetail.overview }}
    </p>
    <hr />

    <!-- 좌측 이미지 -->
    <!-- 우측 제목, 주소, 상세설명 -->

    <!-- 하단 리뷰 -->
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

    console.log(selectedContentId);
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

<style scoped></style>
