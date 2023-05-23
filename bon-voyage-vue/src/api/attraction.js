import { attractionInstance } from "@/api/index.js";

// const api = apiInstance();
const attraction = attractionInstance();

function locationList(success, fail) {
  attraction.get(`/local-info`).then(success).catch(fail);
}

// function sidoList(params, success, fail) {
//   attraction.get(`/local-info`, { params: params }).then(success).catch(fail);
//   console.log(">>>>>>>>>>>>>> 시도리스트 ", params);
// }

function gugunList(params, success, fail) {
  attraction.get(`/search`, { params: params }).then(success).catch(fail);
  console.log(">>>>>>>>>>>>>> 구군리스트 ", params);
}

function attractionList(params, success, fail) {
  attraction.get(`/search`, { params: params }).then(success).catch(fail);
  console.log(">>>>>>>>>>>>>> 그냥 리스트 ", params);
}

export { sidoList, gugunList, attractionList };
