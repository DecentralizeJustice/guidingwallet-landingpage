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
                 Frequently Asked Questions
                </div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-row justify="center" v-for="(item,i) in faqData" no-gutters
        :key="i" class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='8' class="text-h4 my-5 white--text rounded pa-2 text-center" style="background-color: grey;">
          {{item.title}}
          <v-row justify="center">
          <v-col cols='11' class="">
          <v-expansion-panels focusable v-for="(question,i) in item.questions"
          :key="i" style="background-color: grey;">
            <v-expansion-panel
            class="my-2"
            >
              <v-expansion-panel-header class="text-h6">{{question.q}}</v-expansion-panel-header>
                <v-expansion-panel-content class="my-2 text-body-1 text-left">
                  {{question.a}}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import faqInfo from '@/assets/faq.js'
export default {
  name: 'pastTrivia',
  data: () => ({
    buttonColor: 'rgb(29, 66, 76)',
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609625586/guidingLanding/pexels-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C-%D0%B2%D0%BE%D0%B2%D0%BA-4405368_1.jpg'
  }),
  components: {
  },
  methods: {
  },
  computed: {
    faqData: function () {
      return faqInfo.default
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
