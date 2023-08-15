import React from 'react';
import { IntlProvider, UserOutlined, Input, Header } from '@planingo/design-system'
import { Form } from 'antd';
import { BrowserRouter } from 'react-router-dom'

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