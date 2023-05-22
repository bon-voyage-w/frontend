
//import router from "@/router";
import { login,  kakaoLogin } from "@/api/member";

const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isValidToken: false,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
    checkToken: function (state) {
      return state.isValidToken;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_IS_VALID_TOKEN: (state, isValidToken) => {
      state.isValidToken = isValidToken;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user,
        ({ data }) => {

            let accessToken = data["access_token"];
            let refreshToken = data["refresh_token"];
             console.log("login success token created!!!! >> ", accessToken, refreshToken);
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_VALID_TOKEN", true);
            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
        },
        (error) => {
          console.log(error);
          console.log("왜안돼");
          commit("SET_IS_LOGIN", false);
          commit("SET_IS_LOGIN_ERROR", true);
          commit("SET_IS_VALID_TOKEN", false);
        }
      );
    },
    async userConfirmKakao({ commit }) {
      await kakaoLogin(
        ({ data }) => {

          let accessToken = data["access_token"];
          let refreshToken = data["refresh_token"];
           console.log("login success token created!!!! >> ", accessToken, refreshToken);
          commit("SET_IS_LOGIN", true);
          commit("SET_IS_LOGIN_ERROR", false);
          commit("SET_IS_VALID_TOKEN", true);
          sessionStorage.setItem("access-token", accessToken);
          sessionStorage.setItem("refresh-token", refreshToken);
      },
      (error) => {
        console.log(error);
        console.log("왜안돼");
        commit("SET_IS_LOGIN", false);
        commit("SET_IS_LOGIN_ERROR", true);
        commit("SET_IS_VALID_TOKEN", false);
      }
      );
    },
    // async getUserInfo({ commit, dispatch }, token) {
    //   await findUserInfoByToken(
    //     token,
    //     ({ data }) => {
    //         commit("SET_USER_INFO", data.userInfo);
    //         // console.log("3. getUserInfo data >> ", data);
    //     },
    //     async (error) => {
    //       console.log("getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ", error.response.status);
    //       commit("SET_IS_VALID_TOKEN", false);
    //       await dispatch("tokenRegeneration");
    //     }
    //   );
    // },
  },
};

export default memberStore;
