import React from 'react';
import { IntlProvider } from '../../translation/IntlProvider'
import { UserOutlined } from '../Icon/icon';
import { Form } from 'antd';
import { Input } from '../Input/Input';
import { BrowserRouter } from 'react-router-dom'

import { Header } from './Header';

export default {
  title: 'Templates/Header',
  component: Header,
};

const HeaderGlobal = (args) => <IntlProvider><BrowserRouter><Header {...args} /></BrowserRouter></IntlProvider>;

export const Default = HeaderGlobal.bind({});

Default.args = {
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
  secondActionText: "app.add.calendar",
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
    secondActionText: "app.add.calendar",
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
};