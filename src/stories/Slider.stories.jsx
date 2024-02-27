import { Slider } from '../components/Slider/Slider';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Slider',
  component: Slider,
  decorators: [withTests({ results })],
  parameters: { jest: ['slider.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Slider"
  },
};
