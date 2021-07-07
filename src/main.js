import Vue from 'vue'
import Museum from './Museum.vue'
import router from './router'

Vue.config.productionTip = false

import "font-awesome/css/font-awesome.min.css";
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
 
new Vue({
  router,
  render: h => h(Museum)
}).$mount('#app')
