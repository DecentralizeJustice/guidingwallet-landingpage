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
            md="6"
            style="height:100%"
            class="pa-0"
            >
            <v-img  src="https://res.cloudinary.com/dylevfpbl/image/upload/v1581391886/landingpage/woman-sharing-her-presentation-with-her-colleagues-3153198.jpg"/>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Main',
  components: {
  },
  data: () => ({
    mainImg: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579978238/landingpage/med1.jpg',
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
