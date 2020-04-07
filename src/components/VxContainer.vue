<template>
  <div
    class="vx-container"
    :class="[
      row ? 'vx-row' : '',
      col ? 'vx-col' : '',
      justify ? 'vx-justify-' + justify : '',
      align ? 'vx-align-' + align : '',
      color ? 'vx-bg-' + color : '',
      elevation ? 'vx-elevation-' + elevation : '',
    ]"
    :style="[
      width ? { width: width, minWidth: width } : {},
      height ? { height: height, minHeight: height } : {},
    ]"
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
    width: String,
    height: String,
    color: String,
    elevation: String,
  },
});
</script>
