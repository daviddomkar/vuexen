<template>
  <vx-container row :justify="justify" :align="align">
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
  },
  components: {
    VxContainer,
  },
});
</script>
