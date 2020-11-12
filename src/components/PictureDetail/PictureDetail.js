import { onBeforeUnmount } from 'vue'

export default {
  props: {
    src: {
      required: true,
    },
  },
  setup(props) {
    document.body.style.overflow = 'hidden'

    onBeforeUnmount(() => {
      document.body.style.overflow = 'inherit'
    })

    return { props } //setup have to return something
  },
}
