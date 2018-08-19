import Vue from 'vue';
import App from './App';
import vueTopprogress from 'vue-top-progress'
import VuePromiseBtn from 'vue-promise-btn'
import VueSwal from 'vue-swal'

Vue.use(vueTopprogress)
Vue.use(VuePromiseBtn)
Vue.use(VueSwal);

new Vue({
    render: h => h(App)
}).$mount("#app");


require('../src/assets/css/styles.css')
require('../src/assets/css/bootstrap.min.css')
require('../src/assets/font/fontawesome-free-5.1.0-web/css/all.css')
require('../src/assets/font/font/flaticon.css')
require('../src/assets/js/jquery-slim.min.js')
require('../src/assets/js/popper.min.js')
require('../src/assets/js/scripts.js')

