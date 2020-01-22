<template>
    <v-container fluid class="pa-0">
        <v-parallax src="https://res.cloudinary.com/dylevfpbl/image/upload/v1579594531/landingpage/fit.jpg"
         height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          <v-card flat class="transparent pt-10">
            <v-card-title primary-title class="layout justify-start">
              <div class="display-3 font-weight-medium text-center white--text" style="line-height: 140%">
                Everybody Needs A Guide<br> In New Places</div>
            </v-card-title>
          </v-card>
          </v-layout>
        </v-parallax>
        <v-row
        class="pt-8 pb-8"
          >
            <v-col
            cols="12"
            >
            <div class="text-center">
              <h2 class="display-1">The Guiding Wallet for The Decentralized World</h2>
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
    valueProps: [
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579632794/landingpage/undraw_winners_ao2o.svg',
        title: 'Only The Best of The Best',
        text: `Instead of hundreds of coins, Guide Wallet only supports the best coins that have a
        proven track record, vast community support, and specialized use cases.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579632829/landingpage/undraw_reading_list_4boi.svg',
        title: 'A High Return Investment',
        text: `Guide Wallet has a revolutionary curriculmn that allows you to learn
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
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579664863/landingpage/dai-dai-logo.svg',
        title: 'Dai for Stability and Loans',
        text: ''
      }
    ]
  })
}
</script>
