<template>
  <vx-container row justify="center" align="center">
    <slot />
  </vx-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxContainer from './VxContainer.vue';

export default defineComponent({
  components: {
    VxContainer,
  },
});
</script>
