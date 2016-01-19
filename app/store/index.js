import Vue from 'vue'
import Vuex from '../../vuex'
import * as actions from './actions'
import { engineInitialState, engineMutations } from './modules/engine'
import { playlistInitialState, playlistMutations } from './modules/playlist'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    engine: engineInitialState,
    playlist: playlistInitialState
  },
  actions,
  mutations: [playlistMutations, engineMutations],
  strict: debug,
  middlewares: debug ? [Vuex.createLogger()] : []
})
