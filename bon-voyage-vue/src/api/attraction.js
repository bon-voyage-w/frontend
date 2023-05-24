import { attractionInstance } from "@/api/index.js";

const attraction = attractionInstance();

function allSidoList(success, fail) {
  attraction.get(`/sido-info`).then(success).catch(fail);
}
function relatedGugunList(params, success, fail) {
  attraction.get(`/gugun-info`, { params: params }).then(success).catch(fail);
}
<<<<<<< HEAD
=======

>>>>>>> 8174f7b9cbe3f3d917ca924898a40c919b31b95c
function attractionList(params, success, fail) {
  console.log("@@@@@@@@", params.sidoCode);
  attraction.get(`/search`, { params: params }).then(success).catch(fail);
}
function allAttractionList(success, fail) {
  attraction.get().then(success).catch(fail);
}
export { allSidoList, relatedGugunList, attractionList, allAttractionList };
