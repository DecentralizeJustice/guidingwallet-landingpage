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
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">The Guiding Wallet for The Decentralized World</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container>
              <v-row
              >
                <v-col
                  v-for="(card, index) in minicards" :key="`card-${index}`"
                >
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <img class="" style="height:25vh;width:auto;"
                     :src='card.img'/>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">{{card.title}}</div>
                  </v-card-title>
                  <v-card-text>
                    {{card.text}}
                  </v-card-text>
                </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-flex>
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
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579594980/landingpage/select.png',
        title: 'Customized',
        text: `Guide wallet is specialized to your needs and wants. It allows you to accomplish your goals
        using the best technology that the cryptocurrency ecosystem has to offer.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579595188/landingpage/undraw_reading_list_4boi.png',
        title: "Verify Don't Trust",
        text: `Guide wallat has a revolutionary curriculmn that allows you to learn
        about crypto and your needs instead of simply trusting in other people.`
      },
      {
        img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1579594794/landingpage/undraw_conversation_h12g.png',
        title: 'Expert Help',
        text: `We offer you one-on-one help with experts in
        cryptocurrency that allow you to use cryptocurrencymost effectively.`
      }
    ]
  })
}
</script>
