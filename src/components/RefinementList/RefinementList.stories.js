import React from 'react';

import { RefinementList } from './RefinementList';
import { IntlProvider } from '../../../translation/IntlProvider';
import { UserOutlined } from '../Icon/icon';
import { Form } from 'antd';
import { Input } from '../Input/Input';
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Templates/RefinementList',
  component: RefinementList,
};

const RefinementListGlobal = (args) => <IntlProvider locale='fr'>
    <BrowserRouter>
      <RefinementList {...args} />
    </BrowserRouter>
  </IntlProvider>;

export const Default = RefinementListGlobal.bind({});

Default.args = {
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
};