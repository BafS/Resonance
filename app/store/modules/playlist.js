// import { set } from 'vue'
import * as types from '../mutation-types'

export const playlistInitialState = {
  songs: []
  // selected: null
}

export const playlistMutations = {
  [types.ADD_SONG](state, song) {
    state.playlist.songs.push(song)
  },
  [types.ADD_SONGS](state, songs) {
    console.log('store/modules/playlist')
    for (var i = songs.length - 1; i >= 0; i--) {
      state.playlist.songs.push([i])
    };
  },
  [types.RECEIVE_SONGS](state, songs) {
    state.playlist.songs = songs
  }
}

// function addSong(state, playlistName, song) {
//   state.playlists[playlistName].push(song)
//   set(state.playlists, message.id, message)
// }

// function setPlayingSong(state, id) {
//   state.currentThreadID = id
//   // mark thread as read
//   state.threads[id].lastMessage.isRead = true
// }
