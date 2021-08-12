<template>
  <m-header></m-header>
  <tab></tab>
  <router-view :style="viewStyle"></router-view>
  <player></player>
</template>

<script>
import Header from './components/header/Header.vue'
import Tab from './components/tab/Tab.vue'
import Player from './components/player/player.vue'
import { mapState } from 'vuex'

export default {
  components: { MHeader: Header, Tab, Player },
  computed: {
    viewStyle() {
      const bottom = this.playlist.length ? '60px' : '0'
      return {
        bottom
      }
    },
    ...mapState([
      'playlist'
    ])
  }
}
</script>

<style lang="scss">
</style>
