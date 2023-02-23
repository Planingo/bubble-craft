import React from 'react';

import { Dropdown } from './Dropdown';
import { SmileOutlined } from '@ant-design/icons';

export default {
  title: 'Molécules/Dropdown',
  component: Dropdown,
};

const DropdownGlobal = (args) => <Dropdown {...args} />;

export const Default = DropdownGlobal.bind({});

Default.args = {
    children: <p>Hover me</p>,
    menu: { 
      items : [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ]
    }
};