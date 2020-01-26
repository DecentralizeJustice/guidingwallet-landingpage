<template>
    <v-container fluid class="pa-0">
        <v-img  :src="mainImg" height='75vh' >
  <v-row class="ma-0">
    <v-col cols="12" height='75vh'>
      <v-row
        align="center"
        justify="center"
        class=""
        style="height: 75vh;background-color:transparent"
      >
        <v-card
          class="transparent"
          outlined
          tile
        >
        <v-card-title primary-title class="layout justify-start">
          <div
          class="display-3 font-weight-medium text-center white--text
          grey darken-3 pa-4"
          style="border-radius: 25px;">
            Find The Right Crypto For You</div>
        </v-card-title>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
        </v-img>

        <v-row
        class="pt-8 pb-8"
          >
            <v-col
            cols="12"
            >
            <div class="text-center">
              <h2 class="display-1">A Wallet That Guides You To Crypto Success</h2>
            </div>
            </v-col>
          </v-row>
          <noButtonGroup
          v-bind:cards='valueProps'/>
          <v-row
          class="pt-5"
            >
              <v-col
              cols="12"
              >
              <div class="text-center">
                <h2 class="display-1">We Only Support Usefull Cryptos</h2>
              </div>
              </v-col>
            </v-row>
          <noButtonGroup
          v-bind:cards='tokens'/>

    </v-container>
</template>

<script>
import noButtonGroup from '@/components/noButtonGroup.vue'
export default {
  name: 'Main',
  components: {
    noButtonGroup
  },
  data: () => ({
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579978238/landingpage/med1.jpg',
    valueProps: [
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579978562/landingpage/undraw_preferences_uuo2.svg',
        title: 'The Best Crypto For You',
        text: `Instead of you scavanging the internet for the best cryptos, we collect all of the most
        usefull cryptos and help you pick which ones are best for you.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579980495/landingpage/undraw_investing_7u74.svg',
        title: 'A High Return Investment',
        text: `Guide Wallet has a innovative curriculmn that allows you to learn
        about crypto. This curriculum helps you make a long lasting investment in yourself that will
        reward you for the rest of your life.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579632764/landingpage/undraw_conversation_h12g.svg',
        title: 'Expert Guidance',
        text: `Guide Wallet offers you one-on-one help from a expert in
        cryptocurrency that allow you to fully explore and utlize the crypto-ecosystem.`
      }
    ],
    tokens: [
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579664861/landingpage/bitcoin-btc-logo.svg',
        title: 'Bitcoin for Savings',
        text: ''
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579664858/landingpage/monero-xmr-logo.svg',
        title: 'Monero for Privacy',
        text: ''
      }
      // {
      //   img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579664863/landingpage/dai-dai-logo.svg',
      //   title: 'Dai for Stability and Loans',
      //   text: ''
      // }
    ]
  })
}
</script>
