<template>
  <div>
    <button class="my-location" @click="initMarker()">주변 관광지 보기</button>
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
      markers: [],
      latitude: 0,
      longitude: 0,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      // script.src =
      //   commit 전 수정
      script.src = process.env.VUE_APP_KAKAO_URL;
      document.head.appendChild(script);
    }
    this.initMarker();
  },

  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      this.map = new kakao.maps.Map(container, options);
    },
    initMarker() {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

          var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition, message);
        });
      } else {
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
          message = "geolocation을 사용할수 없어요..";
        displayMarker(locPosition, message);
      }
      function displayMarker(locPosition, message) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map,
          position: locPosition,
        });

        var iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(this.map, marker);

        // 지도 중심좌표를 접속위치로 변경합니다
        this.map.setCenter(locPosition);
      }
      // 마커가 표시될 위치입니다

      // 마커를 생성합니다
      // var marker = new kakao.maps.Marker({
      //   position: markerPosition,
      // });

      // 마커가 지도 위에 표시되도록 설정합니다
      // marker.setMap(this.map);
    },
  },
};
</script>

<style scoped>
#map {
  width: 1000px;
  height: 800px;
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
