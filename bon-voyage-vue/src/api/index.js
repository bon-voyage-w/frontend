import axios from "axios";

// local vue api axios instance
function apiInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:8085",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function kakaoLoginInstance() {
  const instance = axios.create({
    baseURL: "http://kauth.kakao.com/oauth/authorize?client_id=67a48192fd15d10448dbca842d9a9af8&redirect_uri=http://localhost:8085/oauth/kakao/callback&response_type=code",
  });
  return instance;
}


export { apiInstance, };
