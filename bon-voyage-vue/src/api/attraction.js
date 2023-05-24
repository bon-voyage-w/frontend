import { attractionInstance } from "@/api/index.js";

const attraction = attractionInstance();

function allSidoList(success, fail) {
  attraction.get(`/sido-info`).then(success).catch(fail);
}
function relatedGugunList(params, success, fail) {
  attraction.get(`/gugun-info`, { params: params }).then(success).catch(fail);
}

function attractionList(params, success, fail) {
  attraction.get(`/search`, { params: params }).then(success).catch(fail);
}
function allAttractionList(success, fail) {
  attraction.get().then(success).catch(fail);
}
export { allSidoList, relatedGugunList, attractionList, allAttractionList };
