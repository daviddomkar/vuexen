<template>
  <div
    class="vx-block"
    :style="[width ? { width: width } : {}, height ? { height: height } : {}]"
  >
    <slot />
  </div>
</template>

<style lang="sass">
@import '../styles/flex'

.vx-block
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
  },
});
</script>
