<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data ="singers" @select="selectSinger"></index-list>
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" :data="selectedSinger"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer.js'
import IndexList from '../components/index-list/index-list.vue'
import storage from 'good-storage'
import { SINGER_KEY } from '../assets/js/constant'

export default {
  name: 'top-list',
  data() {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  components: { IndexList },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      storage.session.set(SINGER_KEY, singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
