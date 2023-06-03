<template>
  <div>
    <div class="wrap-attraction-detail" v-if="isReady">
      <img
        :src="attractionDetail.attractionInfoDto.firstImage"
        @error="replaceNoImg"
      />
      <div class="wrap-attraction-detail-text">
        <button
          v-if="!isLike"
          id="like"
          class="btn-like"
          @click.prevent="dolike"
        >
          <font-awesome-icon
            :icon="['far', 'heart']"
            size="2xl"
            style="color: #696969"
          />
        </button>
        <button
          v-if="isLike"
          id="like"
          class="btn-like"
          @click.prevent="unlike"
        >
          <font-awesome-icon
            :icon="['far', 'heart']"
            size="2xl"
            style="color: deeppink"
          />
        </button>
        <h2>{{ attractionDetail.attractionInfoDto.title }}</h2>

        <h5>{{ attractionDetail.attractionInfoDto.addr1 }}</h5>

        <p>
          {{ attractionDetail.overview }}
        </p>
      </div>
    </div>
    <ReviewWriteBox />
    <ReviewList :selectedId="selectedId" />
  </div>
</template>

<script>
import ReviewWriteBox from "../review/ReviewWriteBox.vue";
import ReviewList from "../review/ReviewList.vue";
import { mapState, mapActions } from "vuex";
import { like, dislike } from "@/api/user";

const attractionStore = "attractionStore";

export default {
  name: "AttractionBoardDetail",
  components: {
    ReviewWriteBox,
    ReviewList,
  },
  data() {
    return {
      attractionDetail: [],
      isLike: false,
      selectedId: 0,
      isReady: false,
      isContentIdReady: false,
    };
  },
  watch: {
    selectedAttractionInfo() {
      console.log("watch ::: attraction 상세정보 렌더링 문제 해결 목적");
      this.attractionDetail = this.selectedAttractionInfo;
      this.isReady = true;
      this.isContentIdReady = true;
    },
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttractionInfo"]),
  },
  created() {
    this.selectedId = this.$route.params.contentId;
    this.selectAttraction(this.selectedId);
    this.attractionDetail = this.selectedAttractionInfo;
    console.log("created ::: 222 ::: selAttInfo", this.selectedAttractionInfo);
  },
  methods: {
    ...mapActions(attractionStore, ["selectAttraction"]),

    dolike() {
      like(
        this.selectedId,
        ({ data }) => {
          this.isLike = true;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    unlike() {
      dislike(
        this.selectedId,
        ({ data }) => {
          this.isLike = false;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    replaceNoImg(e) {
      e.target.src =
        "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg";
    },
  },
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
