import { Tabs } from '../components/Tabs/Tabs';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Tabs',
  component: Tabs,
  decorators: [withTests({ results })],
  parameters: { jest: ['tabs.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    items: [
      {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
      },
      {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
      },
      {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`,
      },
    ],
    defaultActiveKey: "1"
  },
};
