import React from 'react';

import { Button } from './Button';
import {PoweroffOutlined} from '@ant-design/icons'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { 
      control: {
        type: 'select',
        options: [
          'large',
          'middle',
          'small'
        ]
      },
      table: {
        defaultValue: {
          summary: 'middle'
        }
      }
    },
    shape: { 
      control: {
        type: 'select',
        options: [
          'circle',
          'round',
        ]
      },
    },
    type: { 
      control: {
        type: 'select',
        options: ['primary', 'dashed', 'link', 'text', 'default'],
      },
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
  },
  args: {
    children: "Ananas",
    icon: <PoweroffOutlined />
  }
};

const ButtonGlobal = (args) => <Button {...args} />;

export const Defaut = ButtonGlobal.bind({});