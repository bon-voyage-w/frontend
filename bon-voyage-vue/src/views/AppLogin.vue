<template>
  <div class="login">
    <form class="loginform">
      <p>
        <label for="memberIdInput">아이디</label>
        <input
          type="text"
          id="memberIdInput"
          class="input_text"
          ref="memberIdInput"
          v-model="user.id"
          placeholder="아이디를 입력하세요."
        />
      </p>
      <p>
        <label for="memberPasswordInput">패스워드</label>
        <input
          type="password"
          id="memberPasswordInput"
          class="input_text"
          ref="memberPasswordInput"
          v-model="user.pw"
          placeholder="패스워드를 입력하세요."
        />
      </p>
      <p class="buttons">
        <button @click.prevent="doLogin" class="button blue">로그인</button>

        <button @click="doKakaoLogin" class="button">카카오 로그인</button>
      </p>
    </form>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";

export default {
  name: "AppLogin",
  data: function () {
    return {
      user: {
        id: null,
        pw: null,
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo", "userConfirmKakao"]),
    async doLogin() {
      if (this.user.id == "") {
        alert("아이디를 입력하세요.");
        this.$refs.memberIdnput.focus();
        return;
      } else if (this.user.pw == "") {
        alert("패스워드를 입력하세요.");
        this.$refs.memberPasswordInput.focus();
        return;
      }
      console.log(this.user);
      await this.userConfirm(this.user);
      //let accessToken = sessionStorage.getItem("access-token");
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        //await this.getUserInfo(accessToken);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },
    doCancel() {
      this.$router.push("../");
    },
    async doKakaoLogin() {
      this.userConfirmKakao();
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
        console.log(token);
        //await this.getUserInfo(token);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },
  },
  mounted() {
    this.$refs.memberIdInput.focus();
  },
};
</script>

<style scoped>
.login {
  width: 800px;
  margin: 40px auto;
}
.loginform {
  width: 400px;
  margin: auto;
}
.loginform p > label {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  padding-right: 10px;
}
.loginform p > .input_text {
  width: 200px;
  font-size: 14px;
  height: 32px;
}
.buttons {
  position: relative;
  height: 32px;
  margin-top: 20px;
}
.buttons > .button {
  overflow: visible;
  cursor: pointer;
  min-width: 125px;
  height: 32px;
  margin: 0 2px;
  padding: 0 15px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dfdfdf;
  background: #fff;
  border-radius: 10px;
}
.buttons > .button.blue {
  color: #fff;
  border-color: #0099d2 !important;
  background: #0099d2 !important;
}
</style>
