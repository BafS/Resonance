import * as types from '../mutation-types'

export const engineInitialState = {
  mediaSource: {}
}

// mutations
export const engineMutations = {
  // [GET_MEDIA_SOURCE] (state, song) {
  //   return state.engine.mediaSource
  // },

  [types.SET_MEDIA_SOURCE] (state, song) {
    state.engine.mediaSource = song
  }
}
