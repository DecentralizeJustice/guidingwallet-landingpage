<template>
    <v-container fluid class="pa-0" style="font-size: 100%;">
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
                class="display-4 font-weight-medium text-center white--text ma-4 text-wrap"
                style="overflow-wrap: break-word;">
                 Guiding Wallet
               <p style="" class="display-1 mt-5">{{heroSubtext}}</p></div>
               <v-btn
                 href="#Download"
                 color='#486E70'
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
        <v-container fluid class="mainGrad">
        <v-row
        class="pa-3"
        align="center"
        justify='space-around'
          >
          <v-col
          cols="12"
          md='6'
          class="pa-5 white--text"
          style="height:100%;"
          >
          <div class="text-center mb-4 font-weight-bold">
            <h2 class="display-2 font-weight-bold">Your Guide To Crypto</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              Guiding Wallet provides you with comprehensive
              curriculum and engaging video courses that help you:</p>
              <ul class="list mb-5">
                <li>Pick The Right Cryptos</li>
                <li>Secure Your Cryptos</li>
                <li>Use Cryptos Correctly</li>
              </ul>
              <p class="sectionText">
                Using Guiding Wallet is like having experts
               guiding you through every step of using Crypto.</p>
          </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1585423249/guidingLanding/woman-sharing-her-presentation-with-her-colleagues-3153198.jpg"/>
          </v-col>
        </v-row>
        <videoPlayer v-bind:vidInfo='landingVidInfo'
        v-bind:backgroundColor='buttonColor'/>
        <v-row
        align="center"
        justify='center'
        id="Download"
          >
          <v-col
            cols="12"
            md="6"
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
              :href='macDownloadLink' target="_blank"
              :color='buttonColor'
              class="mb-3"
            >
              <span class="white--text">Download For MAC OS</span>
              <v-icon right class="white--text">mdi-download</v-icon>
            </v-btn>
            <v-btn
              :href='winDownloadLink' target="_blank"
              :color='buttonColor'
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
import videoPlayer from '@/components/vid.vue'
import landingVidInfo from '@/assets/landingVid.js'
export default {
  name: 'Main',
  components: {
    videoPlayer
  },
  computed: {
    textColor: function () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'rgba(39, 39, 39, .9)'
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
    heroSubtext: 'The Cryptocurrency Wallet with Expert Guidance',
    buttonColor: 'rgb(29, 66, 76)',
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1585423370/guidingLanding/person-using-macbook-1181258.jpg',
    macDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet.dmg',
    winDownloadLink: 'https://github.com/DecentralizeJustice/GWDesk/releases/latest/download/GuidingWallet-Setup.exe',
    landingVidInfo: landingVidInfo
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
