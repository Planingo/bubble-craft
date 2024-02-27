import { Upload } from '../components/Upload/Upload';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Organismes/Upload',
  component: Upload,
  decorators: [withTests({ results })],
  parameters: { jest: ['upload.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Upload"
  },
};
