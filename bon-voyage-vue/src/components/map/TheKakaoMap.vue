<template>
  <div class="wrap-kakao-map">
    <button class="btn my-location" @click="currentLocation()">
      현재 위치
    </button>
    <button
      class="btn my-location"
      @click="currentLocation()"
      style="margin-top: 80px"
    >
      경로 저장
    </button>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const routeStore = "routeStore";
// const attractionStore = "attractionStore";
export default {
  name: "TheKakaoMap",
  components: {},
  data() {
    return {
      map: null,
      positions: [],
      markers: [],
    };
  },
  computed: {
    // ...mapState(attractionStore, ["attractions"]),
    ...mapState(routeStore, ["routeMarkers", "markerInterest"]),
  },
  watch: {
    routeMarkers: "loadMarker",
    markerInterest: "loadMarker",
    // attractions() {
    //   console.log(">>>>>>>>>>>>> 관광지 ::: ", this.attractions.content);
    //   this.positions = [];
    //   this.attractions.content.forEach((attraction) => {
    //     let obj = {};
    //     obj.title = attraction.title;
    //     obj.latlng = new kakao.maps.LatLng(
    //       attraction.latitude,
    //       attraction.longitude
    //     );
    //
    //     this.positions.push(obj);
    //     console.log("@@@@@@@@@@@@@ maker에 넣는 obj " + obj);
    //   });
    //   this.loadMaker();
    // },
  },
  mounted() {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },

  methods: {
    // 주변 탐색
    searchNearPlaces() {},

    // api 불러오기
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=" +
        process.env.VUE_APP_KAKAO_MAP_API_KEY +
        "&autoload=false";
      /* global kakao */
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      this.map = new window.kakao.maps.Map(container, options);
      // this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      this.deleteMarker();
      this.positions = [];
      this.routeMarkers.forEach((attraction) => {
        let obj = {};
        obj.title = attraction.title;
        obj.latlng = new kakao.maps.LatLng(
          attraction.latitude,
          attraction.longitude
        );
      });

      this.markers = [];

      // 마커 이미지 설정
      var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      // markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

      // positons
      this.positions.forEach((position) => {
        const marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: position.latlng, // 마커를 표시할 위치
          // title: position.title,
          image: markerImage,
        });
        this.markers.push(marker);
      });
      console.log(this.markerInterest);
      console.log(this.markerInterest.latitude);
      this.markers.push(
        new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(
            this.markerInterest.latitude,
            this.markerInterest.longitude
          ), // 마커를 표시할 위치
          title: this.markerInterest.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        })
      );
      // 4. 지도를 이동시켜주기
      // 배열.reduce( (누적값, 현재값, 인덱스, 요소)=>{ return 결과값}, 초기값);
      const bounds = this.positions.reduce(
        (bounds, position) => bounds.extend(position.latlng),
        new kakao.maps.LatLngBounds()
      );

      this.map.setBounds(bounds);
    },
    deleteMarker() {
      // console.log("마커 싹 지우자!!!", this.markers.length);
      if (this.markers.length > 0) {
        this.markers.forEach((item) => {
          console.log(item);
          item.setMap(null);
        });
      }
    },
    currentLocation() {
      var tmpMap = this.map;

      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

          var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

          // 마커와 인포윈도우를 표시합니다
          new kakao.maps.Marker({
            map: tmpMap,
            position: locPosition,
          });

          // 지도 중심좌표를 접속위치로 변경합니다
          tmpMap.setCenter(locPosition);
        });
      }
    },
  },
};
</script>

<style scoped>
.wrap-kakao-map {
  width: 100%;
  height: 100%;
}

#map {
  width: 100%;
  height: 100%;
  margin-top: -60px;
  z-index: -1;
}

.btn {
  top: 80px;

  width: 140px;
  padding: 10px 0;

  background-color: #ffffff;
  border-radius: 10px;

  color: rgb(0, 0, 0);
  transition: 0.1s ease-in;
  /* margin: 5px auto; */
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px #a8a8a8;
}

.btn:hover {
  background-color: #eabb4d;
  font-weight: bold;
  color: white;
}

.my-location {
  position: absolute;
  right: 10px;
  margin-top: 7px;
}

.btn-open-side-bar {
  position: absolute;
  left: 10px;

  margin-right: 1000px;
}
</style>
