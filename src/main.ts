import VxContainer from './components/VxContainer.vue';
import VxColumn from './components/VxColumn.vue';
import VueCompositionApi from '@vue/composition-api';

export default {
  install(vue: any) {
    vue.use(VueCompositionApi);
    vue.component('vx-container', VxContainer);
    vue.component('vx-column', VxColumn);
  },
};
