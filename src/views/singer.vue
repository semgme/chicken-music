<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data ="singers"></index-list>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer.js'
import IndexList from '../components/base/index-list/index-list.vue'

export default {
  name: 'top-list',
  data() {
    return {
      singers: []
    }
  },
  components: { IndexList },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
    console.log(this.singers)
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
