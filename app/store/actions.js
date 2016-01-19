import playlist from '../api/playlist'
import * as types from './mutation-types'

// export const addToCart = types.ADD_TO_CART

// export const checkout = ({ dispatch, state }, products) => {
//   const savedCartItems = [...state.cart.added]
//   dispatch(types.CHECKOUT_REQUEST)
//   shop.buyProducts(
//     products,
//     () => dispatch(types.CHECKOUT_SUCCESS),
//     () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
//   )
// }

export const addSongs = ({ dispatch, state }, playlistName, songs) => {
  playlist.addSongs(songs, songs => {
    dispatch(types.ADD_SONGS, songs)
  })
}

  // playlist.getAllSongs(songs => {
    // dispatch(types.RECEIVE_SONGS, songs)
  // })

export const addSong = ({ dispatch, state }, playlistName, song) => {
  dispatch(types.ADD_SONG, song)
}

export const playSong = ({ dispatch }, id) => {
  dispatch(types.PLAY_SONG, id)
}

export const getAllSongs = ({ dispatch }) => {
  playlist.getAllSongs(songs => {
    dispatch(types.RECEIVE_SONGS, songs)
  })
}

export const setMediaSource = ({ dispatch, state }, song) => {
  dispatch(types.SET_MEDIA_SOURCE, song)
}
