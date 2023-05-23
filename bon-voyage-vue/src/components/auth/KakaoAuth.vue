<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
const memberStore = "memberStore";

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
    ...mapActions(memberStore, ["userConfirmKakao", "getUserInfo"]),
  },
};
</script>

<style scoped></style>
