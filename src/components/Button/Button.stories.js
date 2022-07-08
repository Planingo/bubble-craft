import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import Button from './Button';
import {PoweroffOutlined} from '@ant-design/icons'

export default {
  component: Button,
  title: 'Atomes/Button',
  decorators: [withTests({ results })],
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Ananas",
  icon: <PoweroffOutlined />
}

Default.argTypes = {
    block: {
      description:'Option pour ajuster la largeur du bouton à sa largeur parent', 
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: {
            summary: 'false',
        }
      }
    },
    danger: {
      description: "Définir l'état de danger du bouton", 
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: {
            summary: 'false',
        }
      }
    },
    disabled: {
      description: "État désactivé du bouton", 
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: {
            summary: 'false',
        }
      }
    },
    ghost: {
      description: "Rendre l'arrière-plan transparent et inverser les couleurs du texte et des bordures", 
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: {
            summary: 'false',
        }
      }
    },
    href: {
      description: "URL de redirection du bouton de lien", 
      control: {
        type: "text"
      }
    },
    htmlType: {
      description: "Définissez le type html d'origine du bouton, voir : MDN", 
      control: {
        type: "text"
      },
      defaultValue: "button"
    },
    icon: {
      description: "Définir le composant icône du bouton", 
      control: {
        type: "array"
      }
    },
    loading: {
      description: "Définir l'état de chargement du bouton", 
      control: {
        type: "number"
      },
      table: {
        defaultValue: {
            summary: 'false',
        }
      }
    },
    shape: { 
      description: "Peut définir la forme du bouton",
      control: {
        type: 'select',
        options: [
          'default',
          'circle',
          'round',
        ]
      },
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
    size: {
      description: "Définir la taille du bouton",
      control: {
        type: 'select',
        options: [
          'large',
          'middle',
          'small'
        ]
      },
      table: {
        defaultValue: {
          summary: 'middle'
        }
      }
    },
    target: {
      description: "Identique à l'attribut cible de a, fonctionne lorsque href est spécifié", 
      control: {
        type: "text"
      }
    },
    type: {
      description: "Peut définir `default` `link` `ghost` `primary` `dashed` `text`",
      control: {
        type: 'select',
        options: ['primary', 'dashed', 'link', 'default', 'ghost', `text`],
      },
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
    onclick: {
      description: "Définir le gestionnaire pour gérer l'événement de `clic`",
      control: {
        type: 'select',
        options: ['primary', 'dashed', 'link', 'default', 'ghost'],
      },
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
};
