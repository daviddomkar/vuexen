<template>
  <vx-tag
    :tag="tag"
    class="vx-flex"
    :class="[
      row ? 'vx-row' : '',
      col ? 'vx-col' : '',
      wrap ? 'vx-wrap' : '',
      expand ? 'vx-expand' : '',
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
  </vx-tag>
</template>

<style lang="sass">
@import '../../styles/flex'

.vx-flex
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

.vx-expand
  flex-grow: 1
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VxTag from '../core/VxTag.vue';

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    row: Boolean,
    col: Boolean,
    wrap: Boolean,
    expand: Boolean,
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
