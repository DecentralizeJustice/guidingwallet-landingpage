<template>
    <v-container fluid class="pa-0 ma-0">
        <v-img  :src="mainImg" style="height:35vh;" class="pa-0 ma-0">
          <v-row class="ma-0 pa-0" align="center"
          justify="center" style="height:35vh;" no-gutters>
            <v-col cols="12" style="height:35vh;" no-gutters
            :class="{'mobileHero': $vuetify.breakpoint.smAndDown}">
              <v-row
                align="center"
                justify="center"
                class="heroImg pa-0 ma-0"
                style="height:35vh;"
                no-gutters
              >
                <v-card
                  tile
                  :flat='flatOnMobile'
                  :color='textColor'
                  class="text-center rounded"
                >
                <div
                :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-center white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Trivia Show Info
                </div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-row justify="center"  no-gutters
         class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='8' class="text-h5 my-8 white--text rounded pa-2 text-left" style="background-color: grey;">
          {{intro}}
          <v-row justify="center">
          <v-col cols='11' class="">
          </v-col>
        </v-row>
          </v-col>
        </v-row>
        <v-row justify="center"  no-gutters
         class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='8' class="text-h4 by-5 white--text rounded pa-5 text-left" style="background-color: #424242;">
          General Info:
          <v-row justify="center">
            <v-col cols="8" md="3" style="background-color: #424242;" no-gutters
            class="text-center rounded my-3 pa-3 mx-2"
            v-for="(fact, x) in showFacts"
            :key="x"
            >
            {{fact[0]}}<br>
            <div class="ma-0 pa-0 text-h6">{{fact[1]}}</div>
            <v-icon
                  x-large
                  color="teal lighten-2"
                >
                  mdi-{{fact[2]}}
                </v-icon>
           </v-col>
        </v-row>
          </v-col>
        </v-row>
        <v-row justify="center"  no-gutters
         class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='8' class="text-subtitle-1 my-5 white--text rounded pa-2 text-left" style="background-color: grey;">
          {{howItWorks}}
          <v-row justify="center">
          <v-col cols='11' class="">
          </v-col>
        </v-row>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import triviaInfo from '@/assets/trivia.js'
export default {
  name: 'trivia',
  data: () => ({
    buttonColor: 'rgb(29, 66, 76)',
    intro: `We have bi-weekly trivia shows where you can win real crypto.
    You can view our past trivia shows to see how you would have fared and I'll catch you at the next one.`,
    howItWorks: ` The trivia will be held in our wallet. In order to win our trivia show you must answer all questions correctly.
    The pot will be divided by the number of winners. For example, if 5 people answer all the questions
    correctly and the potsize is 50 USD, each winner
    will receive around 10 USD in crypto. I will send payments as soon as I process all the trivia show data;
    I am aiming to get them out the next day.`,
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609688189/guidingLanding/pexels-katerina-holmes-5905434.jpg'
  }),
  components: {
  },
  methods: {
  },
  computed: {
    showFacts: function () {
      const info = []
      info.push([this.triviaInfo.prizeAmount + ' USD', 'Potsize', 'cash'])
      info.push([this.triviaInfo.subject, 'Subject', 'book'])
      info.push([this.triviaInfo.numberOfQuestions, 'Questions', 'help-circle'])
      info.push([this.triviaInfo.timeToAnswer, 'To Answer Each One', 'clock-time-eight'])
      info.push([this.nextShowDate, 'Next Show', 'calendar-month'])
      info.push([this.triviaInfo.paymentMethod, 'Payment Crypto', 'eye-off'])
      return info
    },
    triviaInfo: function () {
      return triviaInfo.default
    },
    nextShowDate: function () {
      const d = new Date(this.triviaInfo.startTime * 1000)
      const months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
      const month = months[d.getMonth()]
      const day = d.getDate()
      let hour = d.getHours()
      const ampm = hour >= 12 ? 'p.m.' : 'a.m.'
      hour = hour % 12
      if (hour === 0) {
        hour = 12
      }
      let minutes = d.getMinutes()
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      return hour + ':' + minutes + ' ' + ampm + ' ' + day + ', ' + month
    },
    heroTextSize: function () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'display-4'
      }
      return 'display-3'
    },
    textColor: function () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'rgba(39, 39, 39, .98)'
      }
      return 'rgba(39, 39, 39, 0)'
    },
    flatOnMobile: function () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return false
      }
      return true
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.mobileHero {
  background-color: rgba(39, 39, 39, .85)
}
.mainGrad {
  background-image: linear-gradient(to bottom, rgb(29, 66, 76) , #486E70);
}
</style>
