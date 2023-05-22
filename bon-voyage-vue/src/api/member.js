import { apiInstance, kakaoLoginInstance } from "./index.js";


const api = apiInstance();
const kakaoapi = kakaoLoginInstance();

async function login(user, success, fail) {
  await api.post(`/users/auth`, JSON.stringify(user)).then(success).catch(fail);
}

async function kakaoLogin(success,fail) {
  await kakaoapi.get(``).then(success).catch(fail);
}

// async function findUserInfoByToken(userid, success, fail) {
//   api.defaults.headers["Authorization"] = sessionStorage.getItem("access-token");
//   await api.get(`/user/${userid}`).then(success).catch(fail);
// }

// async function tokenRegeneration(user, success, fail) {
//   api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
//   await api.post(`/user/refresh`, user).then(success).catch(fail);
// }

// async function logout(userid, success, fail) {
//   await api.get(`/user/logout/${userid}`).then(success).catch(fail);
// }


export { login,  kakaoLogin };
