<template>
<div class="videowatch">
 <h3>{{this.$route.params.name}}</h3>
 <br>
  <div class="videoframe">
 <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 />
  </div>
  <br>
  <div class="">
    {{videos.description}}
  </div>
</div>
</template>

<script>
// require styles
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
  name: 'videowatch',
  components: {
    videoPlayer
  },
  computed: {
    videos () {
      return this.$store.state.videos.find(vid => vid.name === this.$route.params.name)
    },
    playerOptions () {
      return {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: this.videos.video
        }],
        poster: '/static/images/author.jpg'
      }
    }
  }
}
</script>

<style scoped>
.videoframe
{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
