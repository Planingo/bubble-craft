import { Switch } from "../components/Switch/Switch";

export default {
  title: "Atomes/Switch",

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

    checkedChildren: {
      description: "checkedChildren",

      control: {
        type: "text",
      },
    },

    className: {
      description: "className",

      control: {
        type: "text",
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

    loading: {
      description: "loading",

      control: {
        type: "boolean",
      },

      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },

    size: {
      description: "size",

      control: {
        type: "select",
        options: ["default", "small"],
      },

      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },

    unCheckedChildren: {
      description: "unCheckedChildren",

      control: {
        type: "text",
      },
    },

    onChange: {
      description: "onChange",

      control: {
        type: "text",
      },
    },

    onClick: {
      description: "onClick",

      control: {
        type: "text",
      },
    },
  },
};

export const Default = {
  render: (args) => {
    return <Switch {...args} />;
  },

  name: "Default",
};
