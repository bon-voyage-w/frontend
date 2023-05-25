import {
  allSidoList,
  relatedGugunList,
  attractionList,
  allAttractionList,
  AttractionDetailByContentId,
} from "@/api/attraction.js";

const attractionStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: " --------- 시 --------- " }],
    guguns: [{ value: null, text: " --------- 도 --------- " }],
    attractions: [],
    attraction: null,
    selectedLocation: [],
    conditions: {
      sidoCode: null,
      gugunCode: null,
      keyword: null,
      contentTypeId: 0,
    },
  },
  getters: {},
  mutations: {
    // empty
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: " --------- 시 --------- " }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: " --------- 도 --------- " }];
    },
    CLEAR_ATTRACTION_LIST(state) {
      state.attractions = [];
      state.attraction = null;
    },
    CLEAR_CONDITIONS(state) {
      state.conditions = {
        sidoCode: null,
        gugunCode: null,
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
      state.attraction = attraction;
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
    },
    commitClearGugunList: ({ commit }) => {
      commit("CLEAR_GUGUN_LIST", "");
    },
  },
};

export default attractionStore;
