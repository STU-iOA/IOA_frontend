import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

if(process.env.NODE_ENV === 'development'){
//开发环境
// #ifdef H5
Vue.prototype.$baseUrl = "/oa"
// #endif
// #ifdef APP-PLUS ||MP
Vue.prototype.$baseUrl = "http://119.23.222.86:8890"
// #endif
}else{
Vue.prototype.$baseUrl = "https://119.23.222.86:8890"
}