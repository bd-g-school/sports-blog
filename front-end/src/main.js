import Vue from 'vue'
import App from './App.vue'
import router from './router'
import track_competition_data from './assets/track-mock-data.json'
import football_competition_data from './assets/football-mock-data.json'
import 'bootstrap'

Vue.config.productionTip = false

let data = {
  track_competitions: track_competition_data,
  football_competitions: football_competition_data,
  addedName: '',
  addedStat: '',
  stats: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
