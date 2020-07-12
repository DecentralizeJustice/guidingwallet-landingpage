<template>
    <v-layout row wrap justify-center :style="{background: backgroundColor}" class="pb-4 pt-4">
      <v-flex xs9>
        <v-img :src='slide' contain></v-img>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap justify-center>
          <audio controls @timeupdate="updateTime" ref="player" class="mt-4">
          <source :src="audioUrl" type="audio/mp3">
        </audio>
        </v-layout>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'videoPlayer',
  components: {
  },
  props: ['vidInfo', 'pause', 'time', 'backgroundColor'],
  data () {
    return {
      audioUrl: this.vidInfo.audio,
      player: '',
      currentSlide: 0
    }
  },
  methods: {
    updateTime () {
      const breakpoints = this.vidInfo.breakpoints
      const time = this.player.currentTime
      for (var i = 0; i < breakpoints.length; i++) {
        const lastSlide = (breakpoints[i + 1] === undefined)
        const correctSlide = (time > breakpoints[i] && time < breakpoints[i + 1])
        if (lastSlide || correctSlide) {
          this.currentSlide = i
          break
        }
      }
    }
  },
  watch: {
    pause: function () {
      if (this.pause === true) {
        this.player.pause()
        this.$emit('paused', this.player.currentTime)
      }
    },
    time: function () {
      this.player.currentTime = this.time
    }
  },
  computed: {
    slide: function () {
      return this.vidInfo.slides[this.currentSlide]
    }
  },
  async mounted () {
    this.player = this.$refs.player
    // const url = this.courseInfo.audio
  }
}
</script>
