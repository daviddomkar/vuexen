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
        throw new Error('vx-margin can only have one child.');
      }

      const node = nodes[0];

      node.data = node.data ?? {};
      node.data.style = [
        props.all ? { margin: props.all } : {},
        props.vertical && props.horizontal
          ? { margin: props.vertical + ' ' + props.horizontal }
          : {},
        props.vertical
          ? { marginTop: props.vertical, marginBottom: props.vertical }
          : {},
        props.horizontal
          ? { marginLeft: props.horizontal, marginRight: props.horizontal }
          : {},
        props.top ? { marginTop: props.top } : {},
        props.right ? { marginRight: props.right } : {},
        props.bottom ? { marginBottom: props.bottom } : {},
        props.left ? { marginLeft: props.left } : {},
      ];

      return node;
    };
  },
});
</script>
