<style scoped>
.container {
  border: 1px solid #f00;
}
.playlist .table {
  font-size: 11pt;
  font-weight: normal;
}
</style>

<template>
  <div class="playlist">
    <span class="name">{{name}}</span>
    <!-- :on-clickedA=song :on-clickedB=setPlaying -->
    <v-table :fields=headers :data=songs :on-clicked=setPlaying></v-table>
  </div>
</template>

<script>
import VTable from './table.vue'
import store from '../store'
const {
  getAllSongs,
  setMediaSource,
  addSongs
} = store.actions

export default {

  // {title: 'test', id: 1, band: 'acdc'}
  // declare the props
  props: {
    name: {
      type: String,
      required: true
    },
    onSong: {
      type: Function,
      default: function() { }
    }
  },

  props: {
    song: null,
    songs: store.state.playlist.songs // Shoud be ok with store initial state... ?
  },

  computed: {
    songs() {
      return store.state.playlist.songs
    },

    headers: function() {
      return {
        // isPlaying: '>',
        songTrackNumber: '#',
        songTitle: 'Title',
        // band: 'Band',
        'Album.albumTitle': 'Album',
        'Artist.artistName': 'Artist',
        songYear: 'Year',
        id: '_id',
        song: 'id'
      }
    }
  },

  created() {
    document.addEventListener('dragover', event => {
      console.log("OVVVEVR")
      event.preventDefault();
      return false;
    }, false);

    document.addEventListener('drop', event => {
      // console.log("drop")
      // console.log(event.dataTransfer.files)

      let dt = event.dataTransfer
      addSongs('playlistname', dt.files)

      // let files = dt.files;


      // var count = files.length;
      // console.log("File Count: " + count + "\n");

      // for (var i = 0; i < files.length; i++) {
      //   console.log(" File " + i + ":\n(" + (typeof files[i]) + ") : <" + files[i] + " > " +
      //   files[i].name + " " + files[i].size + "\n");
      // }

      event.preventDefault();
      return false;
    }, false);

    // console.log('getall')
    getAllSongs()
  },

  methods: {
    setPlaying: function(n) {
      // this.select = 2
      // console.log(this.select)
      console.log(n)
      // console.log(store.state.playlist.[n].path)
      console.log(this.songs[n])
      // console.log(this.songs[n].path)

      setMediaSource(this.songs[n])
    }
  },

  components: {
    VTable
  }

  // the prop can be used inside templates, and will also
  // be set as `this.name`
}
</script>
