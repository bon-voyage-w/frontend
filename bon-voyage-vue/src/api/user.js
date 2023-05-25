import { apiInstance } from "./index.js";
// import http from "@/api/http-common.js"


const api = apiInstance();
// const kakaoapi = kakaoLoginInstance();

async function login(user, success, fail) {
  await api.post(`/users/auth`, JSON.stringify(user)).then(success).catch(fail);
}

// async function kakaoLogin(success,fail) {
//   http.get(``).then(success).catch(fail);
// }

async function findUserInfoById(success, fail) {
  api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
  await api.get(`/users`).then(success).catch(fail);
}

// async function tokenRegeneration(user, success, fail) {
//   api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
//   await api.post(`/user/refresh`, user).then(success).catch(fail);
// }

async function logout(success, fail) {
  api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
  await api.delete(`/users`).then(success).catch(fail);
}
async function myPageLike(success, fail) {
  api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
  await api.get(`/users/like`).then(success).catch(fail);
}
async function register(userInfo,success, fail) {
  api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
  await api.post(`/users`, JSON.stringify(userInfo)).then(success).catch(fail);
}
async function myPageRoute(success, fail) {
  api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
  await api.get(`/users/routes`).then(success).catch(fail);
}
async function myPageReview(success, fail) {
  api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
  await api.get(`/users/reviews`).then(success).catch(fail);
}


export { login,findUserInfoById,logout,myPageLike,myPageReview,myPageRoute,register };
