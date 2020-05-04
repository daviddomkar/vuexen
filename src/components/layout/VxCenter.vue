<template>
  <vx-container justify="center" align="center" v-bind="$props">
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
