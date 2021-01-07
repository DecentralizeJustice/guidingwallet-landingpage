<template>
    <v-col
      cols="12" md='6'  lg='6'
    >
    <v-card
      class="pa-2"
    >
    <v-card
      class="my-2 black--text"
      flat
    >
      <v-card-text>
        <div class="white--text text-h4 rounded pa-2" style="background-color: #424242;">Past Gameshow Questions:</div>
        <p class="display-1 black--text mt-3">
          {{latestShow.questions[randomNumber].questionInfo.question}}
        </p>
        <v-list >
          <v-list-item-group
          >
            <v-list-item
              v-for="(item, i) in latestShow.questions[randomNumber].questionInfo.options"
              :key="i"
            >
              <v-list-item-content >
                <v-list-item-title v-text="item"
                class="text-h6"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div v-if='showAnswer'>
        Answer:
        {{answerText}}
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
      </v-card-actions>
      <!-- <v-expand-transition>
        <v-card
        flat rounded='0'
          v-if="showAnswerInfo[index] !== undefined"
          class="transition-fast-in-fast-out v-card--reveal"
          style="background-color: #546E7A;"
        >
          <v-card-text class="">
            <p class="display-1 white--text">
              {{latestShow.questions[index].questionInfo.options[latestShow.questions[index].answer]}}
            </p>
          </v-card-text>
        </v-card>
      </v-expand-transition> -->
    </v-card>
    <div style="width:75%;" class="mx-auto">
      <v-progress-linear
        color="light-blue"
        height="15"
        :value="timeLeft"
        striped
        class="ma-3"
      ></v-progress-linear>
    </div>
    </v-card>
    </v-col>
</template>

<script>
import gameInfo from '@/assets/showInfo.js'
export default {
  name: 'miniGame',
  data: () => ({
    randomNumber: 2,
    startTime: 22222222222222,
    timeToAnswer: 15,
    timeToPonder: 10,
    difference: 2,
    showAnswer: false,
    comp: [100000, 100000]
    // answer: false
  }),
  computed: {
    answerText: function () {
      return this.latestShow.questions[this.randomNumber].questionInfo.options[this.answerIndex]
    },
    answerIndex: function () {
      return this.latestShow.questions[this.randomNumber].answer
    },
    latestShow: function () {
      return gameInfo.default[1609040898]
    },
    timeLeft: function () {
      const top = this.difference / 1000
      if (this.showAnswer) {
        const fract = (top / this.timeToPonder) * 100
        return fract
      } else {
        const fract = (top / this.timeToAnswer) * 100
        return fract
      }
    }
  },
  methods: {
    countDownTimer () {
      const current = Date.now()
      const dif = current - this.startTime
      if (this.showAnswer) {
        if (dif > this.timeToPonder * 1000) {
          this.startTime = Date.now()
          this.showAnswer = false
          this.genRandomNumber()
        }
        this.difference = dif
        setTimeout(() => {
          this.countDownTimer()
        }, 100)
      } else {
        if (dif > this.timeToAnswer * 1000) {
          this.startTime = Date.now()
          this.showAnswer = true
        }
        this.difference = dif
        setTimeout(() => {
          this.countDownTimer()
        }, 100)
      }
    },
    genRandomNumber: function () {
      this.randomNumber = Math.floor(Math.random() * 10) + 1
    }
  },
  mounted () {
    this.genRandomNumber()
    this.startTime = Date.now()
    this.countDownTimer()
    // console.log(this.latestShow.questions[this.randomNumber])
  }
}
</script>
