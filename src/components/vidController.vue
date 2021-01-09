<template>
  <v-row justify='center'>
    <v-col cols='10' md='6' style="background-color: white;height:100%;"
    class="ma-8 rounded" v-show='!video'>
      <div class="text-center text-h3">Quiz:</div>
      <quiz v-bind:questions='questions' v-on:backToVideo='backToVideo'/>
    </v-col>
<v-col justify='center' cols='12' class="pa-5" no-gutters v-show='video'>
  <vid v-on:takeQuiz='video = false'/>
</v-col>
  </v-row>
</template>

<script>
import quiz from '@/components/quiz.vue'
import vid from '@/components/videoComp.vue'
import info from '@/assets/lessons/intro.js'
export default {
  name: 'videoControl',
  components: {
    quiz,
    vid
  },
  props: {
  },
  data () {
    return {
      video: true
    }
  },
  methods: {
    backToVideo: function () {
      this.video = true
    },
    takeQuiz: function () {
      this.video = false
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
    // courseInfo: function () {
    //   return info
    // },
    questions: function () {
      return info.questions
    }
  },
  updated () {
  },
  async mounted () {
  }
}
</script>
