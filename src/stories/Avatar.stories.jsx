import { Avatar } from '../components/Avatar/Avatar';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Avatar',
  component: Avatar,
  decorators: [withTests({ results })],
  parameters: { jest: ['avatar.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Avatar"
  },
};
