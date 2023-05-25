<template>
    <div style="text-align: center">
  <div>로그인 진행중</div>
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Locked%20with%20Key.png" alt="Locked with Key" width="500" height="25" />
    </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
const userStore = "userStore";

export default {
  name: "KakaoAuth",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {
    const URL = `http://localhost:8085/oauth/kakao?code=` + this.$route.query.code;
    axios.get(URL).then((response) => {
      console.log(response.status);
      this.userConfirmKakao(response);
      // console.log("4. confirm() userInfo :: ", this.userInfo);
      this.getUserInfo();
      this.$router.push({ name: "main" });
    });
  },
  methods: {
    ...mapActions(userStore, ["userConfirmKakao", "getUserInfo"]),
  },
};
</script>

<style scoped></style>
