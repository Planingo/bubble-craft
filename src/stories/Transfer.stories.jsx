import { Transfer } from '../components/Transfer/Transfer';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Organismes/Transfer',
  component: Transfer,
  decorators: [withTests({ results })],
  parameters: { jest: ['transfert.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: ['Source','Target'],
    render: (item) => item.title,
    dataSource:  Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    }))
  },
};
