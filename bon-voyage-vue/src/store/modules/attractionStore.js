import {
  allSidoList,
  relatedGugunList,
  attractionList,
  allAttractionList,
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
      category: null,
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
    getAttractionList: ({ commit }, loc) => {
      attractionList(
        loc,
        ({ data }) => {
          commit("SET_ATTRACTION_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailAttraction: ({ commit }, attraction) => {
      commit("SET_DETAIL_ATTRACTION", attraction);
    },
  },
};

export default attractionStore;
