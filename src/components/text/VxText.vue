<template>
  <vx-tag :tag="tag">
    <slot />
  </vx-tag>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxTag from '../core/VxTag.vue';

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'span',
    },
  },
  components: {
    VxTag,
  },
});
</script>
