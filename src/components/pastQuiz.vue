<template>
    <v-col
      cols="12" md='6'
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
          {{questionInfo[randomNumber].questionInfo.question}}
        </p>
        <v-list rounded>
          <v-list-item-group
          color='primary'
          v-model="chosen"
          >
            <v-list-item
              v-for="(item, i) in questionInfo[randomNumber].questionInfo.options"
              :key="i"
              color='primary'
              @click='select(i)'
            >
              <v-list-item-content >
                <v-list-item-title v-text="item" color='primary'
                class="text-h6"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-col v-if='correct' cols='12' md="6" class="mx-auto">
          <v-alert
            color="success"
            icon="mdi-check-bold"
            prominent
            border="left"
            class="text-center white--text text-h4"
          > Correct!!! <br> 😎
            </v-alert>
        </v-col>
        <div v-if='showAnswer' class="text-h4 black--text mt-3">
        <div class="ma-0 pa-0 text-h6 mb-1">Answer: </div>
        {{answerText}}
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
      </v-card-actions>
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
    timeToAnswer: 12,
    timeToPonder: 5,
    difference: 2,
    showAnswer: false,
    chosen: undefined,
    correct: false,
    questionInfo: []
  }),
  computed: {
    answerText: function () {
      return this.questionInfo[this.randomNumber].questionInfo.options[this.answerIndex]
    },
    answerIndex: function () {
      return this.questionInfo[this.randomNumber].answer
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
    getAllQuestionInfo: function () {
      const questionInfo = []
      for (const game in gameInfo.default) {
        for (const question in gameInfo.default[game].questions) {
          if (question !== 'hv') {
            questionInfo.push(gameInfo.default[game].questions[question])
          }
        }
      }
      return questionInfo
    },
    select (i) {
      this.chosen = i
    },
    checkAnswer () {
      if (parseInt(this.chosen) === parseInt(this.answerIndex)) {
        this.correct = true
      }
    },
    countDownTimer () {
      const current = Date.now()
      this.difference = current - this.startTime
      if (this.showAnswer) {
        if (this.difference > this.timeToPonder * 1000) {
          this.chosen = undefined
          this.startTime = current
          this.showAnswer = false
          this.correct = false
          this.genRandomNumber()
          this.countDownTimer()
          return
        }
        setTimeout(() => {
          this.countDownTimer()
        }, 800)
      } else {
        if (this.difference > this.timeToAnswer * 1000) {
          this.checkAnswer()
          this.startTime = current
          this.showAnswer = true
          this.countDownTimer()
          return
        }
        setTimeout(() => {
          this.countDownTimer()
        }, 800)
      }
    },
    genRandomNumber: function () {
      const maxNotInclusive = this.questionInfo.length
      this.randomNumber = Math.floor(Math.random() * maxNotInclusive)
    }
  },
  beforeMount () {
    this.questionInfo = this.getAllQuestionInfo()
    this.genRandomNumber()
    this.startTime = Date.now()
    this.countDownTimer()
  }
}
</script>
