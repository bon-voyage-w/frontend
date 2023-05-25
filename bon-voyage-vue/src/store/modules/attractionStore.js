import {
  allSidoList,
  relatedGugunList,
  attractionList,
  allAttractionList,
  AttractionDetailByContentId,
} from "@/api/attraction.js";
import {
  myPageLike,
} from "@/api/user.js"

const attractionStore = {
  namespaced: true,
  state: {
    sidos: [{ value: 0, text: " --------- 시 --------- " }],
    guguns: [{ value: 0, text: " --------- 도 --------- " }],
    attractions: [],
    attraction: null,
    selectedLocation: [],
    conditions: {
      sidoCode: 0,
      gugunCode: 0,
      keyword: null,
      contentTypeId: 0,
    },
    userLikeAttractions: [],
  },
  getters: {
    getLimitUserLikeAttractions : function (state) {
      return state.userLikeAttractions;
    },

  },
  mutations: {
    // empty
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: 0, text: " --------- 시 --------- " }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: 0, text: " --------- 도 --------- " }];
    },
    CLEAR_ATTRACTION_LIST(state) {
      state.attractions = [];
      state.attraction = null;
    },
    CLEAR_CONDITIONS(state) {
      state.conditions = {
        sidoCode: 0,
        gugunCode: 0,
        keyword: null,
        contentTypeId: 0,
      };
    },
    // change conditions
    SET_CONDITIONS_KEYWORD(state, inputKeyword) {
      state.conditions.keyword = inputKeyword;
    },
    SET_CONDITIONS_CONTENT_TYPE_ID(state, selectedContentType) {
      console.log("mutation 호출!");
      state.conditions.contentTypeId = selectedContentType;
    },
    // get
    GET_ALL_SIDO_LIST(state, data) {
      data.forEach((data) => {
        state.sidos.push({ value: data.sidoCode, text: data.sidoName });
      });
    },
    GET_RELATED_GUGUN_LIST(state, data) {
      data.forEach((data) => {
        state.guguns.push({ value: data.gugunCode, text: data.gugunName });
      });
    },

    SET_ATTRACTION_LIST(state, attractions) {
      state.attractions = attractions;
    },
    SET_DETAIL_ATTRACTION(state, attraction) {
      console.log(">>>>>>>>>>>>>>>>>>>> 333333333333 mutation ");

      state.attraction = attraction;
    },
    SET_USER_LIKE_ATTRACTION_LIST: function (state,attractions){
      return state.userLikeAttractions=attractions;
    }
  },
  actions: {
    // change
    getConditionsKeyword: ({ commit }, inputKeyword) => {
      commit("SET_CONDITIONS_KEYWORD", inputKeyword);
    },
    getContentTypeId: ({ commit }, selectedContentType) => {
      commit("SET_CONDITIONS_CONTENT_TYPE_ID", selectedContentType);
    },
    // get
    getAllSidoList: ({ commit }) => {
      allSidoList(
        ({ data }) => {
          commit("GET_ALL_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getRelatedGugun: ({ commit }, sidoCode) => {
      const params = { sidoCode: sidoCode };
      relatedGugunList(
        params,
        ({ data }) => {
          commit("GET_RELATED_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getAllAttractionList: ({ commit }) =>
      allAttractionList(
        ({ data }) => {
          commit("SET_ATTRACTION_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      ),
    getAttractionList: ({ commit }, conditions) => {
      attractionList(
        conditions,
        ({ data }) => {
          commit("SET_ATTRACTION_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailAttraction: ({ commit }, contentId) => {
      AttractionDetailByContentId(
        contentId,
        ({ data }) => {
          commit("SET_DETAIL_ATTRACTION", data);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(">>>>>>>>>>>>>>>>>>>> 2222222222222222 액션 ");
    },
    commitClearGugunList: ({ commit }) => {
      commit("CLEAR_GUGUN_LIST", "");
    },
    clearAllCondition: ({commit})=>{
      commit("CLEAR_CONDITIONS","");
    },
    clearAttractionList: ({commit})=>{
      commit("SET_ATTRACTION_LIST",null);
    },
    async getLikeAttraction ({commit}) {
      await myPageLike(
          ({data}) => {
            commit("SET_USER_LIKE_ATTRACTION_LIST", data);
          },
          (error) => {
            console.log(error);
          }
      );
    },
  },
};

export default attractionStore;
