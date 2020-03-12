<template>
  <v-app dark>
    <v-app-bar
      dark
      app
      absolute
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
      <v-btn
        depressed color="grey darken-2"
      >
        <span class="">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        href="https://guidingwallet.app/blog"
        text
      >
        <span class="">Blog</span>
        <v-icon>mdi-book-open-outline</v-icon>
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
<style >
@import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
#app {
  font-family: 'Hind', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
