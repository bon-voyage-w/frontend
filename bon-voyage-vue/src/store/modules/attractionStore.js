import { sidoList, gugunList, attractionList } from "@/api/attraction.js";

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
    // CLEAR_SIDO_LIST(state) {
    //   state.sidos = [{ value: null, text: " --------- 시 --------- " }];
    // },
    // CLEAR_GUGUN_LIST(state) {
    //   state.guguns = [{ value: null, text: " --------- 도 --------- " }];
    // },
    GET_ALL_SIDO_INFO(state, data) {
      var sidoList = data.sidoDto;
      data.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
      data.sidoDto.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    CLEAR_ATTRACTION_LIST(state) {
      state.attractions = [];
      state.attraction = null;
    },
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
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
    getAllLocation: ({ commit }) => {
      locationList(
        ({ data }) => {
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      const params = { sido: sidoCode };
      gugunList(
        params,
        ({ data }) => {
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getAttractionList: ({ commit }, gugunCode) => {
      const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      const params = {
        LAWD_CD: gugunCode,
        DEAL_YMD: "202207",
        serviceKey: decodeURIComponent(SERVICE_KEY),
      };
      attractionList(
        params,
        ({ data }) => {
          commit("GET_ALL_SIDO_INFO", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailAttraction: ({ commit }, attraction) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_ATTRACTION", attraction);
    },
  },
};

export default attractionStore;
