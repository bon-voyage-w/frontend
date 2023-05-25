import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import attractionStore from "@/store/modules/attractionStore";

import userStore from '@/store/modules/userStore';
import reviewStore from "@/store/modules/reviewStore"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore,
    attractionStore,
    reviewStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
