<template>
  <div>
    <div class="wrap-attraction-detail">
      <img :src="selectedAttractionInfo.attractionInfoDto.firstImage" />
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
        <h2>{{ selectedAttractionInfo.attractionInfoDto.title }}</h2>

        <h5>{{ selectedAttractionInfo.attractionInfoDto.addr1 }}</h5>

        <p>
          {{ selectedAttractionInfo.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { AttractionDetailByContentId } from "@/api/attraction";
import { mapState, mapActions } from "vuex";
import { like, dislike } from "@/api/user";

const attractionStore = "attractionStore";

export default {
  name: "AttractionBoardDetail",
  data() {
    return {
      attractionDetail: {},
      isLike: false,
      selectedId: "",
    };
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttractionInfo"]),
  },
  created() {
    // attraction
    this.selectedId = this.$route.params.contentId;
    // AttractionDetailByContentId(
    //   // console.log(this.selectedId),
    //   this.selectedId,
    //   ({ data }) => {
    //     this.attractionDetail = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.selectAttraction(this.selectedId);
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
