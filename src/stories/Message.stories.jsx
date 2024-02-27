import { Message } from '../components/Message/Message';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/Message',
  component: Message,
  decorators: [withTests({ results })],
  parameters: { jest: ['message.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    type: "success",
    content: "C'est un succes !",
    children: <>Click me</>
  },
};