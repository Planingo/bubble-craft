import React from 'react';
import { Radio } from "../components/Radio/Radio";

export default {
  title: "Atomes/Radio",

  argTypes: {
    autoFocus: {
      name: "autoFocus",
      description: "autoFocus",

      control: {
        type: "boolean",
      },

      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },

    checked: {
      description: "checked",

      control: {
        type: "boolean",
      },

      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },

    defaultChecked: {
      description: "defaultChecked",

      control: {
        type: "boolean",
      },

      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },

    disabled: {
      description: "disabled",

      control: {
        type: "boolean",
      },

      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },

    value: {
      description: "value",

      control: {
        type: "text",
      },
    },

    children: {
      description: "children",

      control: {
        type: "text",
      },
    },
  },
};

export const Default = {
  render: (args) => {
    return <Radio {...args} />;
  },

  name: "Default",
};
