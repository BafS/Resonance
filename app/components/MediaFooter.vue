<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 90px;
  /*50px;*/
  line-height: 50px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

.container {
  padding: 0 15px;
  margin-top: 5px;
}
</style>

<template>
  <footer class="footer">
    <div class="container">
      <audio-player src=:file></audio-player>
      <player-bar></player-bar>
    </div>
  </footer>
</template>

<script>
import PlayerBar from './PlayerBar.vue'
import AudioPlayer from './AudioPlayer.vue'

export default {
  props: ['file'],

  components: {
    PlayerBar,
    AudioPlayer
  }
}
</script>
