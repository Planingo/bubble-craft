import React from 'react';
import { Button } from './Button';
import { PoweroffOutlined } from '../Icon/icon'

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
      control: {
        type: "boolean"
      }
    },
    danger: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    ghost: {
      control: {
        type: "boolean"
      }
    },
    href: {
      control: {
        type: "text"
      }
    },
    htmlType: {
      control: {
        type: "text"
      }
    },
    icon: {
      control: {
        type: "array"
      }
    },
    loading: {
      control: {
        type: "number"
      }
    },
    shape: {
      control: {
        type: 'select',
        options: [
          'default',
          'circle',
          'round',
        ]
      }
    },
    size: {
      control: {
        type: 'select',
        options: [
          'large',
          'middle',
          'small'
        ]
      }
    },
    target: {
      control: {
        type: "text"
      }
    },
    onclick: {
      control: {
        type: 'select',
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
};
