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
                  :class="{'textBox': $vuetify.breakpoint.mdAndUp}"
                  tile
                  :flat='flatOnMobile'
                  :color='textColor'
                  class="text-center"
                >
                <div
                :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-center white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Past Trivia Shows
                </div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-row class="ma-0 pa-0" align="center"
        justify="center" style="background-color: #0B5563;" no-gutters>
          <v-col cols="9" style="" no-gutters
          >
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-center white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Latest Show: 12/28
          </div>
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-left white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Summary: <br>
           <p class="text-subtitle-1">{{latestShow.summary}}</p>
          </div>
          </v-col>
          <v-col cols="9" style="" no-gutters
          >
          <div
          :class="{'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
          class="font-weight-medium text-left white--text ma-7 text-wrap"
          style="overflow-wrap: break-word;">
           Questions: <br>
          </div>
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text>
              <div>#1 Question</div>
              <p class="display-1 text--primary">
                {{latestShow.questions[1].questionInfo.question}}
              </p>
              <v-list disabled>
                <v-list-item-group
                >
                  <v-list-item
                    v-for="(item, i) in latestShow.questions[1].questionInfo.options"
                    :key="i"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Show Answer
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p class="display-1 text--primary">
                    {{latestShow.questions[1].questionInfo.options[latestShow.questions[1].answer]}}
                  </p>
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import gameInfo from '@/assets/showInfo.js'
export default {
  name: 'pastTrivia',
  data: () => ({
    buttonColor: 'rgb(29, 66, 76)',
    reveal: false,
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609301405/trivia/pexels-iconcom-231008.jpg'
  }),
  components: {
  },
  methods: {
  },
  computed: {
    latestShow: function () {
      return gameInfo.default[1609040898]
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
.textBox {
  border-radius: 2em;
}
.mobileHero {
  background-color: rgba(39, 39, 39, .85)
}
.mainGrad {
  background-image: linear-gradient(to bottom, rgb(29, 66, 76) , #486E70);
}
</style>
