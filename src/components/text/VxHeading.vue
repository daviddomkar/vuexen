<script lang="ts">
import { defineComponent, createElement } from '@vue/composition-api';

export default defineComponent({
  props: {
    level: {
      type: [String, Number],
      default: 1,
    },
    color: String,
  },
  setup: (props, { slots }) => {
    return () => {
      if (props.color) {
        return createElement(
          'h' + props.level,
          {
            attrs: { class: 'vx-' + props.color },
          },
          slots.default(),
        );
      } else {
        return createElement('h' + props.level, slots.default());
      }
    };
  },
});
</script>
