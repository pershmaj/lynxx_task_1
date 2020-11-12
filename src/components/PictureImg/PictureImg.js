import { computed, ref } from 'vue'
import PictureDetail from '@/components/PictureDetail/PictureDetail.vue'

export default {
  components: {
    PictureDetail,
  },
  props: {
    src: {
      required: true,
    },
    showDetail: {
      default: false,
    },
    name: {
      required: false,
    },
  },
  setup(props) {
    const pictureSrc = computed(() => 'data:image/jpeg;base64,' + props.src)
    const openDetail = ref(false)
    return { pictureSrc, openDetail }
  },
}
