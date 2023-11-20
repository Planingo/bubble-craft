import React from 'react';

import { Spin } from './Spin'

export default {
  title: 'Atomes/Spin',
  component: Spin,
  argTypes: {
    delay: {
      description:'delay', 
      control: {
        type: 'number'
      },
    },
    indicator: {
      description:'indicator', 
      control: {
        type: 'text'
      }
    },
    size: {
      description:'size', 
      control: {
        type: 'select',
        options: ["small", "default", "large"]
      },
      table: {
        defaultValue: {
          summary: 'default',
        }
      }
    },
    spinning: {
      description:'spinning', 
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        }
      }
    },  
    tip: {
      description: 'tip',
      control: {
        type: 'text'
      }
    },
    wrapperClassName: {
      description: 'wrapperClassName',
      control: {
        type: 'text'
      }
    }
  }
};

const SpinGlobal = (args) => <Spin {...args} />;

export const Default = SpinGlobal.bind({});

Default.args = {
};