import { computed } from 'vue'
// import PictureImg from '@/components/PictureImg/PictureImg.vue'

export default {
  components: {
    // PictureImg,
  },
  props: {
    pictureList: {
      required: true,
    },
  },
  setup(props) {
    const pictures = computed(() =>
      props.pictureList && props.pictureList.length
        ? props.pictureList.filter(pic => pic.data)
        : []
    )
    return { pictures }
  },
}
