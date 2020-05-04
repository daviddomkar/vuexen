<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');

html {
  font-family: 'Titillium Web', sans-serif;
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
import {
  VxRoot,
  VxContainer,
  VxCol,
  VxRow,
  VxPanel,
  VxHeading,
  VxFixed,
  VxMargin,
  VxPadding,
  VxRounded,
} from '@/main';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VxRoot,
    VxCol,
    VxRow,
    VxPanel,
    VxHeading,
    VxContainer,
    VxFixed,
    VxMargin,
    VxPadding,
    VxRounded,
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
    <vx-fixed>
      <vx-panel col color="background-secondary" size="360px" elevation="1" />
    </vx-fixed>
    <vx-margin left="360px">
      <vx-padding horizontal="48px" top="48px">
        <vx-col>
          <vx-panel margin="0,0,48px,0" row size="72px" />
          <vx-row>
            <vx-col>
              <vx-heading color="text" level="1">TEST</vx-heading>
              <vx-margin top="48px">
                <vx-container wrap>
                  <vx-margin v-for="i in cardCount" :key="i" bottom="16px">
                    <vx-container
                      width="264px"
                      height="460px"
                      color="background-secondary"
                      elevation="1"
                    />
                  </vx-margin>
                </vx-container>
              </vx-margin>
            </vx-col>
            <vx-margin left="48px">
              <vx-panel col size="320px">
                <vx-margin v-for="i in widgetCount" :key="i" bottom="16px">
                  <vx-rounded all="20px">
                    <vx-container
                      margin="0,0,16px,0"
                      height="200px"
                      color="background-secondary"
                      elevation="1"
                    />
                  </vx-rounded>
                </vx-margin>
              </vx-panel>
            </vx-margin>
          </vx-row>
        </vx-col>
      </vx-padding>
    </vx-margin>
  </vx-root>
</template>
