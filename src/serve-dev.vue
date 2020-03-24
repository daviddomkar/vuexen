<style>
body {
  margin: 0;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { VxRoot, VxStack, VxStackItem, VxContainer } from '@/main';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VxRoot,
    VxStack,
    VxStackItem,
    VxContainer,
  },
});
</script>

<template>
  <div id="app">
    <vx-root>
      <vx-stack>
        <vx-stack-item top="0px" bottom="0px">
          <vx-container shrink justify="center" align="center">
            <p>idk</p>
          </vx-container>
        </vx-stack-item>
        <vx-stack-item top="2px">
          <p>idk</p>
        </vx-stack-item>
        <vx-stack-item left="2px">
          <p>idk</p>
        </vx-stack-item>
      </vx-stack>
    </vx-root>
  </div>
</template>
