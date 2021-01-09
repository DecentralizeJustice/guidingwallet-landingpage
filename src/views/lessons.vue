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
                 Courses & Lessons
                </div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <vid style="background-color: #0B5563;height:100%;"/>
        <v-row justify="center" no-gutters
        class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='6' class="text-h4 my-5 white--text rounded pa-2 text-center" style="background-color: grey;">
          Browse Lessons Below; <br>Full Lessons In Wallet
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters
        class="white--text text-h4 pt-3" style="background-color: #0B5563;height:100%;">
          <v-col cols='11' md='9'>
            Courses:
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters
        class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='4' class="text-h4 my-5 white--text rounded pa-2 text-center" style=""
          v-for="(item,i) in lessonInfo.courses" no-gutters
          :key="i">
            <v-card
            ><v-card-title>{{item.title}}</v-card-title>
              <v-card-text>
                <div class="black--text text-left">
                  {{item.goodFor}}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="#0B5563"
                  @click="showLessons(i)"
                  class="white--text"
                >
                  View Lessons
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <v-card
                  v-if="reveal[i] === true"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h5 text--primary">
                      Lessons:
                    </p>
                    <v-list disabled style="">
                      <v-list-item-group
                      >
                        <v-list-item
                          v-for="(lesson, index) in item.lessons"
                          :key="index"
                        >
                          <v-list-item-content >
                            <v-list-item-title v-text="lesson"
                            class="text-h6 text-left"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn
                      color="#0B5563"
                      class="white--text"
                      @click="hideLesson(i)"
                    >
                      Hide Lessons
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters
        class="white--text text-h4" style="background-color: #0B5563;height:100%;">
          <v-col cols='11' md='9'>
            Standalone Lessons:
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters
        class="" style="background-color: #0B5563;height:100%;">
          <v-col cols='10' md='4' class="text-h4 my-5 white--text rounded pa-2" style=""
          :class="{'text-left': $vuetify.breakpoint.mdAndUp, 'text-center': $vuetify.breakpoint.smAndDown}"
          v-for="(justLesson,i) in lessonInfo.lessons" no-gutters
          :key="i">
            <v-card
            ><div class="text-h5 pa-5">{{justLesson}}</div>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import lessonInfo from '@/assets/lessons.js'
import vid from '@/components/vidController.vue'
export default {
  name: 'lessons',
  data: () => ({
    buttonColor: 'rgb(29, 66, 76)',
    reveal: {},
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609649462/guidingLanding/pexels-element-digital-1370295.jpg'
  }),
  components: {
    vid
  },
  methods: {
    showLessons: function (index) {
      const clone = Object.assign({}, this.reveal)
      clone[index] = true
      this.reveal = clone
    },
    hideLesson: function (index) {
      const clone = Object.assign({}, this.reveal)
      clone[index] = false
      this.reveal = clone
    }
  },
  computed: {
    lessonInfo: function () {
      return lessonInfo.default
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
