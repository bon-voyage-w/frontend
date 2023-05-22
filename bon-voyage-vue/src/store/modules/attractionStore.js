import { attractionList } from "@/api/attraction.js";

const attractionStore = {
  namespaced: true,
  state: {
    attractions: [],
    attraction: null,
  },
  getters: {},
  mutations: {
    SET_ATTRACTION_LIST(state, attractions) {
      state.attractions = attractions;
    },
    SET_DETAIL_ATTRACTION(state, attraction) {
      state.attraction = attraction;
    },
  },
  actions: {
    getAttractionList: ({ commit }) => {
      attractionList(
        ({ data }) => {
          commit("SET_ATTRACTION_LIST", data.response.body.items.item);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailHouse: ({ commit }, attraction) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_ATTRACTION", attraction);
    },
  },
};

export default attractionStore;
