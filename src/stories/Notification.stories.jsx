import { Button } from '../components/Button/Button';
import { Notif } from '../components/Notification/Notification';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/Notification',
  component: Notif,
  decorators: [withTests({ results })],
  parameters: { jest: ['notification.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  },
};
