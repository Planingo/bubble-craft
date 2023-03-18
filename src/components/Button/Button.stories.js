import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import Button from './Button';
import {PoweroffOutlined} from '@ant-design/icons'

export default {
  component: Button,
  title: 'Atomes/Button',
  decorators: [withTests({ results })],
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});

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
