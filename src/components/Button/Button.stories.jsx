import React from 'react';
import { Button, PoweroffOutlined } from './Button'

export default {
  component: Button,
  title: 'Atomes/Button',
  
};

const ButtonGlobal = (args) => <Button {...args} />;

export const Default = ButtonGlobal.bind({});

Default.args = {
  children: "Ananas",
  icon: <PoweroffOutlined />
}

Default.argTypes = {
  block: {
    type: "boolean"
  },
  type: {
    type: "string"
  },
    danger: {
        type: "boolean"
    },
    disabled: {
        type: "boolean"
    },
    ghost: {
        type: "boolean"
    },
    href: {
        type: "text"
    },
    htmlType: {
        type: "text"
    },
    icon: {
        type: "array"
    },
    loading: {
      control: {
        type: "number"
      }
    },
    shape: {
        type: 'select',
        options: [
          'default',
          'circle',
          'round',
        ]
    },
    size: {
        type: 'select',
        options: [
          'large',
          'middle',
          'small'
        ]
    },
    target: {
        type: "text"
    },
    onclick: {
        type: 'select',
    },
    className: {
        type: 'text'
    }
};
