<template>
  <div>
    <!-- <div class="placeinfo-list-title">
      <h2>공지사항</h2>
      <p>문의글은 1:1 문의 게시판에 남겨주세요</p>
    </div> -->
    <router-view></router-view>
    <the-page-nation-vue />
  </div>
</template>

<script>
import ThePageNationVue from "@/components/common/ThePageNation.vue";

export default {
  name: "AppNotice",
  components: {
    ThePageNationVue,
  },
};
</script>

<style scoped>
.placeinfo-list-title {
  text-align: center;
  margin: 120px 0 80px 0;
}
</style>
