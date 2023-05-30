import { reviewInstance } from "@/api/index.js";

const review = reviewInstance();

function listReview(param, success, fail) {
  review.get({ params: param }).then(success).catch(fail);
}

function writeReview(review, success, fail) {
  review.post(JSON.stringify(review)).then(success).catch(fail);
}

function getReview(reviewId, success, fail) {
  review.get(`/${reviewId}`).then(success).catch(fail);
}

function modifyReview(review, success, fail) {
  review.put(JSON.stringify(review)).then(success).catch(fail);
}

function deleteReview(reviewId, success, fail) {
  review.delete(`/${reviewId}`).then(success).catch(fail);
}

export { listReview, writeReview, getReview, modifyReview, deleteReview };
