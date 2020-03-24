<template>
  <div
    class="vx-container"
    :class="[
      shrink ? 'vx-container--shrink' : '',
      row ? 'vx-row' : '',
      col ? 'vx-col' : '',
      justify ? 'vx-justify-' + justify : '',
      align ? 'vx-align-' + align : '',
    ]"
    :style="[width ? { width: width } : {}, height ? { height: height } : {}]"
  >
    <slot />
  </div>
</template>

<style lang="sass">
@import '../styles/flex'

.vx-container
  display: flex
  width: 100%
  height: 100%

  &--shrink
    width: auto
    height: auto

.vx-row
  flex-direction: row

.vx-col
  flex-direction: column
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    shrink: Boolean,
    row: Boolean,
    col: Boolean,
    justify: String,
    align: String,
    width: String,
    height: String,
  },
});
</script>
