import Vue from 'vue'
import App from './App.vue'
import './common/main.css'

new Vue({
  el: '#app',
  render: h => h(App) // vue2.0新增，提高渲染速度
  // template: '<App />',
  // components: {
  //   App
  // }
})
