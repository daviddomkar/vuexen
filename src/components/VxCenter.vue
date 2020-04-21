<template>
  <vx-container
    :row="row"
    :col="col"
    justify="center"
    align="center"
    :width="width"
    :height="height"
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

const { justify, align, ...props } = VxContainer.props!;

export default defineComponent({
  props: {
    ...props,
  },
  components: {
    VxContainer,
  },
});
</script>
