
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/index.js'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
