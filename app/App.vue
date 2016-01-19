<template>
  <nav class="title-bar navbar navbar-light bg-faded navbar-static-top">
    <a class="navbar-brand" href="#">
      <img src="./assets/logo.png" class="pull-left logo"/>
    </a>
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Browse <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><counter></counter></a>
      </li>
    </ul>
    <ul class="nav navbar-nav pull-xs-right">
      <button class="btn btn-success-outline" type="submit">Search</button>
    </ul>
  </nav>
  <playlist name="yes" omg=:on-clicked :songs=songs></playlist>
  <media-footer file="lala/qweqwe"></media-footer>
</template>

<script>
import Counter from './components/Counter.vue'
import Playlist from './components/Playlist.vue'
import MediaFooter from './components/MediaFooter.vue'

export default {
  data() {
    return {
      title: 'Resonance music player'
    }
  },
  methods: {
    omg: function(a) {
      console.log("omg")
      console.log(a)
    }
  },
  components: {
    Counter,
    Playlist,
    MediaFooter
  }
}
</script>

<style lang="sass">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// @import "./assets/octicons/octicons.css";

$font-stack: Helvetica, sans-serif;
$primary-color: #333;

html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  font: 100% $font-stack;
  color: $primary-color;
}
.logo {
  width: 40px;
  height: 40px;
}
</style>
