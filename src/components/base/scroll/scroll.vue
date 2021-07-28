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
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const rootRef = ref(null)
    const { scroll } = useScroll(rootRef, props, emit)

    return { rootRef, scroll }
  }
}
</script>
