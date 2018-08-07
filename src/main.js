import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSession from 'vue-session'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPiAz0_KqSyn2EW8cFCypuqO95eL97vGc',
    libraries: 'places',
    
  }
 
  
})

Vue.use(VueSession)

var options = {
  persist: true
}

Vue.use(VueSession, options)



Vue.use(Vuetify, { theme: {
  
    primary: "#311B92",
    secondary: "#7E57C2",
    accent: "#5C6BC0",
    error: "#E53935",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50",
    red_primary: '#FFCDD2',
    pink_secondary: "#F8BBD0",
    purple_accent: "#E1BEE7",
    red_error: "#FFCCBC",
    yellow_warning: "#FFECB3",
    blue_info: "#C5CAE9",
    green_success: "#C8E6C9",
    speed1:"#8E44AD",
    speed2:"#EBDEF0",
    num_seats1:"#239B56",
    num_seats2:"#D4EFDF",
    blue1:"0D47A1",
    trips1:"E74C3C",
    trips2:"FADBD8"

  
}})

{
  
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
