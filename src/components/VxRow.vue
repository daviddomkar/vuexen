<template>
  <vx-container
    row
    :justify="justify"
    :align="align"
    :width="width"
    :height="height"
  >
    <slot />
  </vx-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxContainer from './VxContainer.vue';

export default defineComponent({
  props: {
    justify: String,
    align: String,
    width: Number,
    height: Number,
  },
  components: {
    VxContainer,
  },
});
</script>
