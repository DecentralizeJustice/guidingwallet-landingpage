<template>
    <v-container fluid class="pa-0 ma-0" style="font-size: 100%;">
        <v-img  :src="mainImg" height='60vh'>
          <v-row class="ma-0">
            <v-col cols="12" height='60vh'
            :class="{'mobileHero': $vuetify.breakpoint.smAndDown}">
              <v-row
                align="center"
                justify="center"
                class="heroImg"
                style="height:60vh;"
              >
              <v-col cols="12" md='6'>
                <v-card
                  :class="{'textBox pa-1': $vuetify.breakpoint.mdAndUp}"
                  tile
                  :flat='flatOnMobile'
                  :color='textColor'
                  class="text-center"
                >
                <div
                :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-center white--text ma-4 text-wrap"
                style="overflow-wrap: break-word;" v-html='heroSubtext'>
               <!-- <p style="" class="display-1 mt-5"></p>-->
                </div>
               <v-btn
                 href="#About"
                 color='#0B5563'
                 class="mb-5"
               >
                 <div class="white--text text-button">Learn More</div>
                 <v-icon right class="white--text">mdi-download</v-icon>
               </v-btn>
                </v-card>
                </v-col>
                  <!-- <v-col cols="6">
                      <v-img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607637870/Screen_Shot_2020-12-10_at_5.04.16_PM.png"
                      aspect-ratio="1.4">
                    </v-img>
                  </v-col> -->
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-container fluid style="background-color: #546E7A;" class="ma-0 pa-0">
          <v-row
          no-gutters
          class="pa-3"
          align="center"
          justify='space-around'
          :class="{'big': $vuetify.breakpoint.mdAndUp, 'small': $vuetify.breakpoint.smAndDown}"
            >
            <v-col
              cols="12"
              class="my-4"
              >
              <div class="text-center"
              :class="{'text-h4 pa-3': $vuetify.breakpoint.mdAndUp,
              'text-h5': $vuetify.breakpoint.smAndDown}">
                <h2 class="font-weight-regular white--text" style="line-height: 100%;">
                  How We Help You Use Crypto
                  <!-- If we want freedom and privacy, we must persuade others that these are worth having. – Hal Finney  -->
                </h2>
              </div>
            </v-col>
            <v-col
              cols="10"
              md='3'
              class="my-4"
              v-for="(item, index) in offers"
              :key='index'
              >
              <v-card
                class="mx-auto"
                outlined
              >
              <div class="text-center mt-2">
              <v-icon style="font-size: 400%;" class="mx-auto"
              color="teal lighten-2">{{item.icon}}</v-icon>
              </div>
              <v-card-title class="headline text-center justify-center text-break">
                {{item.title}}
              </v-card-title>
              <div class="ma-2 pa-2">
                {{item.summary}}
              </div>
              <v-card-actions class="justify-center">
                <div class="text-center">
                <router-link :to="item.link" style="text-decoration:none">
                <v-btn
                  rounded
                  color="teal lighten-2"
                  class="white--text text-button"
                >
                  {{item.cat}}
                </v-btn>
              </router-link>
            </div>
              </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters align="center"
        style="background-color: #0B5563;"
        justify='space-around'
        class="pa-4"
        id='Game'
        >
        <v-col
          cols="12"
          class="my-4"
          id='tryquiz'
          >
          <div class="text-center"
          :class="{'text-h4 pa-3': $vuetify.breakpoint.mdAndUp,
          'text-h5': $vuetify.breakpoint.smAndDown}">
            <h2 class="font-weight-regular white--text" style="line-height: 100%;">
              Test Your Crypto Smarts 🤓
            </h2>
          </div>
        </v-col>
                <v-col
                  md='4'
                  cols='12'
                >
                  <v-card
                    class="pa-2 ma-2"
                  >
                  <div class="text-center text-h5 pa-3 rounded mx-auto white--text"
                  style="background-color: #424242; width:75%;">
                  Learn & Win Crypto
                  </div>
                  <div class="text-center mt-3" :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                  Next Game Show:
                  </div>
                  <v-row no-gutters align-content='center' justify='space-around' class=""
                  :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                    <v-col
                      cols="10"
                    >
                  <div class="mt-2 text-center" >
                    <div :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}"
                    >
                      {{regularTime}}
                    </div>
                  </div>
                </v-col>
                </v-row>
                <div class="text-center mt-3"
                :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                Winner Pot Size: <br> {{prizeAmount}} USD
                </div>
                <!-- <div class="text-center mt-3"
                :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                Donation Pot Size: <br> {{donationAmount}} USD
                </div> -->
                <div class="text-center mt-3"
                :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                Subject: <br> {{subject}}
                </div>
                <div class="text-center">
                <v-btn
                  href="/triviaInfo"
                  color='#0B5563'
                  class="mt-5"
                >
                  <div class="white--text text-button">Learn More</div>
                  <!-- <v-icon right class="white--text">mdi-download</v-icon> -->
                </v-btn>
              </div>
                  </v-card>
                </v-col>
                <miniGame/>
        </v-row>
        <v-row
        no-gutters
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #546E7A;"
          >
          <v-col
            cols="12"
            md="5"
            order-sm="5"
            order-md="1"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607632279/test.jpg"/>
          </v-col>
          <v-col
          id='About'
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          order-sm="1"
          order-md="5"
          >
          <div class="font-weight-medium text-center my-3" :class="{'text-h3': $vuetify.breakpoint.mdAndUp,
            'text-h4': $vuetify.breakpoint.smAndDown}">
            Why I Made Guiding Wallet
          </div>
          <div class="text-left">
              <p class="text-h5">
                Cryptos were built on a promise of financial freedom and privacy for those willing to use them.
                Although its a good thing that crypto has grown and seen more use,  this fundamental
                promise has been weakened. I made Guiding Wallet as a way for people
                to use different crypto currencies, but without compromising on fundamental
                promise of financial freedom and privacy that was at the core of their foundation.
               <br> - Donely Gunn 😎
              </p>
          </div>
          <div class="text-center">
          <v-btn
            href="/faq"
            color='#0B5563'
            class="mt-5"
          >
            <div class="white--text text-button">Explore More</div>
          </v-btn>
        </div>
          </v-col>
        </v-row>
        <v-row
                    no-gutters
        align="center"
        justify='space-around'
        class=""
        style="background-color: #0B5563;"
                      id="Download"
          >
          <v-col
            cols="12" md='6'
            class=""
            :class="{'ma-3': $vuetify.breakpoint.mdAndUp,
            'pa-1': $vuetify.breakpoint.smAndDown}"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607637870/Screen_Shot_2020-12-10_at_5.04.16_PM.png"/>
          </v-col>
          <v-col
            cols="10"
            md="4"
            offset-md='1'
            style="background: white;"
            class="pa-3 textBox"
            align='center'
            :class="{'my-5': $vuetify.breakpoint.smAndDown}"
            >
            <div class="title mb-4">
              <h2 class="">Download Guiding Wallet</h2>
            </div>
            <v-row>
            <v-col cols='12' class="ma-0 pa-0">
              <v-btn
                :href='macDownloadLink' target="_blank"
                color='#546E7A'
                class="mb-3 mt-3"
                :class="{'button': $vuetify.breakpoint.mdAndUp,
                'button': $vuetify.breakpoint.smAndDown}"
              >
                <span class="white--text d-md-none">MAC</span>
                <span class="white--text hidden-sm-and-down">MAC (No Big Sur)</span>
                <v-icon right class="white--text">mdi-download</v-icon>
              </v-btn>
            </v-col>
            <v-col cols='12' no-gutters class="ma-0 pa-0">
            <v-btn
              :href='winDownloadLink' target="_blank"
              color='#546E7A' class="mb-3"
            >
              <span class="white--text">Windows 10</span>
              <v-icon right class="white--text">mdi-download</v-icon>
            </v-btn>
          </v-col>
          </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
</template>

<script>
import miniGame from '@/components/pastQuiz.vue'
import triviaInfo from '@/assets/trivia.js'
const TIMEOUT = 1
export default {
  name: 'Main',
  components: {
    miniGame
  },
  data: () => ({
    offers: [
      {
        summary: `My Gameshow helps you learn about crypto and win some.
        These gameshows keep your crypto smarts sharp and help us spread the crypto gosepel without spammy ads.`,
        title: 'Informative Gameshows',
        cat: 'Try Past Quizes',
        icon: 'mdi-gamepad-variant',
        link: '#Game'
      },
      {
        summary: `My courses help you learn where you fit into the crypto space. I also cover everything from
        how to own your crypto to who crypto pioneers like Hal Finney are.`,
        title: 'Engaging Courses',
        cat: 'View Courses',
        icon: 'mdi-book',
        link: 'lessons'
      },
      {
        summary: `Hardware Wallets are the culmination of years of work focused on crypto security
        and vital for crypto security.
        I adore and love them; I will help you learn to love them also.`,
        title: 'Simple Security',
        cat: 'Learn More',
        icon: 'mdi-lock-check',
        link: 'faq'
      }
    ],
    difference: 1000,
    heroSubtext: `Security isn't bought; <br>It's Learned`, // eslint-disable-line
    buttonColor: 'rgb(29, 66, 76)',
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609951935/guidingLanding/pexels-mateusz-dach-454507.jpg',
    macDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet.dmg',
    winDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet-Setup.exe'
  }),
  methods: {
    countDownTimer () {
      if (this.difference > 0) {
        setTimeout(() => {
          const current = Date.now()
          this.difference = (this.startTime * 1000) - current
          this.countDownTimer()
        }, 1000)
      }
    },
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT) // eslint-disable-line
    }
  },
  computed: {
    subject: function () {
      return triviaInfo.default.subject
    },
    startTime: function () {
      return triviaInfo.default.startTime
    },
    prizeAmount: function () {
      return triviaInfo.default.prizeAmount
    },
    donationAmount: function () {
      return triviaInfo.default.donatationAmount
    },
    regularTime: function () {
      const d = new Date(parseInt(this.startTime) * 1000)
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
      return hour + ':' + minutes + ' ' + ampm + ' ' + month + ' ' + day
    },
    tillShowTime: function () {
      const distance = this.difference
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      return {
        days, hours, minutes, seconds
      }
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
    this.countDownTimer()
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },
  watch: {
    $route (to, from) {
      if (this.$route.hash) {
        setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
      }
    }
  }
}
</script>
<style scoped>
.textBox {
  border-radius: 2em;
}
.big {
  background-color: #424242;
}
.small {
  background-color: #9E9E9E;
}
.mobileHero {
  background-color: rgba(39, 39, 39, .85)
}
.mainGrad {
  background-image: linear-gradient(to bottom, rgb(29, 66, 76) , #486E70);
}
</style>
