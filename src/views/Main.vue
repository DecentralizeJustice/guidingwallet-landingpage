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
                >
                <div
                class="display-4 font-weight-medium text-center white--text pa-4 text-wrap"
                style="overflow-wrap: break-word;">
                 Guiding Wallet
               <p style="" class="display-1 mt-5">{{heroSubtext}}</p></div>
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
          class="pa-5 textBox"
          style="height:100%;background: white;"
          >
          <div class="text-center mb-4">
            <h2 class="head">Simplify Crypto</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              Guiding Wallet provides you with secure software, comprehensive
              curriculum, and engaging courses that help you:</p>
              <ul class="list mb-5">
                <li>Pick The Right Cryptos</li>
                <li>Secure Your Cryptos</li>
                <li>Use Cryptos Correctly</li>
              </ul>
              <p class="sectionText">
                Guide Wallet is like having experts in the room
               guiding you through every step of using Crypto.</p>
          </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1581391886/landingpage/woman-sharing-her-presentation-with-her-colleagues-3153198.jpg"/>
          </v-col>
        </v-row>
        <v-row
        align="center"
        justify='center'
        id="Download"
          >
          <v-col
            cols="12"
            md="6"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1583995864/landingpage/Screen_Shot_2020-03-12_at_2.49.54_AM.png"/>
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
            <div class="text-center mb-4">
              <h2 class="head">Try Guiding Wallet</h2>
            </div>
            <v-btn
              :href='downloadLink' target="_blank"
              :color='buttonColor'
            >
              <span class="white--text">Download For MAC OS</span>
              <v-icon right class="white--text">mdi-download</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
</template>

<script>
export default {
  name: 'Main',
  components: {
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
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579978238/landingpage/med1.jpg',
    downloadLink: 'https://github.com/DecentralizeJustice/GuidingWallet-DesktopApp/releases/download/v0.1.0/Mac-Demo-GuidingWallet.dmg'
  })
}
</script>
<style scoped>
.head {
  font-size: 3em;
  font-weight: normal;
}
.list {
  font-size: 1.5em;
  font-weight: bold;
}
.sectionText {
  font-size: 1.5em;
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
