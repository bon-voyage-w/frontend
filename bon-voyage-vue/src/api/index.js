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

function attractionInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:8085/attractions",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}
function noticeInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:8085/notices",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}
function reviewInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:8085/reviews",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}
export { apiInstance, attractionInstance, noticeInstance, reviewInstance };
