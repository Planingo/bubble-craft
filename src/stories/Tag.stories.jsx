import { Tag } from '../components/Tag/Tag';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Tag',
  component: Tag,
  decorators: [withTests({ results })],
  parameters: { jest: ['tag.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    
  children: "Ananas"
  },
};
