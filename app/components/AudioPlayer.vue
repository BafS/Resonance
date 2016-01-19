<template>
  <div class="tmp">

<div class="plyr">
    <div data-video-id="bTqVqk7FSmY" data-type="youtube"></div>
</div>

<!-- <div class="player">
    <audio controls>
        <source src="/Users/fabiens/Dev/js/Resonance/music2/06 Lament 1.mp3" type="audio/mp3">
        <source src="/Users/fabiens/Dev/js/Resonance/music2/06 Lament 1.mp3" type="audio/ogg">
    </audio>
</div> -->

  [{{mediaSource.songTitle}}]
  <audio controls preload='none'>
    <source src='mediaSource' type='audio/mpeg' />
  </audio>

    <audio controls preload='true'>
      <source src='/Users/fabiens/Dev/js/Resonance/music2/06 Lament 1.mp3' type='audio/mpeg' />
    </audio>
  </div>
</template>

<script>

// var plyr = require('bundle!./bower_components/plyr/dist/plyr')
// var plyr = require('bundle!./../../bower_components/plyr/dist/plyr')
// let plyr = require('./../../bower_components/plyr/dist/plyr')
// import * as plyr from './../../bower_components/plyr/dist/plyr.js'
// console.log(plyr)
// plyr.setup();
// import plyr from './bower_components/plyr/dist/plyr.js'
// import plyr from './../../bower_components/plyr/dist/plyr.js'
import store from '../store'

import plyr from '../assets/plyr/dist/plyr.js'

console.log(plyr)

export default {
  props: {
    mediaSource: {
      type: Object // Song object
      // ,
      // default: {songTitle: '_test_',path: '/Users/fabiens/Dev/js/Resonance/music2/06 Lament 1.mp3'}
    }
  },

  computed: {
    mediaSource: function() {
      return store.state.engine.mediaSource
    }
  }
}

</script>

<style>
  /*@import "../../asset/plyr/dist/plyr.css";*/
</style>
