<template>
  <div
    class="vx-block"
    :style="[
      width ? { width: width } : {},
      height ? { height: height } : {},
      margin ? { margin: margin.split(',').join(' ') } : {},
      padding ? { padding: padding.split(',').join(' ') } : {},
    ]"
  >
    <slot />
  </div>
</template>

<style lang="sass">
.vx-block
  box-sizing: border-box
  display: block
  width: 100%
  height: 100%
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    width: String,
    height: String,
    margin: String,
    padding: String,
  },
});
</script>
