<template>
  <vx-container
    :tag="tag"
    :row="row"
    :col="col"
    :justify="justify"
    :align="align"
    :width="col ? size : null"
    :height="!col ? size : null"
    :color="color"
    :elevation="elevation"
    :margin="margin"
    :padding="padding"
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
    size: String,
    ...props,
  },
  components: {
    VxContainer,
  },
});
</script>
