import Vue from 'vue';
import * as Vuex from 'vuex';

import state, {State} from './state';
import mutations from './mutations';

Vue.use(Vuex);
export default new Vuex.Store<State>({
    state,
    mutations,
});
