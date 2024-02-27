import { QRCode } from '../components/QRCode/QRCode';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/QRCode',
  component: QRCode,
  decorators: [withTests({ results })],
  parameters: { jest: ['qRCode.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    value: "https://ant.design/"
  },
};
