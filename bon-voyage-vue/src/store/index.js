import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import attractionStore from "@/store/modules/attractionStore";

import memberStore from '@/store/memberStore';

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
    memberStore,
    attractionStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
