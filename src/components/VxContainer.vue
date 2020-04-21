<template>
  <div
    :tag="tag"
    class="vx-container"
    :class="[
      row ? 'vx-row' : '',
      col ? 'vx-col' : '',
      wrap ? 'vx-wrap' : '',
      justify ? 'vx-justify-' + justify : '',
      align ? 'vx-align-' + align : '',
      color ? 'vx-bg-' + color : '',
      elevation ? 'vx-elevation-' + elevation : '',
    ]"
    :style="[
      width ? { width: width, minWidth: width } : {},
      height ? { height: height, minHeight: height } : {},
      margin ? { margin: margin.split(',').join(' ') } : {},
      padding ? { padding: padding.split(',').join(' ') } : {},
    ]"
  >
    <slot />
  </div>
</template>

<style lang="sass">
@import '../styles/flex'

.vx-container
  box-sizing: border-box
  display: flex
  width: 100%
  height: 100%

.vx-row
  flex-direction: row

.vx-col
  flex-direction: column

.vx-wrap
  flex-wrap: wrap
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxTag from './VxTag.vue';

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    row: Boolean,
    col: Boolean,
    wrap: Boolean,
    justify: String,
    align: String,
    width: String,
    height: String,
    color: String,
    elevation: String,
    margin: String,
    padding: String,
  },
  components: {
    VxTag,
  },
});
</script>
