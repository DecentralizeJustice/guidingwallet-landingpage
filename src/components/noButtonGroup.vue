<template>
  <v-row
  justify="space-around"
  >
    <v-col
      v-for="(card, index) in cards" :key="`card-${index}`"
      cols="12" md='6'  lg='4'
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
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['cards'],
  data: () => ({
  })
}
</script>
