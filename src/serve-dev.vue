<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');

html {
  font-family: 'Titillium Web', sans-serif;
  overflow-y: hidden;
}

body {
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 64px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { VxRoot, VxContainer, VxCol, VxRow, VxPanel, VxHeading } from '@/main';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VxRoot,
    VxCol,
    VxRow,
    VxPanel,
    VxHeading,
    VxContainer,
  },
  setup() {
    const cardCount = ref(8);
    const widgetCount = ref(4);

    return {
      cardCount,
      widgetCount,
    };
  },
});
</script>

<template>
  <vx-root id="app" color="background-gradient">
    <vx-panel col color="background-secondary" size="360px" elevation="1" />
    <vx-col padding="48px,48px,0,48px">
      <vx-panel margin="0,0,48px,0" row size="72px" />
      <vx-row>
        <vx-col>
          <vx-heading color="text" level="1">TEST</vx-heading>
          <vx-container margin="48px,0,0,0" justify="space-between" wrap>
            <vx-container
              v-for="i in cardCount"
              :key="i"
              margin="0,0,16px,0"
              width="264px"
              height="460px"
              color="background-secondary"
              elevation="1"
            />
          </vx-container>
        </vx-col>
        <vx-panel margin="0,0,0,48px" col size="320px">
          <vx-container
            v-for="i in widgetCount"
            :key="i"
            margin="0,0,16px,0"
            height="200px"
            color="background-secondary"
            elevation="1"
          />
        </vx-panel>
      </vx-row>
    </vx-col>
  </vx-root>
</template>
