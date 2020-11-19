<template>
    <v-container fluid class="pa-0 ma-0" style="font-size: 100%;">
        <v-img  :src="mainImg" height='75vh'>
          <v-row class="ma-0">
            <v-col cols="12" height='75vh'
            :class="{'mobileHero': $vuetify.breakpoint.smAndDown}">
              <v-row
                align="center"
                justify="center"
                class="heroImg"
                style="height:75vh;"
              >
                <v-card
                  :class="{'textBox': $vuetify.breakpoint.mdAndUp}"
                  tile
                  :flat='flatOnMobile'
                  :color='textColor'
                  class="text-center"
                >
                <div
                class="display-3 font-weight-medium text-center white--text ma-8 text-wrap"
                style="overflow-wrap: break-word;">
                 {{heroSubtext}}
               <!-- <p style="" class="display-1 mt-5"></p>-->
                </div>
               <v-btn
                 href="#Download"
                 color='#0B5563'
                 class="mb-5"
               >
                 <div class="white--text">Download Wallet</div>
                 <v-icon right class="white--text">mdi-download</v-icon>
               </v-btn>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-container fluid style="background-color: #546E7A;">
        <v-row
        class="pa-3 ma-0"
        align="center"
        justify='space-around'
          >
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          >
          <div class="text-center mb-4">
            <h2 class="display-3 font-weight-bold">Cryptos Are Hard To Use</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              Guiding Wallet makes Cryptos easier and simpler with an All-in-One wallet that:</p>
              <ul class="list mb-5">
                <li>Guides You with Crypto Courses</li>
                <li>Helps You Use and Store Cryptos Securely</li>
                <li>Answers Your Specific Questions about Crypto</li>
              </ul>
              <p class="sectionText">
              Cryptos are hard. Don't make them harder by not getting help and attempting a D.I.Y. Solution.
              </p>

          </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1585423249/guidingLanding/woman-sharing-her-presentation-with-her-colleagues-3153198.jpg"/>
          </v-col>
          <v-btn
            href="#Download"
            color='#0B5563'
            class="mb-5"
          >
            <div class="white--text">Get Guiding Wallet</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <v-row
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #0B5563;"
          >
          <v-col
            cols="12"
            >
            <div class="text-center mb-7">
              <h2 class="display-3 font-weight-bold white--text">Steps To Using Guiding Wallet:</h2>
            </div>
          </v-col>
      </v-row>
        <v-row
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #0B5563;"
          >
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1605753604/guidingLanding/Screen_Shot_2020-11-18_at_9.36.52_PM.png"/>
          </v-col>
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          color='black'
          >
          <div class="text-center mb-4">
            <h2 class="display-3 font-weight-medium">
            Step 1: Learn About Crypto</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              Your Crypto Journey starts by taking in wallet courses that teach you:</p>
              <ul class="list mb-5">
                <li>What are Cryptocurrencies</li>
                <li>Which cryptos you should use</li>
                <li>How and Where To Buy Crypto</li>
              </ul>
              <p class="sectionText">
              These courses consolidate decades of crypto knowldege into simple lessons and quizes.
              These Courses save you months of research and ensure that you learn the right things.
              </p>
          </div>
          </v-col>
          <v-btn
            href="#Download"
            color='#546E7A'
            class="mb-5"
          >
            <div class="white--text">Start Learning About Crypto</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <v-row
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #546E7A;"
          >
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          >
          <div class="text-center mb-4">
            <h2 class="display-3 font-weight-medium">Step 2: Use Cryptos</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              Guiding Wallet is designed as a easy and safe way to store crypto. Using crypto safely is easy becuase we:</p>
              <ul class="list mb-5">
                <li>Support Hardware Wallets</li>
                <li>Guide You On How to Use Other Software Wallets</li>
                <li>Help you avoid common crypto pitfalls such as exchange hacks and computer hacks</li>
              </ul>
              <p class="sectionText">
              Guiding Wallet lest you store cryptos with hardware wallets and is 100% open source, both necessities for crypto security.
              </p>
          </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1605753597/guidingLanding/Screen_Shot_2020-11-18_at_9.36.29_PM.png"/>
          </v-col>
          <v-btn
            href="#Download"
            color='#0B5563'
            class="mb-5"
          >
            <div class="white--text">Use Cryptos With Confidence</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <v-row
        class="pa-3"
        align="center"
        justify='space-around'
        style="background-color: #0B5563;"
          >
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1605753611/guidingLanding/Screen_Shot_2020-11-18_at_9.37.13_PM.png"/>
          </v-col>
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          >
          <div class="text-center mb-4">
            <h2 class="display-3 font-weight-medium">
            Step 3: Build Your Crypto Experience</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              As You Build more crypto experience, Guiding Wallet offers You:</p>
              <ul class="list mb-5">
                <li>Advanced Crypto Course</li>
                <li>More Secure ways to store Crypto</li>
                <li>Advanced Lessons on Privacy and Security</li>
                <li>The Ability to Ask Experts Questions</li>
              </ul>
              <p class="sectionText">
              Guiding Wallet is a neccesstiy for every crypto user, even to thsoe who are not new to crypto.
              </p>
          </div>
          </v-col>
          <v-btn
            href="#Download"
            color='#546E7A'
            class="mb-5"
          >
            <div class="white--text">Build Crypto Experience</div>
            <v-icon right class="white--text">mdi-download</v-icon>
          </v-btn>
        </v-row>
        <!-- <videoPlayer v-bind:vidInfo='landingVidInfo'
        v-bind:backgroundColor='buttonColor'/> -->
        <v-row
        align="center"
        justify='center'
        class="pt-3"
        style="background-color: #546E7A;"
          >
          <v-col
            cols="6"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1585423849/guidingLanding/Screen_Shot_2020-03-28_at_3.29.48_PM.png"/>
          </v-col>
          <v-col
            cols="10"
            md="4"
            offset-md='1'
            style="background: white;"
            class="pa-3 textBox"
            align='center'
            :class="{'mb-5': $vuetify.breakpoint.smAndDown}"
            >
            <div class="title mb-4">
              <h2 class="">Download Guiding Wallet</h2>
            </div>
            <v-btn
              id="Download"
              :href='macDownloadLink' target="_blank"
              color='#0B5563'
              class="mb-3"
            >
              <span class="white--text">Download For MAC OS</span>
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
      </v-container>
    </v-container>
</template>

<script>
// import videoPlayer from '@/components/vid.vue'
export default {
  name: 'Main',
  components: {
    // videoPlayer
  },
  computed: {
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
  data: () => ({
    heroSubtext: 'All-in-One Crypto Wallet',
    buttonColor: 'rgb(29, 66, 76)',
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1585423370/guidingLanding/person-using-macbook-1181258.jpg',
    macDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet.dmg',
    winDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet-Setup.exe'
  })
}
</script>
<style scoped>
.list {
  font-size: 1.8em;
  font-weight: bold;
}
.sectionText {
  font-size: 1.8em;
}
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
