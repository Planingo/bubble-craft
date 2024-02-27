import { Drawer } from '../components/Drawer/Drawer';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/Drawer',
  component: Drawer,
  decorators: [withTests({ results })],
  parameters: { jest: ['drawer.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: "Basic Drawer",
    placement: "right",
    children: <>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </>,
    open: true
  },
};
