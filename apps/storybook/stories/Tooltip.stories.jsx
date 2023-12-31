import React from 'react';

import { Tooltip } from '@planingo/design-system'

export default {
  title: 'Atomes/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: { 
      control: {
        type: 'select',
        options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'],
      },
      table: {
        defaultValue: {
          summary: 'bottom'
        }
      }
    },
    trigger: { 
      control: {
        type: 'select',
        options: ['hover', 'focus', 'click', 'contextMenu'],
      },
      table: {
        defaultValue: {
          summary: 'hover'
        }
      }
    },
  },
  args: {
    children: "Minerva McGonagall",
    title: "C'est le prénom et le nom",
  }
};

const TooltipGlobal = (args) => <Tooltip {...args} />;

export const Default = TooltipGlobal.bind({});