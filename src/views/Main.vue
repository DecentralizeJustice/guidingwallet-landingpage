<template>
    <div>
      <section>
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
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="">
            <div class="text-center">
              <h2 class="display-1">The Guiding Wallet for The Decentralized World</h2>
            </div>
          </v-flex>
              <v-row
              justify="space-around"
              >
                <v-col
                  v-for="(card, index) in minicards" :key="`card-${index}`"
                  cols="3"
                >
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <img class="" style="height:25vh;width:auto;"
                     :src='card.img'/>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">{{card.title}}</div>
                  </v-card-title>
                  <v-card-text class="subtitle-1">
                    {{card.text}}
                  </v-card-text>
                </v-card>
                </v-col>
              </v-row>
        </v-layout>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({
    minicards: [
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579630770/landingpage/undraw_winners_ao2o.png',
        title: 'Only The Best of The Best',
        text: `Instead of hundreds of coins, Guide Wallet only supports the best coins that have a
        proven track record, vast community support and specialized use cases.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579595188/landingpage/undraw_reading_list_4boi.png',
        title: 'A High Return Investment',
        text: `Guide Wallet has a revolutionary curriculmn that allows you to learn
        about crypto. This curriculum helps you make a long lasting investment in yourself that will
        reward you for the rest of your life.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579594794/landingpage/undraw_conversation_h12g.png',
        title: 'Expert Guidance',
        text: `Guide Wallet offers you one-on-one help from a expert in
        cryptocurrency that allow you to fully explore and utlize the crypto-ecosystem.`
      }
    ]
  })
}
</script>
