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
        getReviewList: function (state){
            return state.reviews;
        }
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
        getMyReviewList ({ commit })  {
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