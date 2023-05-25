import { reviewInstance } from "@/api/index.js";

const review = reviewInstance();

function listReview(param, success, fail) {
  review.get({ params: param }).then(success).catch(fail);
}

function writeReview(review, success, fail) {
  notice.post(JSON.stringify(review)).then(success).catch(fail);
}

function getReview(reviewId, success, fail) {
  notice.get(`/${reviewId}`).then(success).catch(fail);
}

function modifyReview(review, success, fail) {
  notice.put(JSON.stringify(review)).then(success).catch(fail);
}

function deleteReview(reviewId, success, fail) {
  notice.delete(`/${reviewId}`).then(success).catch(fail);
}

export { listReview, writeReview, getReview, modifyReview, deleteReview };
