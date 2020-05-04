<style lang="sass">
.vx-fixed
  position: fixed
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup: (_, { slots }) => {
    return () => {
      const nodes = slots.default();

      if (nodes.length > 1) {
        throw new Error('vx-fixed can only have one child.');
      }

      const node = nodes[0];

      node.data = node.data ?? {};
      node.data.class = 'vx-fixed';

      return node;
    };
  },
});
</script>
