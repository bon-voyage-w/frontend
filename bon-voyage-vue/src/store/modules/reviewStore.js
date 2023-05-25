import {
    myPageReview,
} from "@/api/user.js";

const reviewStore={
    namespaced: true,
    state: {
        reviews :[],
        review :null,
    },
    getters :{

    },
    mutations: {
        SET_REVIEW_LIST: (state, reviews) => {
            state.reviews = reviews;
        },
        SET_REVIEW: (state, review) => {
            state.review = review;
        },
    },
    actions :{
        getReviewList ({ commit })  {
            myPageReview(
                ({ data }) => {
                    commit("SET_REVIEW_LIST", data);
                },
                (error) => {
                    console.log(error);
                }
            );
        },
    },
};
export default reviewStore;