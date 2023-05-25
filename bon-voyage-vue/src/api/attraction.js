import { attractionInstance } from "@/api/index.js";

const attraction = attractionInstance();

function allSidoList(success, fail) {
  attraction.get(`/sido-info`).then(success).catch(fail);
}
function relatedGugunList(params, success, fail) {
  attraction.get(`/gugun-info`, { params: params }).then(success).catch(fail);
}
function attractionList(params, success, fail) {
  attraction
    // [수정필요] 페이지 관련 파라미터 임시로 넘기기
    .get(`/search?pageNumber=0&pageSize=6`, { params: params })
    .then(success)
    .catch(fail);
}
function allAttractionList(success, fail) {
  // [수정필요] 페이지 관련 파라미터 임시로 넘기기
  attraction.get(`?pageNumber=0&pageSize=6`).then(success).catch(fail);
}
function selectedAttraction(contentId, success, fail) {
  console.log("api 왔음");
  attraction.get(`/${contentId}`).then(success).catch(fail);
}
export { allSidoList, relatedGugunList, attractionList, allAttractionList, selectedAttraction };
