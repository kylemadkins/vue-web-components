import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';
import App from './App.vue'
import AButton from './components/AButton';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const CustomElement = wrap(Vue, AButton);

window.customElements.define('a-button', CustomElement);
