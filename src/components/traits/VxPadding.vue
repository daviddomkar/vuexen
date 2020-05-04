<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    top: String,
    right: String,
    bottom: String,
    left: String,
    horizontal: String,
    vertical: String,
    all: String,
  },
  setup: (props, { slots }) => {
    return () => {
      const nodes = slots.default();

      if (nodes.length > 1) {
        throw new Error('vx-padding can only have one child.');
      }

      const node = nodes[0];

      node.data = node.data ?? {};
      node.data.style = [
        props.all ? { padding: props.all } : {},
        props.vertical && props.horizontal
          ? { padding: props.vertical + ' ' + props.horizontal }
          : {},
        props.vertical
          ? { paddingTop: props.vertical, paddingBottom: props.vertical }
          : {},
        props.horizontal
          ? { paddingLeft: props.horizontal, paddingRight: props.horizontal }
          : {},
        props.top ? { paddingTop: props.top } : {},
        props.right ? { paddingRight: props.right } : {},
        props.bottom ? { paddingBottom: props.bottom } : {},
        props.left ? { paddingLeft: props.left } : {},
      ];

      return node;
    };
  },
});
</script>
