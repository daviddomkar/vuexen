<template>
  <vx-container :row="row" :col="col" justify="center" align="center">
    <slot />
  </vx-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxContainer from './VxContainer.vue';

export default defineComponent({
  props: {
    row: Boolean,
    col: Boolean,
  },
  components: {
    VxContainer,
  },
});
</script>
