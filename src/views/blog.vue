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
                  class="text-center rounded"
                >
                <div
                :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-center white--text ma-7 text-wrap"
                style="overflow-wrap: break-word;">
                 Crypto Propaganda
                </div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-row justify="center"  no-gutters
        class="" style="background-color: #0B5563;height:100%;">
        <v-col cols='11' md='8' style="background-color: #616161;height:100%;" class="rounded my-4 pa-4 white--text">
          <div v-html="rawHtml"></div>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import first from '@/assets/blog/first.md'
import marked from 'marked'
export default {
  name: 'blog',
  data: () => ({
    buttonColor: 'rgb(29, 66, 76)',
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609782872/guidingLanding/pexels-jessica-lewis-606539.jpg'
  }),
  components: {
  },
  methods: {
  },
  computed: {
    rawHtml: function () {
      const html = marked(first)
      return html
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
