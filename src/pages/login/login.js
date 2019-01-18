import Vue from 'vue'
import Login from './Login.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Login },
//template: '<Login/>'
	render: h=>h(Login)
})
