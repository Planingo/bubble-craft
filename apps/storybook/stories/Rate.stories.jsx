import React from 'react';
import { Rate } from '@planingo/design-system'

export default {
  component: Rate,
  title: 'Atomes/Rate',
};

const Template = args => <Rate {...args} />;

export const Default = Template.bind({});

Default.args = {
    count: 7
}

Default.argTypes = {
    allowClear: {
        control: {
            type: 'boolean'
        },
    },
    allowHalf: {
        control: {
            type: 'boolean'
        }
    },
    autoFocus: {
        control: {
            type: 'boolean'
        }
    },
    character: {
        control: {
            type: "object",
        }
    },  
    className: {
        control: {
            type: 'text'
        }
    },
    count: {
        control: {
            type: 'number'
        }
    },
    defaultValue: {
        control: {
            type: 'number',
        }
    },
    disabled: {
        control: {
            type: 'boolean',
        }
    },
    style: {
        control: {
            type: 'text',
        }
    },
    tooltips: {
        control: {
            type: 'object'
        }
    },
    value: {
        control: {
            type: 'number'
        }
    },
    onBlur: {
        control: {
            type: 'object'
        }
    },
    onChange: {
        control: {
            type: 'object'
        }
    },
    onFocus: {
        control: {
            type: 'object'
        }
    },
    onHoverChange: {
        control: {
            type: 'object'
        }
    },
    onKeyDown: {
        control: {
            type: 'object'
        }
    }
};
