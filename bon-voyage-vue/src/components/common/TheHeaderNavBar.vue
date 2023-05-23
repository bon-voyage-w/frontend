<template>
  <header>
    <ul class="nav-bar-menu">
      <li>
        <router-link :to="{ name: 'main' }">
          <img class="main-logo" src="@/assets/img/logo_new.png" alt="로고이미지" />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'attraction' }">관광지</router-link>
        <router-link :to="{ name: 'share-board' }">공유게시판</router-link>
        <router-link :to="{ name: 'notice' }">공지사항</router-link>
      </li>

      <li v-if="userInfo">
        <router-link :to="{ name: 'login' }">마이페이지</router-link>
        <router-link :to="{ name: 'main' }"><button @click.prevent="onClickLogout">로그아웃</button></router-link>
      </li>
      <li v-else>
        <router-link :to="{ name: 'login' }">로그인</router-link>
        <router-link :to="{ name: 'main' }">회원가입</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapState,mapGetters,mapActions} from "vuex";
const memberStore = "memberStore";

export default {
  name: "TheHeaderNavBar",
  components: {},
  data() {
    return {};
  },
  created() {
    this.getUserInfo();
   },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userLogout","getUserInfo"]),
    onClickLogout() {
      // this.SET_IS_LOGIN(false);
      // this.SET_USER_INFO(null);
      // sessionStorage.removeItem("access-token");
      // if (this.$route.path != "/") this.$router.push({ name: "main" });
      console.log(this.userInfo.userid);
      //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
      //+ satate에 isLogin, userInfo 정보 변경)
      // this.$store.dispatch("userLogout", this.userInfo.userid);
      this.userLogout();
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
  },
};
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  background-color: #4b548b;
}
.nav-bar-menu {
  position: relative;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.nav-bar-menu li:first-child {
  display: flex;
  align-items: center;
}
.nav-bar-menu li:first-child img {
  width: 60px;
  height: auto;

  margin-right: 70px;
  padding: 10px 0;
}
.nav-bar-menu li a {
  text-decoration: none;
  color: #fff;
  font-size: 1em;
  margin-right: 20px;
}

li a:hover:not(.active) {
  color: #eabb4d;
}
.nav-bar-menu li:last-child {
  position: absolute;
  right: 0;
}
.nav-bar-menu li:last-child a {
  margin-right: 0;
  margin-left: 20px;
}
</style>
