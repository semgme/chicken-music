import { createApp } from 'vue'
import loading from './loading.vue'
import { addClass, removeClass } from '@/assets/js/dom.js'

const relativeCls = 'g-relative'

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    const result = binding.value === binding.oldValue
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (!result) {
      binding.value ? append(el) : remove(el)
    }
  }
}
function append(el) {
  el.appendChild(el.instance.$el)
  const elClass = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(elClass.position) === -1) {
    addClass(el, relativeCls)
  }
}
function remove(el) {
  el.removeChild(el.instance.$el)
  removeClass(el, relativeCls)
}

export default loadingDirective
