<template>
  <Wrapper />
</template>

<script>
import Wrapper from './layouts/Wrapper/Wrapper.vue'

export default {
  name: 'App',
  components: {
    Wrapper,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');

body {
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
