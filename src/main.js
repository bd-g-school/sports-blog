import Vue from 'vue'
import App from './App.vue'
import router from './router'
import competition_data from './assets/mock-data.json'
import 'bootstrap'

Vue.config.productionTip = false

let data = {
  competitions: competition_data,
  addedName: '',
  addedStat: '',
  stats: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
