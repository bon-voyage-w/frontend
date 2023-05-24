import {
  allSidoList,
  // allGugunList,
  relatedGugunList,
  attractionList,
} from "@/api/attraction.js";

const attractionStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: " --------- 시 --------- " }],
    guguns: [{ value: null, text: " --------- 도 --------- " }],
    attractions: [],
    attraction: null,
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
        // console.log(data.sidoCode, data.sidoName);
      });
    },
    GET_RELATED_GUGUN_LIST(state, data) {
      data.forEach((data) => {
        state.guguns.push({ value: data.gugunCode, text: data.gugunName });
        console.log(data.gugunCode, data.gugunName);
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
    getAttractionList: ({ commit }, { sidoCode, gugunCode }) => {
      const params = { sidoCode: sidoCode, gugunCode: gugunCode };
      console.log(
        "시도 구군 코드를 파라미터로 받은 거 확인하기 >>>>> ",
        sidoCode,
        gugunCode
      );
      attractionList(
        params,
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
