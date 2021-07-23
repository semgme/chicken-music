<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useScroll } from './use-scroll'

export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const rootRef = ref(null)
    useScroll(rootRef, props)

    return { rootRef }
  }
}
</script>
