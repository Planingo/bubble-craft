import { Timeline } from '../components/Timeline/Timeline';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/Timeline',
  component: Timeline,
  decorators: [withTests({ results })],
  parameters: { jest: ['timeline.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    items: [
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]
  },
};
