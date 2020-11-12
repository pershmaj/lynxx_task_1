/* eslint-disable no-unused-vars */
import PictureList from '@/components/PictureList/PictureList.vue'
import Axios from 'axios'
import { computed, onMounted, reactive, ref } from 'vue'
import api from '../../api'

export default {
  components: {
    PictureList,
  },
  setup() {
    const curiousMode = ref(false)
    const showFavorite = ref(false)
    const loading = ref(false)

    const pictureAll = reactive(new Map())
    const pictureList = computed(() => {
      const m = Array.from(pictureAll, ([_, value]) => value)
      return showFavorite.value ? m.filter(pic => pic.favourite) : m
    })

    onMounted(async () => {
      loading.value = true
      try {
        const { data } = await Axios.get(api.getPictureList) // get all pictures
        data.forEach(pic => pictureAll.set(pic.name, pic))

        loading.value = false

        const q = data.map(pic => {
          //make array for Axios.all
          Axios.get(api.getPicture(pic.id), {
            pictureId: pic.id,
            responseType: 'arraybuffer',
          }).then(res => {
            const target = pictureAll.get(res.config.pictureId)
            // update picture image when received
            pictureAll.set(
              target.name,
              Object.assign(target, {
                data: Buffer.from(res.data, 'binary').toString('base64'),
              })
            )
          })
        })
        Axios.all(q)
      } catch (e) {
        throw new Error(e)
      }
    })
    return {
      curiousMode,
      showFavorite,
      pictureList,
    }
  },
}
