import React from 'react';
import { Tag } from './Tag';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  component: Tag,
  title: 'Atomes/Tag',
  decorators: [withTests({ results })],
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['tag.test.jsx'],
};

Default.args = {
  children: "Ananas"
}

Default.argTypes = {
  closable: {
        control: {
            type: 'boolean'
        },
    },
    closeIcon: {
        control: {
            type: 'array'
        }
    },
    color: {
        control: {
            type: 'color'
        }
    },
    icon: {
        control: {
            type: "array",
        }
    },  
    visible: {
        control: {
            type: 'boolean'
        }
    },
    onClose: {
        control: {
            type: 'boolean'
        }
    }
};
