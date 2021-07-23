import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(Slide)

export function useSlider(wrapperRef) {
  const sider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    const siderVaule = sider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })

    siderVaule.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    sider.value.destroy()
  })

  return { sider, currentPageIndex }
}
