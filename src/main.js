import Vue from 'vue'
import App from './App.vue'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
Vue.config.productionTip = false
Vue.component("my-header",MyHeader);
Vue.component('my-footer',MyFooter);
new Vue({
  render: h => h(App),
}).$mount('#app')
