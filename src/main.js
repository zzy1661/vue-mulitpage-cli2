// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Promise from 'bluebird';
import Vue from 'vue'
import App from './App'
import router from './router'
function isIe9() {
	return navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."
}
if(isIe9()) {
	require('./assets/css1.css')	
}else {
	require('./assets/css2.css')	
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
