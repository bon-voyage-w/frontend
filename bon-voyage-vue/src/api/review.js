import { reviewInstance } from "@/api/index.js";

const review = reviewInstance();

function listReview(params, success, fail) {
  review.get(`?contentId=${params}`).then(success).catch(fail);
}

// function getReview(reviewId, success, fail) {
//   review.get(`/${reviewId}`).then(success).catch(fail);
// }

function writeReview(param, success, fail) {
  review.post(``, JSON.stringify(param)).then(success).catch(fail);
}

function modifyReview(param, success, fail) {
  console.log("api > modiReview > param 받았다 ::: ", param);
  review.put(JSON.stringify(param)).then(success).catch(fail);
  console.log("api ::: modiReview 성공!!!");
}

function deleteReview(reviewId, success, fail) {
  console.log("api > deleteReview > param 받았다 ::: ", reviewId);

  review.delete(`/${reviewId}`).then(success).catch(fail);
  console.log("api ::: deleteReview 성공!!!");
}

export { listReview, writeReview, modifyReview, deleteReview };
