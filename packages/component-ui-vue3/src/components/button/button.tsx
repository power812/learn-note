import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PButton',
  setup(props, { slots }) {
    return () => <button>{slots.default ? slots.default() : '按钮'}</button>;
  },
});
