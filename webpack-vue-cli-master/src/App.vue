<template>
  <div class="app">
    {{msg}}
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      msg: '我是入口文件'
    }
  },
  created () {
    console.log('App created...')
  },
  methods: {}
}
</script>
<style scoped>
</style>
