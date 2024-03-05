import { withTests } from '@storybook/addon-jest';
import { Form } from 'antd';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Input, NoData } from '../components';

const meta = {
  title: 'Molécules/NoData',
  component: NoData,
  decorators: [withTests({ results })],
  parameters: { jest: ['noData.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    description: "C'est vide ici !",
    title: "Ajouter une lesson",
    cta: "Ajouter une lesson",
    Add: () => <Form
        name='Formulaire lesson'
        onValuesChange={console.log}
        layout="vertical"
        requiredMark
      >
        <Form.Item
          name="name"
          label="Nom"
          rules={[{ required: true, message: 'Please enter user name' }]}
        >
          <Input placeholder="Please enter user name" />
        </Form.Item>
      </Form>,
  },
};
