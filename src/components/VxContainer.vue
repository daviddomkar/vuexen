<template>
  <div
    class="vx-container"
    :class="[
      row ? 'vx-row' : '',
      col ? 'vx-col' : '',
      justify ? 'justify-' + justify : '',
      align ? 'align-' + align : '',
    ]"
  >
    <slot />
  </div>
</template>

<style lang="sass">
.vx-container
  display: flex

.vx-row
  flex-direction: row

.vx-col
  flex-direction: column
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    row: Boolean,
    col: Boolean,
    justify: String,
    align: String,
  },
});
</script>
