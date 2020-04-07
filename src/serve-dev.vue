<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');

html {
  font-family: 'Titillium Web', sans-serif;
}

body {
  margin: 0;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { VxRoot, VxContainer, VxHeading } from '@/main';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VxRoot,
    VxContainer,
    VxHeading,
  },
});
</script>

<template>
  <vx-root id="app" color="background-primary" justify="center" align="center">
    <vx-container color="background-secondary" width="360px" elevation="1" />
    <vx-container height="400px" align="center" justify="center" col>
      <vx-heading level="1">Ahoj</vx-heading>
      <vx-heading level="1">Ahoj</vx-heading>
      <vx-heading level="1">Ahoj</vx-heading>
    </vx-container>
  </vx-root>
</template>
