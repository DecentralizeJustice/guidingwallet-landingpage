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
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1585333867/croppedCoin.png"
          transition="scale-transition"
          width="50"
        />
        <div class=" display-4 title">
        Guiding Wallet
      </div>
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up"
      @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn
        :color='item.color'
        v-bind:class="[buttonObject]"
        v-for="item in opts"
          :key="`${item.title}`"
        :href='item.link'
      >
        <span class="">{{item.title}}</span>
        <v-icon right>mdi-{{item.icon}}</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      dark
    >
      <template v-slot:prepend >
        <v-list>
          <v-list-item
            one-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">Guiding Wallet</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item link v-for="item in opts"
          :key="`${item.icon}`"
          :href='item.link'
        >
          <v-list-item-icon >
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <Main/>

      <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center"
      style="background-color: #0B5563;width:100%;"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
          href='https://twitter.com/GuidingWallet' link
        >
          <v-icon size="24px">
            mdi-twitter
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href='https://github.com/DecentralizeJustice/GWDesk' link
        >
          <v-icon size="24px">
            mdi-github
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Decentralize Justice</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
// current theme https://coolors.co/beb8eb-5299d3-0b5563-a2bce0-5e5c6c
import Main from './views/Main.vue'
export default {
  name: 'App',
  components: {
    Main
  },
  data: () => ({
    buttonObject: 'hidden-sm-and-down mr-2',
    drawer: null,
    opts: [
      { title: 'Home', icon: 'home', color: 'grey darken-2', link: '' },
      // { title: 'About', icon: 'download', link: '#Download' },
      // { title: 'Blog', icon: 'book-open-outline', link: 'https://guidingwallet.app/blog' },
      { title: 'Download', icon: 'download', link: '#Download' }
    ],
    icons: [
      'mdi-twitter'
    ]
  }),
  methods: {
  }
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
