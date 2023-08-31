import { defineComponent, toRefs } from 'vue';

import { buttonProps } from './button-type';
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, { slots }) {
    const { type, size, disabled } = toRefs(props);
    return () => (
      <button
        class={`s-btn  s-btn--${type.value} s-btn--${size.value}`}
        disabled={disabled.value}
      >
        {slots.default ? slots.default() : '按钮'}
      </button>
    );
  },
});
