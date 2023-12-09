import React from 'react';
import { Button } from './Button';
import { PoweroffOutlined } from '../Icon/icon'
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  component: Button,
  title: 'Atomes/Button',
  decorators: [withTests({ results })],
  
};

const ButtonGlobal = (args) => <Button {...args} />;

export const Default = ButtonGlobal.bind({});
Default.parameters = {
  jest: ['button.test.jsx'],
};

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
