import { ref, watch, nextTick, computed } from 'vue'

export default function useFixed(props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHight = []
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const diff = (distance.value > 0 && distance.value < TITLE_HEIGHT) ? distance.value - TITLE_HEIGHT : 0
    return {
      transform: `translate(0,${diff}px)`
    }
  })

  watch(() => props.data, async() => {
    await nextTick()
    calculate()
  })

  watch(scrollY, (newY) => {
    for (let i = 0; i < listHight.length - 1; i++) {
      const hightTop = listHight[i]
      const hightBottom = listHight[i + 1]
      if (newY >= hightTop && newY <= hightBottom) {
        currentIndex.value = i
        distance.value = hightBottom - newY
      }
    }
  })

  function calculate() {
    const list = groupRef.value.children
    let height = 0

    listHight.length = 0
    listHight.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHight.push(height)
    }
  }
  function onScroll(pos) {
    scrollY.value = -pos.y
  }

  return { groupRef, fixedTitle, fixedStyle, onScroll, currentIndex }
}
