import { Form } from 'antd';
import React from 'react';
import { Header } from '../components/Header/Header';
import { UserOutlined } from '../components/Icon/icon';
import { Input } from '../components/Input/Input';


const meta = {
  title: 'Templates/Header',
  component: Header,
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
