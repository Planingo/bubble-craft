import React from 'react';
import { UserOutlined } from '../components/Icon/icon';
import { Form } from 'antd';
import { Input } from '../components/Input/Input';
import { Header } from '../components/Header/Header';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Templates/Header',
  component: Header,
  decorators: [withTests({ results })],
  parameters: { jest: ['header.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    placeholder: "Rechercher",
    isRefinementList: true,
    refinementList: {
    isGrid: true,
    firstActionText: "ajouter un truc",
    setIsGrid: console.log,
    FirstActionIcon: UserOutlined,
    FirstForm: <Form
      onValuesChange={(values) => console.log(values)}
      layout="vertical"
      hideRequiredMark
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
      hideRequiredMark
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
    secondActioning: console.log,},
    refinementDetails: {
      isGrid: true,
      firstActionText: "ajouter un truc",
      setIsGrid: console.log,
      FirstActionIcon: UserOutlined,
      FirstForm: <Form
        onValuesChange={(values) => console.log(values)}
        layout="vertical"
        hideRequiredMark
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
        hideRequiredMark
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
    }
  },
};
