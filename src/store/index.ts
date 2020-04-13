import Vue from "vue";
import Vuex,{Module} from "vuex";

import UserModule from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserModule,
  }
});
