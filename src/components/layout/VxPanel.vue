<template>
  <vx-container
    :width="col ? size : null"
    :height="!col ? size : null"
    v-bind="$props"
  >
    <slot />
  </vx-container>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { defineComponent } from '@vue/composition-api';

import VxContainer from './VxContainer.vue';

const { width, height, ...props } = VxContainer.props!;

export default defineComponent({
  props: {
    size: {
      type: String,
      required: true,
    },
    ...props,
  },
  components: {
    VxContainer,
  },
});
</script>
