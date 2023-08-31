# Vue3用法

:::demo

```tsx
import { defineComponent, withModifiers, ref } from 'vue';

const Child = defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        默认插槽:{slots.default && slots.default()}
        <br />
        prefix插槽: {slots.prefix && slots.prefix()}
        <br />
        suffix插槽: {slots.suffix && slots.suffix({ name: 'hahah' })}
      </>
    );
  },
});

export default defineComponent({
  // 自定义指令
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  emits: ['click'],
  setup(_props, { emit }) {
    const count = ref(0);
    const inc = () => {
      count.value++;
      emit('click');
    };
    const list = ref<string[]>(['hello', 'test']);
    return () => (
      //修饰符、slot 、 directive 、 emit
      // 冒泡
      <>
        {/* 阻止冒泡 */}
        <div onClick={withModifiers(inc, ['self'])}>阻止冒泡{count.value}</div>
        {/* v-model */}
        <div>v-model</div>
        <input v-focus type="text" v-model={count.value} />
        {/* v-if */}
        <div>v-if:</div>
        {count.value > 5 ? <div>大于5</div> : <div>小于5</div>}
        {/* v-for */}
        {list.value.map((item, index) => (
          <div>
            {index}: {item}
          </div>
        ))}
        {/* slot插槽 */}
        <Child
          v-slots={{
            prefix: () => <div>prefix</div>,
            suffix: (props: Record<'name', string>) => <div>{props.name}</div>,
          }}
        >
          test
        </Child>
      </>
    );
  },
});
```

:::
