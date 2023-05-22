<template>
  <div class="wrap-map">
    <button class="my-location" @click="currentLocation()">
      주변 관광지 보기
    </button>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "TheMap",
  components: {},
  data() {
    return {
      map: null,
      positions: [],
      markers: [],
    };
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
    // api 불러오기
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=" +
        // process.env.VUE_APP_KAKAO_MAP_API_KEY +
        "de06e60175b275d88bbc9d4797d1704b" +
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

      this.markers = [];
      this.positions.forEach((position) => {
        const marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: position.latlng, // 마커를 표시할 위치
          title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
        this.markers.push(marker);
      });
      console.log("마커수 ::: " + this.markers.length);

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
  },
};
</script>

<style scoped>
.wrap-map {
  position: relative;

  width: 800px;
  margin: 50px auto;
}
#map {
  width: 100%;
  height: 500px;
  border-radius: 10px;
}

.my-location {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;

  width: 160px;
  padding: 10px 0;

  background-color: #eabb4d;
  border-radius: 10px;

  color: white;
  transition: 0.1s ease-in;
  /* margin: 5px auto; */
  border-radius: 10px;
  margin-left: 1000px;
}
.my-location:hover {
  background-color: #4b548b;
  font-weight: bold;
}
</style>
