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
        Guiding Wallet
      </div>
      </div>

      <v-spacer></v-spacer>
      <div>
      <v-btn
        depressed color="grey darken-2"
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        href="https://guidingwallet.app/blog"
        text
      >
        <span class="mr-2">Blog</span>
        <v-icon>mdi-book-open-outline</v-icon>
      </v-btn>
    </div>
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
