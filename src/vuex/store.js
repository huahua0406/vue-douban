import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//types
const OPEN_SEARCH = 'OPEN_SEARCH';
const CLOSE_SEARCH = 'CLOSE_SEARCH';
//state
const state = {
	searchFlag: false
};
//mutations
const mutations = {
	[OPEN_SEARCH](state){
		state.searchFlag = !state.searchFlag
	},
	[CLOSE_SEARCH](state){
		state.searchFlag = !state.searchFlag
	}
}
//actions
const actions = {
	openSearch({commit}){
		commit('OPEN_SEARCH')
	},
	closeSearch({commit}){
		commit('CLOSE_SEARCH')
	}
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

