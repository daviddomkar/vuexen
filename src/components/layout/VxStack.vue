<template>
  <div class="vx-stack">
    <slot />
  </div>
</template>

<style lang="sass">
.vx-stack
  width: 100%
  height: 100%
  position: relative
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
