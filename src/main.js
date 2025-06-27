import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import drag from "@/assets/js/drag"
Vue.use(drag, { directiveName: 'drag' }) //元素可拖动
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
