<template>
  <header>
    <ul class="nav-bar-menu">
      <li>
        <router-link :to="{ name: 'main' }">
          <img
            class="main-logo"
            src="@/assets/img/logo_new.png"
            alt="로고이미지"
          />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'share-board' }">관광지</router-link>
        <router-link :to="{ name: 'share-board' }">공유게시판</router-link>
        <router-link :to="{ name: 'notice' }">공지사항</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'main' }">로그인</router-link>
        <router-link :to="{ name: 'main' }">회원가입</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
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
