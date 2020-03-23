<template>
  <vx-container col :justify="justify" :align="align">
    <slot />
  </vx-container>
</template>

<style lang="sass">
.vx-col
  display: flex
  flex-direction: column
</style>

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
