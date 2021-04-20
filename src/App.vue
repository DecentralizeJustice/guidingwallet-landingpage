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
      <div v-for="(item, index) in opts" :key="`${item.title}`">
        <a  v-if='item.external === true'
          :href='item.link'
         style="text-decoration:none">
        <v-btn
          :color='getNaVColor(item, index)'
          v-bind:class="[buttonObject]"
          Go to Bar
        >
          <span class="">{{item.title}}</span>
          <v-icon right>mdi-{{item.icon}}</v-icon>
        </v-btn>
      </a>
      <router-link  v-if='item.external !== true'
      :to="{ path: item.link }" style="text-decoration:none">
      <v-btn
        :color='getNaVColor(item, index)'
        v-bind:class="[buttonObject]"
        Go to Bar
      >
        <span class="">{{item.title}}</span>
        <v-icon right>mdi-{{item.icon}}</v-icon>
      </v-btn>
      </router-link>
    </div>
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
      <div v-for="item in opts" :key="`${item.title}`">
      <a
        v-if='item.external === true'
        :href='item.link' style="text-decoration:none">
        <v-list-item
        >
          <v-list-item-icon >
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </a>
      <router-link
      v-if='item.external !== true'
        :to="{ path: item.link }" style="text-decoration:none">
        <v-list-item
        >
          <v-list-item-icon >
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </router-link>
    </div>
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
      style="background-color: #546E7A;width:100%;"
    >
    <v-card-text>

    <v-row
        no-gutters
      >
        <v-col
          cols='6'
          offset-md="2"
        >
          <v-card
            class="pa-2 text-left" flat
            :class="{'text-h5': $vuetify.breakpoint.mdAndUp, 'text-h6': $vuetify.breakpoint.smAndDown}"
            style="background-color: #546E7A;width:100%;"
          >
            <div style="text-decoration: underline;">Trivia Show Links</div>
            <v-row
                no-gutters
                class="text-left text-subtitle-1"
              >
                <v-col
                  cols='12'
                  v-for="link in footerLinks.triviaShow" :key="`${link.text}`"
                >
                <a :href="link.link" v-if='link.external'
                  style="text-decoration: none; color: inherit;">
                  {{link.text}}
                </a>
                <router-link :to="link.link" v-if='!link.external'
                  style="text-decoration: none; color: inherit;">
                  {{link.text}}
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      </v-card-text>

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
      specificLesson: 2,
      // blog: 3,
      faq: 3
    },
    footerLinks: {
      triviaShow: [
        { text: 'Live Trivia Show', link: 'https://guidingwallet.app/triviashow', external: true },
        { text: 'Trivia Info', link: '/triviaInfo' },
        { text: 'Past Shows', link: '/pastTrivia' }
      ]
    },
    opts: [
      { title: 'Home', icon: 'home', link: '/' },
      { title: 'Game Show', icon: 'gamepad-variant', link: 'https://guidingwallet.app/triviashow', external: true },
      { title: 'Lessons', icon: 'book', link: '/lessons' },
      // { title: 'Blog', icon: 'book-open-outline', link: '/blog' },
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
      // console.log(index, item)
      if (index === this.currentRoute && index !== 1) {
        return 'grey darken-2'
      } else {
        return ''
      }
    },
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT) // eslint-disable-line
    },
    goToPage: function (index) {
      // console.log(this.$route)
      // this.route.push({ path: this.opts[index].link })
    }
  },
  watch: {
    $route (to, from) {
      // console.log(this.linkObject[to.name])
      this.currentRoute = this.linkObject[to.name]
    }
  }
}
</script>
<style lang="sass">
    @import '../node_modules/typeface-roboto/index.css'
</style>
