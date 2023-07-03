import React from 'react';
import { Empty } from '@planingo/design-system'

export default {
  component: Empty,
  title: 'Molécules/Empty',
};

const Template = args => <Empty {...args} />;

export const Default = Template.bind({});

Default.args = {
    description: <p>Ceci est une super description !</p>
}

Default.argTypes = {
    description: {
        control: {
            type: 'array'
        },
    },
    image: {
        control: {
            type: 'array'
        }
    },
    imageStyle: {
        control: {
            type: 'string'
        }
    }
};
