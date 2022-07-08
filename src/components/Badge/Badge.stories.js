import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import Badge from './Badge';

/**
 * COUCOU
 */
export default {
  component: Badge,
  title: 'Composants/Badge',
  decorators: [withTests({ results })],
};

const Template = args => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
    count: 12
}

Default.argTypes = {
    color: {
        description:'Personnaliser la couleur des points du badge', 
        control: {
            type: 'color'
        },
    },
    count: {
        description:'Numéro à afficher sur le badge', 
        control: {
            type: 'number'
        }
    },
    dot: {
        description:"Indique s'il faut afficher un point rouge au lieu de compter", 
        control: {
            type: 'boolean'
        },
        table: {
            defaultValue: {
                summary: 'false',
            }
        }
    },
    offset: {
        description:'Définir le décalage du point du badge (ex : offset: {[10, 10]})', 
        control: {
        type: "array",
        }
    },  
    overflowCount: {
        description: 'Nombre maximum à afficher',
        control: {
            type: 'number'
        },
        table: {
            defaultValue: {
                summary: '99'
            }
        }
    },
    showZero: {
        description:"Indique s'il faut afficher le badge lorsque le nombre est égal à zéro", 
        control: {
            type: 'boolean'
        },
        table: {
            defaultValue: {
                summary: 'false'
            }
        }
    },
    size: {
        description:'Si `count` est défini, `size` définit la taille du badge', 
        control: {
            type: 'select',
            options: [
                'default',
                'small'
            ]
        },
        table: {
            defaultValue: {
                summary: 'default'
            }
        }
    },
    status: {
        description:'Définir statut du point du badge', 
        control: {
        type: 'select',
        options: [
            'success',
            'processing',
            'default',
            'error',
            'warning'
        ]
        },
        table: {
            defaultValue: {
                summary: 'default'
            }
        }
    },
    text: {
        description:"Si `status` est défini, `text` définit le texte d'affichage de l'état `dot`", 
        control: {
            type: 'text',
        }
    },
    title: {
        description:'Texte à afficher au survol du badge', 
        control: {
            type: 'text'
        }
    }
};