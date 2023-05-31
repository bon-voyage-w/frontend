import { myPageReview } from "@/api/user.js";
import { listReview } from "@/api/review";

const reviewStore = {
  namespaced: true,
  state: {
    reviews: [],
    // review: null,
  },
  getters: {
    // getReviewList: function (state) {
    //   return state.reviews;
    // },
  },
  mutations: {
    SET_REVIEW_LIST: (state, reviews) => {
      state.reviews = reviews;
    },
    CLEAR_REVIEW_LIST(state) {
      state.reviews = [];

      console.log("review > mutations > clear ::: ", state.reviews);
    },
    // SET_REVIEW: (state, review) => {
    //   state.review = review;
    // },
  },
  actions: {
    getMyReviewList({ commit }) {
      myPageReview(
        ({ data }) => {
          commit("SET_REVIEW_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getAttractionReviewList({ commit }, contentId) {
      listReview(
        contentId,
        ({ data }) => {
          commit("SET_REVIEW_LIST", data);
          // console.log(
          //   "review > actions > getAttractionReviewList ::: contentId ",
          //   contentId
          // );

          // console.log("review > actions > getAttractionReviewList ::: ", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
export default reviewStore;
