<script lang="ts">
import { defineComponent, createElement } from '@vue/composition-api';

export default defineComponent({
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  setup: (props, { slots }) => {
    return () => {
      if (slots.default) {
        return createElement(props.tag, slots.default());
      } else {
        return createElement(props.tag);
      }
    };
  },
});
</script>
