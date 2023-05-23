import { attractionInstance } from "@/api/index.js";

const attraction = attractionInstance();

function allSidoList(success, fail) {
  attraction.get(`/sido-info`).then(success).catch(fail);
}
function relatedGugunList(params, success, fail) {
  attraction.get(`/gugun-info`, { params: params }).then(success).catch(fail);
}
// function gugunList(params, success, fail) {
//   attraction.get(`/search`, { params: params }).then(success).catch(fail);
// }

function attractionList(params, success, fail) {
  attraction.get(`/search`, { params: params }).then(success).catch(fail);
}

export { allSidoList, relatedGugunList, attractionList };
