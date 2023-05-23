
//import router from "@/router";
import { login,findUserInfoById,logout } from "@/api/member";

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
            sessionStorage.setItem("access-token","Bearer "+ accessToken);
            sessionStorage.setItem("refresh-token", "Bearer "+refreshToken);
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
    async userConfirmKakao({ commit }, response) {
      if(response.status === 201){
          let accessToken = response.data["access_token"];
          let refreshToken = response.data["refresh_token"];
          console.log("login success token created!!!! >> ", accessToken, refreshToken);
          commit("SET_IS_LOGIN", true);
          commit("SET_IS_LOGIN_ERROR", false);
          commit("SET_IS_VALID_TOKEN", true);
          sessionStorage.setItem("access-token", "Bearer "+accessToken);
          sessionStorage.setItem("refresh-token", "Bearer "+refreshToken);
      }
      else{
        console.log(response.data);
        console.log("왜안돼");
        commit("SET_IS_LOGIN", false);
        commit("SET_IS_LOGIN_ERROR", true);
        commit("SET_IS_VALID_TOKEN", false);
      }
    },
    async getUserInfo({ commit, dispatch }) {
      await findUserInfoById(
        ({ data }) => {
            commit("SET_USER_INFO", data);
             console.log("3. getUserInfo data >> ", data);
        },
        async (error) => {
          console.log("getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ", error.response.status);
          commit("SET_IS_VALID_TOKEN", false);
          await dispatch("tokenRegeneration");
        }
      );
    },
    async userLogout({ commit }) {
      await logout(
        ( response ) => {
          if (response.status===200) {
            commit("SET_IS_LOGIN", false);
            commit("SET_USER_INFO", null);
            commit("SET_IS_VALID_TOKEN", false);
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default memberStore;
