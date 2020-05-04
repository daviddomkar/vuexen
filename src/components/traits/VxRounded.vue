<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    topLeft: String,
    topRight: String,
    bottomLeft: String,
    bottomRight: String,
    all: String,
  },
  setup: (props, { slots }) => {
    return () => {
      const nodes = slots.default();

      if (nodes.length > 1) {
        throw new Error('vx-rounded can only have one child.');
      }

      const node = nodes[0];

      node.data = node.data ?? {};
      node.data.style = [
        props.all ? { borderRadius: props.all } : {},
        props.topLeft ? { borderTopLeftRadius: props.topLeft } : {},
        props.topRight ? { borderTopRightRadius: props.topRight } : {},
        props.bottomLeft ? { borderBottomLeftRadius: props.bottomLeft } : {},
        props.bottomRight ? { borderBottomRightRadius: props.bottomRight } : {},
      ];

      return node;
    };
  },
});
</script>
