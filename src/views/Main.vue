<template>
    <v-container fluid class="pa-0" style="font-size: 100%;">
        <v-img  :src="mainImg" height='75vh' gradient='to top right, rgba(30, 102, 102, .9), rgba(46, 49, 49, .9)'>
          <v-row class="ma-0">
            <v-col cols="12" height='75vh'>
              <v-row
                align="center"
                justify="center"
                class=""
                style="height:75vh;background-color:transparent"
              >
                <v-card
                  class="transparent"
                  outlined
                  tile
                >
                <div
                class="display-4 font-weight-bold text-center white--text pa-4 text-wrap"
                style="overflow-wrap: break-word">
                 Guiding Wallet
               <p style="" class="headline mt-5">The Cryptocurrency Wallet with Expert Guidance</p></div>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
        <v-row
        class=""
        align="center"
        style="background: #77D5D5;"
          >
          <v-col
          cols="12"
          md='6'
          class="pa-10"
          style="height:100%"
          >
          <div class="text-center mb-4">
            <h2 class="head">Simplify Crypto</h2>
          </div>
          <div class="text-left">
            <p class="sectionText">
              Guiding Wallet provides you with secure software, comprehensive
              curriculum, and engaging lessons that help you:</p>
              <ul class="list mb-5">
                <li>Pick Cryptos with Confidence</li>
                <li>Secure Your Cryptos</li>
                <li>Use Cryptos Appropriately</li>
              </ul>
              <p class="sectionText">
                Guide Wallet is like having experts in the room
               guiding you through every step of using Crypto.</p>
          </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            style="height:100%"
            class="pa-0"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1581391886/landingpage/woman-sharing-her-presentation-with-her-colleagues-3153198.jpg"/>
          </v-col>
        </v-row>

        <!-- <v-row
        class=""
          >
          <v-col
          cols="12"
          class="pa-5"
          style="background:#ACEDED;"
          >
            <v-row
            class=""
              >
              <v-col
              cols="7"
              class="pa-7"
              >
              <div class="text-center">
                <h2 class="display-1">Simplify Crypto</h2>
              </div>
              <div class="text-left">
                <p class="headline">
                  Guiding Wallet provides you with secure software, comprehensive
                  curriculum, and engaging lessons that help you:</p>
                  <ul>
                    <li>Pick Cryptos with Confidence</li>
                    <li>Secure Your Cryptos</li>
                    <li>Use Cryptos Appropriately</li>
                  </ul>
                  <p class="headline">
                    Guide Wallet is like having experts in the room
                   guiding you through every step of using Crypto.
                    </p>
              </div>
              </v-col>
              <v-col
                cols="5"
                >
                <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1581391886/landingpage/woman-sharing-her-presentation-with-her-colleagues-3153198.jpg"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row> -->
    </v-container>
</template>

<script>
export default {
  name: 'Main',
  components: {
  },
  data: () => ({
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579978238/landingpage/med1.jpg',
    valueProps: [
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1581400743/landingpage/undraw_winners_ao2o.svg',
        title: 'Only The Best Cryptos',
        text: `The cryptos we support are based upon specifc uses cases, such as security and privacy.
        This ensures that you are always using the best crypto for your use case and never wasting time or money
        due to being inefficient.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1581399859/landingpage/undraw_security_o890.svg',
        title: 'Security',
        text: `We offer multi-signature, hardware wallets,
        and local nodes for several cryptos that we offer. We are the only wallet to offer this level of security for
        multiple Cryptocurrencies. We also offer mobile app guideance for small and convient sums of money.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579632829/landingpage/undraw_reading_list_4boi.svg',
        title: 'Education',
        text: `We provide you with videos, quizes, and tutorials that allow you to fully educate yourself on all that cryptos
        have to offer. This education ensures that you are always informed about your cryptos and in control of
        financial future.`
      }
    ],
    tokens: [
    ]
  })
}
</script>
<style scoped>
.head {
  font-size: 4em;
  font-weight: normal;
}
.list {
  font-size: 1.5em;
  font-weight: bold;
}
.sectionText {
  font-size: 1.5em;
}
</style>
