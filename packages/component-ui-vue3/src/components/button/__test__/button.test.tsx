import Button from '../src/button.tsx';
import { render } from '@testing-library/vue';
// 基础按钮
test('it should work', () => {
  const { getByRole } = render(Button);
  getByRole('button');
});
// default slot
test('default slot should 按钮', () => {
  const { getByText } = render(Button);
  getByText('按钮');
});
test('default slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'default';
      },
    },
  });
  getByText('default');
});
// button type
test('button type should work', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary',
    },
  });
  getByRole('button');
  expect(getByRole('button').classList.contains('s-btn--primary')).toBe(true);
});
