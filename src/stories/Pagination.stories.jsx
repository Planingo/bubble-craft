import { Pagination } from '../components/Pagination/Pagination';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Pagination',
  component: Pagination,
  decorators: [withTests({ results })],
  parameters: { jest: ['pagination.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    
    children: "Pagination"
  },
};
