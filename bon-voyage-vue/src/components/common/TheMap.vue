<template>
  <div id="map"></div>
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
      this.initMarker();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);

      script.src = process.env.VUE_APP_KAKAO_URL;
      document.head.appendChild(script);
    }
  },
  created() {},
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
      // 마커가 표시될 위치입니다
      var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map);
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
</style>
