import { withTests } from '@storybook/addon-jest';
import { Form } from 'antd';
import React from 'react';
import results from '../../.jest-test-results.json';
import { UserOutlined } from '../components/Icon/icon';
import { Input } from '../components/Input/Input';
import { RefinementDetails } from '../components/RefinementDetails/RefinementDetails';

const meta = {
  title: 'Templates/RefinementDetails',
  component: RefinementDetails,
  decorators: [withTests({ results })],
  parameters: { jest: ['refinementDetails.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    firstActionText: "ajouter un truc",
    FirstActionIcon: UserOutlined,
    FirstForm: <Form
      onValuesChange={(values) => console.log(values)}
      layout="vertical"
    >
        <Form.Item
          name="lastName"
          label="Nom"
          rules={[{ required: true, message: 'Merci de renseigner le nom' }]}
        >
          <Input placeholder="Potter" />
        </Form.Item>
    </Form>,
    onFirstAction: console.log,
    firstActioning: console.log,
    secondActionText: "editer un truc",
    SecondActionIcon: UserOutlined,
    SecondForm: <Form
      onValuesChange={(values) => console.log(values)}
      layout="vertical"
    >
        <Form.Item
          name="lastName"
          label="Nom"
          rules={[{ required: true, message: 'Merci de renseigner le nom' }]}
        >
          <Input placeholder="Potter" />
        </Form.Item>
    </Form>,
    onSecondAction: console.log,
    secondActioning: console.log,
  },
};
