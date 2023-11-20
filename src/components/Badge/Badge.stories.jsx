import React from 'react';
import { Badge } from './Badge';

export default {
  component: Badge,
  title: 'Atomes/Badge',
};

const Template = args => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
    count: 12
}

Default.argTypes = {
    color: {
        control: {
            type: 'color'
        },
    },
    count: {
        control: {
            type: 'number'
        }
    },
    dot: {
        control: {
            type: 'boolean'
        }
    },
    offset: {
        control: {
            type: "object",
        }
    },  
    overflowCount: {
        control: {
            type: 'number'
        }
    },
    showZero: {
        control: {
            type: 'boolean'
        }
    },
    size: {
        control: {
            type: 'select',
            options: [
                'default',
                'small'
            ]
        }
    },
    status: {
        control: {
            type: 'select',
            options: [
                'success',
                'processing',
                'default',
                'error',
                'warning'
            ]
        }
    },
    text: {
        control: {
            type: 'text',
        }
    },
    title: {
        control: {
            type: 'text'
        }
    }
};
