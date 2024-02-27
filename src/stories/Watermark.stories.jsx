import { Watermark } from '../components/Watermark/Watermark';
import { Upload } from '../components/Upload/Upload';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Watermark',
  component: Watermark,
  decorators: [withTests({ results })],
  parameters: { jest: ['watermark.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: <div
      style={{
        height: 500,
      }}
    />,
    content: "Planin'go"
  },
};
