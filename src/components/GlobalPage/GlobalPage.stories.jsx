import React from 'react';
import { UserOutlined } from '../Icon/icon';
import { Form } from 'antd';
import { Input } from '../Input/Input';
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from '../../translation/IntlProvider'
import { GlobalPage } from './GlobalPage';
import { Roles } from '../Roles/roles';

export default {
  title: 'Pages/GlobalPage',
  component: GlobalPage,
};

const GlobalPageGlobal = (args) => <IntlProvider>
    <BrowserRouter>
      <GlobalPage {...args} />
    </BrowserRouter>
  </IntlProvider>;

export const Default = GlobalPageGlobal.bind({});

Default.args = {
  navigation: {
    roles: [Roles.PLANING_KEEPER]
  },
  header: {
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
      secondActioning: console.log,
    },
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
  }
};

Default.argTypes = {
  roles: {
    type: 'multi-select',
    options: [
      Roles.SUPER_ADMIN,
      Roles.PLANING_KEEPER,
      Roles.STUDENT,
      Roles.PROFESSOR,
      Roles.COMPANY
    ]
  }
};
