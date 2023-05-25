<template>
  <div>
    <b-button v-b-toggle.sidebar-1 class="btn-open-sidebar" style="margin-left: 20px;  top: 80px;
  width: 140px;
  padding: 10px 4px;
margin-top: 10px"
      >경로 찾기</b-button>
    <b-sidebar id="sidebar-1" title="장소 찾기" shadow>
      <div class="px-3 py-2">
        <SearchBox style="padding: 0px"></SearchBox>
      <b-card-group deck style="margin-top: -20px;">
<!--        <h4>검색 결과</h4>-->
        <b-card header="검색 결과">
          <b-list-group>
            <b-list-group-item button="button" @click.prevent="viewMarker(attraction)"
            v-for="attraction in attractions.content" :key="attraction.contentId" :attraction="attraction"
            >{{attraction.title}}</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
      </div>
      <button @click.prevent="addMarker()">경로에 담기</button>
    </b-sidebar>
  </div>
</template>

<script>
import SearchBox from "../common/SearchBox.vue";
import { mapState,mapActions } from "vuex";
const routeStore ="routeStore";
const attractionStore = "attractionStore";

export default {
  name: "MapSideBar",
  components: {
    SearchBox,
  },
  data() {
    return {
      message: "",
      attraction:"",
      selectedAttraction:null,
    };
  },
  computed:{
    ...mapState(attractionStore, ["attractions"]),
  },
  created() {
    const script = document.createElement("script");
    script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=" +
        process.env.VUE_APP_KAKAO_MAP_API_KEY +
        "&autoload=false";
    /* global kakao */
    script.onload = () => window.kakao.maps.load();
    document.head.appendChild(script);
    console.log("끝?");
    this.clearAllCondition();

  },
  methods: {
    ...mapActions(routeStore,["putNewMarkerToRouteMarker","setMarkerInterest"]),
    ...mapActions(attractionStore,["clearAllCondition"]),
    viewMarker(attraction){
      this.selectedAttraction=attraction;
      console.log(attraction.latitude);
      this.setMarkerInterest(attraction);
    },
    addMarker(){
      let obj = {};
      obj.title = this.selectedAttraction.title;
      obj.latlng = new kakao.maps.LatLng(
          this.selectedAttraction.latitude,
          this.selectedAttraction.longitude
      );
      this.putNewMarkerToRouteMarker(obj);
    }
  },

//   watch : {
//     attractions () {
//       console.log(this.attractions);
// }
//   }

};
</script>

<style scoped>
.btn-open-sidebar {
}
</style>
