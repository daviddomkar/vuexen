import Vue, { VNode } from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Dev from '@/serve-dev.vue';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
