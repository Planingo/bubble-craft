import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import Empty from './Empty';

export default {
  component: Empty,
  title: 'Molécules/Empty',
  decorators: [withTests({ results })],
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
