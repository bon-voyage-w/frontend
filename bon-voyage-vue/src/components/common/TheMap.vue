<template>
  <div>
    <button class="my-location" @click="currentLocation()">주변 관광지 보기</button>
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
    // Btn MyLocation 현재 위치 가져오기
    currentLocation() {
      // if (navigator.geolocation) {
      //   // var positionArr = [];
      //   var m = this.map;
      //   navigator.geolocation.getCurrentPosition(function (position) {
      //     var lat = position.coords.latitude,
      //       lng = position.coords.longitude,
      //       markerPosition = kakao.maps.LatLng(lat, lng);

      //     var marker = new kakao.maps.Marker({
      //       // map: m,
      //       position: markerPosition,
      //     });
      //     // positionArr.push(obj);
      //     // console.log("111111111111 >:::: ", positionArr.length);
      //     console.log(marker, lat, lng, m);
      //     marker.setMap(m);
      //   });
      //   // this.positions = positionArr;
      //   // console.log("2222222222 >:::: ", this.positions.length);
      //   // this.loadMaker();
      // }
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        var locPosition;
        navigator.geolocation.watchPosition(function (position) {
          var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
          locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          //   // 마커와 인포윈도우를 표시합니다
          //   this.displayMarker(locPosition);
          // console.log(position.coords.latitude);
          // console.log(position.coords.longitude);
        });
        this.displayMarker(locPosition);
      }
    },

    // 마커를 생성합니다
    displayMarker(locPosition) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: locPosition,
        // image : posmarkerImage
      });
      marker.setMap(this.map);
    },
  },
};
</script>

<style scoped>
#map {
  width: 800px;
  height: 500px;
  margin: 50px auto;
  border-radius: 10px;
}

.my-location {
  width: 200px;
  height: 60px;
  background-color: #eabb4d;
  border-radius: 10px;
  padding: 15px;
  color: white;
  transition: 0.1s ease-in;
  /* margin: 5px auto; */
  border-radius: 10px;
  margin-left: 1000px;
}
.my-location:hover {
  background-color: #eabb4d;
  font-weight: bold;
}
</style>
