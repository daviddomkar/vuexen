import Vue from 'vue';
import Button from '@/components/Button.vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

Vue.component('vx-button', Button);
