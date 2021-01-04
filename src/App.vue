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
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1609472198/guidingLanding/croppedCoin.png"
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
      <router-link v-for="(item, index) in opts"
        :key="`${item.title}`"
      :to="{ path: item.link }">
      <v-btn
        :color='getNaVColor(item, index)'
        v-bind:class="[buttonObject]"
        Go to Bar
      >
        <span class="">{{item.title}}</span>
        <v-icon right>mdi-{{item.icon}}</v-icon>
      </v-btn>
      </router-link>
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
      ><router-link v-for="item in opts"
        :key="`${item.title}`"
        :to="{ path: item.link }">
        <v-list-item
        >
          <v-list-item-icon >
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view>
      </router-view>
  </v-main>

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
          <v-icon x-large>
            mdi-twitter
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href='https://github.com/DecentralizeJustice/GWDesk' link
        >
          <v-icon x-large>
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
const TIMEOUT = 1
// current theme https://coolors.co/beb8eb-5299d3-0b5563-a2bce0-5e5c6c
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    buttonObject: 'hidden-sm-and-down mr-2',
    drawer: null,
    currentRoute: 0,
    linkObject: {
      home: 0,
      trivia: 1,
      lessons: 2,
      blog: 3,
      pastTrivia: 4,
      faq: 5
    },
    opts: [
      { title: 'Home', icon: 'home', link: '/' },
      { title: 'Trivia', icon: 'gamepad-variant', link: '/trivia' },
      { title: 'Lessons', icon: 'book', link: '/lessons' },
      { title: 'Blog', icon: 'book-open-outline', link: '/blog' },
      { title: 'Past Trivia', icon: 'calendar-clock', link: '/pastTrivia' },
      { title: 'FAQ', icon: 'help-circle', link: '/faq' }

      // { title: 'About', icon: 'download', link: '#Download' },
      // { title: 'Blog', icon: 'book-open-outline', link: 'https://guidingwallet.app/blog' },
      // { title: 'Download', icon: 'download', link: '/#Download' }
    ],
    icons: [
      'mdi-twitter'
    ]
  }),
  mounted () {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },
  methods: {
    getNaVColor: function (item, index) {
      if (index === this.currentRoute) {
        return 'grey darken-2'
      } else {
        return ''
      }
    },
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT) // eslint-disable-line
    },
    goToPage: function (index) {
      console.log(this.$route)
      // this.route.push({ path: this.opts[index].link })
    }
  },
  watch: {
    $route (to, from) {
      this.currentRoute = this.linkObject[to.name]
    }
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
