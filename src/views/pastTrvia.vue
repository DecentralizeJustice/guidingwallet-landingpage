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
                 Past Trivia Info
                </div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-row class="ma-0 pa-0" align="center"
        justify="center" style="background-color: #0B5563;" no-gutters>
          <v-col cols="12" md='9' style="" no-gutters
          >
          <div
          :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-center white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Last Show: {{latestDate}}<br>
          </div>
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-left white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Summary: <br>
           <p class="text-subtitle-1 pa-3 mt-3 rounded" style="background-color: #616161;">{{latestShow.summary}}</p>
          </div>
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-left white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Trivia Info: <br>
           <v-row class="ma-0 pa-0" align="center" no-gutters justify='center' >

           <v-col cols="8" md="3" style="background-color: #424242;" no-gutters
           class="text-center rounded my-3 pa-3 mx-2"
           v-for="(fact, x) in getFacts(this.latestShow)"
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
          </div>
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-left white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Link to Slide and Notes PDF: <br> <a :href="this.latestShow.notesLink" target="_blank" >
             <v-btn style="background-color: #546E7A;" class="white--text mt-3">Click To View Notes</v-btn></a>
          </div>
          </v-col>
          <v-col cols="12" md='9' style="" no-gutters
          >
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3 text-center': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-left white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Questions:
          </div>
          <v-row class="ma-0 pa-0" align="center"
          justify="space-around" no-gutters>
          <v-col cols="11" md="5" style="" no-gutters
          v-for="index in 10" :key="index"
          >
          <v-card
            class="my-2 white--text"
            style="background-color: #424242;"
          >
            <v-card-text>
              <div class="white--text text-h4">#{{index}}</div>
              <p class="display-1 white--text">
                {{latestShow.questions[index].questionInfo.question}}
              </p>
              <v-list disabled style="background-color: #424242;">
                <v-list-item-group
                >
                  <v-list-item
                    v-for="(item, i) in latestShow.questions[index].questionInfo.options"
                    :key="i"
                  >
                    <v-list-item-content >
                      <v-list-item-title v-text="item"
                      class="text-h6 white--text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="blue lighten-5"
                @click="showAnswer(index)"
              >
                Show Answer
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
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
            </v-expand-transition>
          </v-card>
          </v-col>
          </v-row>
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-0" align="center" id='triviaHistory'
        justify="center" style="background-color: #0B5563;" no-gutters>
          <v-col cols="11" md='9' style="" no-gutters class="mt-3 text-center"
          >
          <div class="text-h2 text-center white--text text-wrap my-5 font-weight-medium " :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
            More Past Trivia Shows</div>
          <div class="text-h2 text-center white--text text-wrap my-5 font-weight-medium ">🧐</div>
        <v-expansion-panels>
          <v-expansion-panel style="background-color: #212121;"
            v-for="(item,i) in oldShows"
            :key="i"
            class="white--text"
          >
            <v-expansion-panel-header>
              1st Show - {{getDate(item.time)}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="ma-0 pa-0" align="center"
              justify="center" style="background-color: #546E7A;" no-gutters>
                <v-col cols="12" md='9' style="" no-gutters
                >
                <div
                :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-left white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Summary: <br>
                 <p class="text-subtitle-1 pa-3 mt-3 rounded" style="background-color: #616161;">{{item.info.summary}}</p>
                </div>
                <div
                :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-left white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Trivia Info: <br>
                 <v-row class="ma-0 pa-0" align="center" no-gutters justify='center' >
                 <v-col cols="11" md="3" style="background-color: #424242;" no-gutters
                 class="text-center rounded my-3 pa-3 mx-2"
                 v-for="(fact, x) in getFacts(item.info)"
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
                </div>
                <div
                :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-left white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Link to Slide and Notes PDF: <br> <a :href="item.info.notesLink" target="_blank" >
                   <v-btn style="background-color: #0B5563;" class="white--text mt-3">Click To View Notes</v-btn></a>
                </div>
                </v-col>
                <v-col cols="12" md='9' style="" no-gutters
                >
                <div
                :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3 text-center': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-left white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Questions:
                </div>
                <v-row class="ma-0 pa-0" align="center"
                justify="space-around" no-gutters>
                <v-col cols="11" md="5" style="" no-gutters
                v-for="index in 10" :key="index"
                >
                <v-card
                  class="my-2 white--text text-left"
                  style="background-color: #424242;"
                >
                  <v-card-text>
                    <div class="white--text text-h4 text-center py-2">#{{index}}</div>
                    <p class="display-1 white--text">
                      {{item.info.questions[index].questionInfo.question}}
                    </p>
                    <v-list disabled style="background-color: #424242;">
                      <v-list-item-group
                      >
                        <v-list-item
                          v-for="(item, i) in item.info.questions[index].questionInfo.options"
                          :key="i"
                        >
                          <v-list-item-content >
                            <v-list-item-title v-text="item"
                            class="text-h6 white--text"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn
                      color="blue lighten-5"
                      @click="showAnswer(item.time + '-' + index)"
                    >
                      Show Answer
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card
                    flat rounded='0'
                      v-if="showAnswerInfo[item.time + '-' + index] !== undefined"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="background-color: #0B5563;"
                    >
                      <v-card-text class="">
                        <p class="display-1 white--text">
                          {{item.info.questions[index].questionInfo.options[item.info.questions[index].answer]}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-expand-transition>
                </v-card>
                </v-col>
                </v-row>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import gameInfo from '@/assets/showInfo.js'
export default {
  name: 'pastTrivia',
  data: () => ({
    showAnswerInfo: {},
    buttonColor: 'rgb(29, 66, 76)',
    reveal: false,
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609301405/trivia/pexels-iconcom-231008.jpg'
  }),
  components: {
  },
  methods: {
    showAnswer: function (index) {
      console.log(index)
      const clone = Object.assign({}, this.showAnswerInfo)
      clone[index] = true
      this.showAnswerInfo = clone
    },
    getDate: function (date) {
      const d = new Date(date * 1000)
      const day = d.getDate()
      const month = d.getMonth() + 1
      const year = d.getFullYear()
      return day + '/' + month + '/' + year
    },
    getFacts: function (showInfo) {
      const info = []
      info.push([showInfo.potSize + ' USD', 'Potsize', 'cash'])
      info.push([showInfo.subject, 'Subject', 'book'])
      info.push(['#' + showInfo.killerQuestion, 'Most Missed Question', 'bullseye-arrow'])
      info.push([showInfo.totalWinners, 'Total Winners', 'emoticon-cool-outline'])
      // info.push([this.latestShow.potPerWinner + ' USD', 'Each Winners Prize', 'account-cash'])
      info.push([showInfo.paymentMethod, 'Payment Crypto', showInfo.paymentMethodIcon])
      return info
    }
  },
  computed: {
    latestDate: function () {
      const d = new Date(this.lateShowTime * 1000)
      const date = d.getDate()
      const month = d.getMonth() + 1
      const year = d.getFullYear()
      return date + '/' + month + '/' + year
    },
    sortedKeys: function () {
      const keys = Object.keys(gameInfo.default)
      const sortedKeys = keys.sort()
      return sortedKeys
    },
    lateShowTime: function () {
      const int = parseInt(this.sortedKeys.slice(-1).pop())
      return int
    },
    oldShows: function () {
      const reversedKeyList = this.sortedKeys.slice(0, -1).reverse()
      const gameList = []
      for (let i = 0; i < reversedKeyList.length; i++) {
        const tempObject = {}
        tempObject.time = reversedKeyList[i]
        tempObject.info = gameInfo.default[reversedKeyList[i]]
        gameList.push(tempObject)
      }
      return gameList
    },
    latestShow: function () {
      return gameInfo.default[this.lateShowTime]
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
