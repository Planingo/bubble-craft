import React from 'react';
import { Tag } from './Tag';

export default {
  component: Tag,
  title: 'Atomes/Tag',
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});

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
