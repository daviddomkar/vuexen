<template>
  <vx-container class="vx-root" v-bind="$props">
    <slot />
  </vx-container>
</template>

<style lang="sass">
@import '../../styles/flex'
@import '../../styles/color'
@import '../../styles/elevation'

.vx-root
  width: 100vw
  min-width: 100vw
  height: 100vh
  min-height: 100vh
  overflow-y: scroll
  overflow-x: hidden
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxContainer from './VxContainer.vue';

export default defineComponent({
  props: {
    ...VxContainer.props,
  },
  components: {
    VxContainer,
  },
  setup() {
    console.log(VxContainer.props);
  },
});
</script>
