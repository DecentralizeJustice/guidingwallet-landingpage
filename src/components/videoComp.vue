<template>
  <v-row justify='center' style="" class="pa-5" no-gutters>
    <v-col cols='12' md='8' style="">
      <v-img :src='slide' contain style="max-height:90vh;"></v-img>
    </v-col>
    <v-col cols='12' md='6'>
        <audio controls @timeupdate="updateTime" ref="player" class="mt-5 mr-5"
        :src="processedUrl" type="audio/mp3" @error='audioError'
        controlsList="nodownload" style="width: 100%;">
      </audio>
    </v-col>
    <v-col cols='12' class="text-center">
      <v-btn
        color="green darken-1" class="" x-large
        @click="takeQuiz()"
      >
        Take Quiz
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'videoPlayer',
  components: {
  },
  props: ['info'],
  data () {
    return {
      processedUrl: this.info.audio[0],
      player: '',
      currentSlide: 0
    }
  },
  methods: {
    takeQuiz: function () {
      this.$emit('takeQuiz')
    },
    audioError (e) {
      console.log(e.srcElement.error)
    },
    updateTime () {
      const breakpoints = this.addFirstBreakpoint(this.courseInfo.breakpoints)
      const time = this.player.currentTime
      for (let i = 0; i < breakpoints.length; i++) {
        const lowseconds = this.getSeconds(breakpoints[i])
        const highseconds = this.getSeconds(breakpoints[i + 1])
        const lastSlide = (highseconds === undefined)
        const correctSlide = (time >= lowseconds && time < highseconds)
        if (lastSlide || correctSlide) {
          this.currentSlide = i
          break
        }
      }
    },
    addFirstBreakpoint (breakpoints) {
      if (breakpoints[0] !== '0:00') {
        breakpoints.splice(0, 0, '0:00')
      }
      return breakpoints
    },
    getSeconds (timeString) {
      if (typeof timeString === 'undefined') {
        return undefined
      }
      const times = timeString.split(':')
      times[0] = parseInt(times[0], 10)
      times[1] = parseInt(times[1], 10)
      let timeSeconds = 0
      timeSeconds += (times[0] * 60)
      timeSeconds += times[1]
      return timeSeconds
    }
  },
  watch: {
    // time: function () {
    //   this.player.currentTime = this.time
    // },
    courseInfo: function () {
      // this.setup()
    }
  },
  computed: {
    slide: function () {
      return this.courseInfo.slides[this.currentSlide]
    },
    courseInfo: function () {
      return this.info
    }
  },
  updated () {
  },
  async mounted () {
    this.player = this.$refs.player
  }
}
</script>
