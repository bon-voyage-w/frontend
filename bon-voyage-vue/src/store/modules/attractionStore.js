import {
  allSidoList,
  relatedGugunList,
  attractionList,
  allAttractionList,
  AttractionDetailByContentId,
} from "@/api/attraction.js";
import { myPageLike } from "@/api/user.js";

const attractionStore = {
  namespaced: true,
  state: {
    sidos: [{ value: 0, text: " --------- 시 --------- " }],
    guguns: [{ value: 0, text: " --------- 도 --------- " }],
    attractions: [],
    selectedAttractionInfo: [],
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
    getLimitUserLikeAttractions: function (state) {
      return state.userLikeAttractions;
    },
    getAttractionContentId: function (state) {
      return state.selectedAttractionInfo.attractionInfoDto.contentId;
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
      state.selectedattraction = null;
    },
    CLEAR_CONDITIONS(state) {
      state.conditions = {
        sidoCode: 0,
        gugunCode: 0,
        keyword: null,
        contentTypeId: 0,
      };
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
    // change conditions
    SET_CONDITIONS_KEYWORD(state, inputKeyword) {
      state.conditions.keyword = inputKeyword;
    },
    SET_CONDITIONS_CONTENT_TYPE_ID(state, selectedContentType) {
      state.conditions.contentTypeId = selectedContentType;
    },
    SET_ATTRACTION_LIST(state, attractions) {
      state.attractions = attractions;
    },
    SET_SELECTED_ATTRACTION(state, attraction) {
      state.selectedAttractionInfo = attraction;
    },
    SET_USER_LIKE_ATTRACTION_LIST: function (state, attractions) {
      return (state.userLikeAttractions = attractions);
    },
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
    selectAttraction: ({ commit }, contentId) => {
      AttractionDetailByContentId(
        contentId,
        ({ data }) => {
          commit("SET_SELECTED_ATTRACTION", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    commitClearGugunList: ({ commit }) => {
      commit("CLEAR_GUGUN_LIST", "");
    },
    clearAllCondition: ({ commit }) => {
      commit("CLEAR_CONDITIONS", "");
    },
    clearAttractionList: ({ commit }) => {
      commit("SET_ATTRACTION_LIST", null);
    },
    async getLikeAttraction({ commit }) {
      await myPageLike(
        ({ data }) => {
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
