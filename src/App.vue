<template>
  <v-app dark>
    <v-app-bar
      dark
      app
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1579591613/landingpage/croppedCoin.png"
          transition="scale-transition"
          width="50"
        />
        <div class=" display-4 title">
        Guide Wallet
      </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/DecentralizeJustice/GuideWallet-DesktopApp"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
      <Main/>
  </v-app>
</template>

<script>
import Main from './views/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },

  data: () => ({
    //
  })
}
</script>
