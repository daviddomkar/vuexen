<template>
  <vx-container
    class="vx-root"
    :row="row"
    :col="col"
    :justify="justify"
    :align="align"
  >
    <slot />
  </vx-container>
</template>

<style lang="sass">
@import '../styles/flex'

.vx-root
  width: 100vw
  min-width: 100vw
  height: 100vh
  min-height: 100vh
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxContainer from './VxContainer.vue';

export default defineComponent({
  props: {
    row: Boolean,
    col: Boolean,
    justify: String,
    align: String,
  },
  components: {
    VxContainer,
  },
});
</script>
