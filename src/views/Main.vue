<template>
    <v-container fluid class="pa-0 ma-0" style="font-size: 100%;">
        <v-img  :src="mainImg" height='85vh'>
          <v-row class="ma-0">
            <v-col cols="12" height='85vh'
            :class="{'mobileHero': $vuetify.breakpoint.smAndDown}">
              <v-row
                align="center"
                justify="center"
                class="heroImg"
                style="height:85vh;"
              >
              <v-col cols="12" md='7'>
                <v-card
                  :class="{'textBox pa-1': $vuetify.breakpoint.mdAndUp}"
                  tile
                  :flat='flatOnMobile'
                  :color='textColor'
                  class="text-center"
                >
                <div
                :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h3': $vuetify.breakpoint.smAndDown}"
                class="font-weight-medium text-center white--text ma-8 text-wrap"
                style="overflow-wrap: break-word;">
                 {{heroSubtext}}
               <!-- <p style="" class="display-1 mt-5"></p>-->
                </div>
               <v-btn
                 href="#Download"
                 color='#0B5563'
                 class="mb-5"
               >
                 <div class="white--text text-button">Download Wallet</div>
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
          style="background-color: #757575;"
            >
            <v-col
              cols="12"
              class="my-4"
              >
              <div class="text-center"
              :class="{'text-h2': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                <h2 class="font-weight-regular white--text mb-6" style="line-height: 90%;">Most Cryptos are Useless</h2>
                <h2 class="font-weight-regular white--text mt-6" style="line-height: 90%;">We Explore the Useful Ones</h2>
              </div>
            </v-col>
        </v-row>
        <v-row no-gutters style="">
          <v-col
            cols="12"
            >
            <v-parallax style="height:85vh;"
            height="500"
            src="https://res.cloudinary.com/dylevfpbl/image/upload/c_scale,w_1920/v1607490937/flipped.jpg">
            <v-row
                align="center"
              >
                <v-col
                  md='4' offset-md="7"
                  cols='12'
                >
                  <v-card
                    class="pa-2"
                  >
                  <div class="text-center text-h5">
                  Next Trivia Show:
                  </div>
                  <v-row no-gutters align-content='center' justify='space-around' class=""
                  :class="{'text-h5': $vuetify.breakpoint.mdAndUp,
                  'text-h6': $vuetify.breakpoint.smAndDown}">
                    <v-col
                      cols="3"
                    >
                  <div class="mt-2 text-center" >
                    {{tillShowTime.days}} <br>
                    <div :class="{ 'text-subtitle-1': $vuetify.breakpoint.smAndDown}"
                    >
                      Days
                    </div>
                  </div>
                </v-col>
                <v-col
                  cols="3"
                >
                  <div class="mt-2 text-center" >
                    {{tillShowTime.hours}} <br>
                    <div :class="{ 'text-subtitle-1': $vuetify.breakpoint.smAndDown}"
                    >
                      Hours
                    </div>
                  </div>
                </v-col>
                <v-col
                  cols="3"
                >
                  <div class="mt-2 text-center">
                    {{tillShowTime.minutes}} <br>
                    <div :class="{ 'text-subtitle-1': $vuetify.breakpoint.smAndDown}"
                    >
                      Minutes
                    </div>
                  </div>
                </v-col>
                <v-col
                  cols="3"
                >
                  <div class="mt-2 text-center" style="">
                    {{tillShowTime.seconds}} <br>
                    <div :class="{ 'text-subtitle-1': $vuetify.breakpoint.smAndDown}"
                    >
                      Seconds
                    </div>
                  </div>
                </v-col>
                </v-row>
                <div class="text-center mt-3" :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                Pot Size: <br> {{prizeAmount}} USD
                </div>
                <div class="text-center mt-3" :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h4': $vuetify.breakpoint.smAndDown}">
                Quiz Subject: <br> {{subject}}
                </div>
                <div class="text-center">
                <v-btn
                  href="#Download"
                  color='#0B5563'
                  class="mt-5"
                >
                  <div class="white--text text-button">Get Ready</div>
                  <v-icon right class="white--text">mdi-download</v-icon>
                </v-btn>
              </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-parallax>
          </v-col>
        </v-row>
        <v-row
        no-gutters
        align="center"
        justify='space-around'
        style="background-color: #424242;"
          >
          <v-col
          cols="12"
          md='6'
          class="white--text"
          style="height:100%;"
          >
          <div class="text-left pa-4">
            <p class="font-weight-regular" :class="{'text-h2': $vuetify.breakpoint.mdAndUp,
            'text-h3': $vuetify.breakpoint.smAndDown}">
              I created a new way to learn about crypto with:</p>
              <ul class="font-weight-regular mt-3"
              :class="{'text-h4': $vuetify.breakpoint.mdAndUp,
              'text-h5': $vuetify.breakpoint.smAndDown}">
                <li>Crypto Trivia with Crypto Rewards</li>
                <li>Personalized Crypto Education</li>
                <li>Hardware Wallet Based Security</li>
                <li>Personal Support from a Crypto Expert</li>
              </ul>
          </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            class="pa-3"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607644188/pexels-tima-miroshnichenko-5198239_1.jpg"/>
          </v-col>
          <v-btn
            href="#Download"
            color='#0B5563'
            class="my-5"
          >
            <div class="white--text text-button">Explore Crypto</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <v-row
        no-gutters
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #0B5563;"
          >
          <v-col
            cols="12"
            >
            <div class="text-center">
              <h2 class="display-3 font-weight-bold white--text">What I Believe:</h2>
            </div>
          </v-col>
      </v-row>
        <v-row
        no-gutters
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #0B5563;"
          >
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607630309/pexels-joslyn-pickens-3833052.jpg"/>
          </v-col>
          <v-col
          cols="12"
          md='6'
          class=" white--text"
          style="height:100%;"
          color='black'
          >
          <div class="text-center mb-4">
            <h2 class="display-2 font-weight-medium" :class="{
            'mt-3': $vuetify.breakpoint.smAndDown}">1. Cryptos are About Freedom</h2>
          </div>
          <div class="text-left">
            <p class="text-h5 font-weight-regular">
              The Crypto revolution isn't taking place on exchanges or waiting for institutional support.
              It's a revolution that empowers you to take control of your financial freedom and
              avoid abuse from centralized power. This means that you should control your keys and
              make the important choices about your money.
            </p>
          </div>
          </v-col>
          <v-btn
            href="#Download"
            color='#546E7A'
            class="my-5"
          >
            <div class="white--text">Pursue Freedom</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <v-row
        no-gutters
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: rgba(39, 39, 39);"
          >
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          >
          <div class="text-center mb-4">
            <h2 class="display-2 font-weight-medium">2. Cryptos Should be Exciting</h2>
          </div>
          <div class="text-left">
              <p class="text-h5 font-weight-regular">
              Cryptos are the most important inventions of the 21st century and you should feel that way.
              If all you focud on is the price of crypto or what new crypto has an ICO you will miss out
              on the really exciting parts of crypto. Join me as I explore the real exciting parts of Crypto.
              </p>
          </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607630664/pexels-rfstudio-3059748.jpg"/>
          </v-col>
          <v-btn
            href="#Download"
            color='#0B5563'
            class="my-5"
          >
            <div class="white--text">Start Working</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <v-row
                    no-gutters
        align="center"
        justify='space-around'
        class=""
        style="background-color: #546E7A;"
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
            <v-btn
              :href='macDownloadLink' target="_blank"
              color='#0B5563'
              class="mb-3"
              :class="{'button': $vuetify.breakpoint.mdAndUp,
              'button': $vuetify.breakpoint.smAndDown}"
            >
              <span class="white--text d-md-none">Download For MAC</span>
              <span class="white--text hidden-sm-and-down">Download For MAC (No Big Sur)</span>
              <v-icon right class="white--text">mdi-download</v-icon>
            </v-btn>
            <v-btn
              :href='winDownloadLink' target="_blank"
              color='#0B5563'
            >
              <span class="white--text">Download For Windows 10</span>
              <v-icon right class="white--text">mdi-download</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row
        no-gutters
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #0B5563;"
          >
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607632279/test.jpg"/>
          </v-col>
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          >
          <div class="font-weight-medium text-center my-3" :class="{'text-h3': $vuetify.breakpoint.mdAndUp,
            'text-h4': $vuetify.breakpoint.smAndDown}">
            Behind Guiding Wallet
          </div>
          <div class="text-left">
              <p class="text-h5">
              When I first learned about "magical internet money", I was confused but extremely intrigued.
              After studying Crypto more I became hooked, and
              I decided to take the plunge and help fullfill what I saw as the Crypto Promise.
              After years of studying and coding, I created Guiding Wallet as a way ensure that Crypto kept its Promise of freedom for all people.
               - Donely Gunn
              </p>
          </div>
          <div class="text-center mt-3">
            <v-btn
              href="#Download"
              color='#546E7A'
              class="mb-5"
            >
              <div class="white--text">Join Me</div>
              <v-icon right class="white--text">mdi-download</v-icon>
            </v-btn>
          </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
</template>

<script>
const TIMEOUT = 1
export default {
  name: 'Main',
  components: {
  },
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
  },
  data: () => ({
    subject: 'Bitcoin',
    startTime: 1610672400,
    difference: 1000,
    prizeAmount: 50,
    heroSubtext: 'A Guided Crypto Journey',
    buttonColor: 'rgb(29, 66, 76)',
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1609471688/guidingLanding/pexels-flo-maderebner-869258_1.jpg',
    macDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet.dmg',
    winDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet-Setup.exe'
  })
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
