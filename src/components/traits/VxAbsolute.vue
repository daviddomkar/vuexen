<style lang="sass">
.vx-absolute
  position: absolute
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    zIndex: String,
    top: String,
    right: String,
    bottom: String,
    left: String,
  },
  setup: (props, { slots }) => {
    return () => {
      const nodes = slots.default();

      if (nodes.length > 1) {
        throw new Error('vx-absolute can only have one child.');
      }

      const node = nodes[0];

      node.data = node.data ?? {};
      node.data.class = 'vx-absolute';
      node.data.style = [
        props.zIndex ? { zIndex: props.zIndex } : {},
        props.top ? { top: props.top } : {},
        props.right ? { right: props.right } : {},
        props.bottom ? { bottom: props.bottom } : {},
        props.left ? { left: props.left } : {},
      ];

      return node;
    };
  },
});
</script>
