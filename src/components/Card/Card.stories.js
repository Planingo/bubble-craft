import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import Card from './Card';
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined, TagsOutlined } from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip';
import Tag from '../Tag/Tag';

export default {
  component: Card,
  title: 'Composants/Card',
  decorators: [withTests({ results })],
};

const Template = args => <Card {...args} />;

const tags = [
  {id:'metamorphose', name:'Métamorphose', type: 'lesson'}, 
  {id:'runes', name:'Ancient Runes', type: 'lesson'}, 
  {id:'arithmancy', name:'Arithmancy', type: 'lesson'}]

export const Default = Template.bind({});

Default.args = {
  actions: [
    <Tooltip title='Télécharger' placement='bottom'>
      <DownloadOutlined key="download" id='download' />
    </Tooltip>,
    <Tooltip title='Envoyer' placement='bottom'>
      <CloudUploadOutlined key="cloud" id='cloud' />
    </Tooltip>,
    <Tooltip title='Supprimer' placement='bottom'>
      <DeleteOutlined key="delete" id='delete' />
    </Tooltip>,
  ],
  cover: <>
    <div className="title-card">
      <div className='container'>
        {
          (<Tooltip placement='bottom' title={tags.map(tag => tag.name).join(', ')}>
            <div className='tag-container'>
              {tags.map(tag => <Tag type={tag?.type} icon={tag?.icon} key={tag.id}>{tag.name}</Tag>)}
            </div>
          </Tooltip>)
        }
      </div>
    </div>
    <img src="https://avatars.bugsyaya.dev/285/" alt="Etudiant"/>
  </>,
  title: "Minerva McGonagall",
  icon: <TagsOutlined />,
  type: 'lesson',
  downloadTitle: 'Télécharger',
  cloudTitle: 'Envoyer',
  deleteTitle: 'Supprimer',
}

Default.argTypes = {
  actions: {
    description:"La liste d'actions s'affiche en bas de la carte", 
    control: {
      type: 'object'
    },
  },
    // count: {
    //     description:'Numéro à afficher sur le badge', 
    //     control: {
    //         type: 'number'
    //     }
    // },
    // dot: {
    //     description:"Indique s'il faut afficher un point rouge au lieu de compter", 
    //     control: {
    //         type: 'boolean'
    //     },
    //     table: {
    //         defaultValue: {
    //             summary: 'false',
    //         }
    //     }
    // },
    // offset: {
    //     description:'Définir le décalage du point du badge (ex : offset: {[10, 10]})', 
    //     control: {
    //     type: "array",
    //     }
    // },  
    // overflowCount: {
    //     description: 'Nombre maximum à afficher',
    //     control: {
    //         type: 'number'
    //     },
    //     table: {
    //         defaultValue: {
    //             summary: '99'
    //         }
    //     }
    // },
    // showZero: {
    //     description:"Indique s'il faut afficher le badge lorsque le nombre est égal à zéro", 
    //     control: {
    //         type: 'boolean'
    //     },
    //     table: {
    //         defaultValue: {
    //             summary: 'false'
    //         }
    //     }
    // },
    // size: {
    //     description:'Si `count` est défini, `size` définit la taille du badge', 
    //     control: {
    //         type: 'select',
    //         options: [
    //             'default',
    //             'small'
    //         ]
    //     },
    //     table: {
    //         defaultValue: {
    //             summary: 'default'
    //         }
    //     }
    // },
    // status: {
    //     description:'Définir statut du point du badge', 
    //     control: {
    //     type: 'select',
    //     options: [
    //         'success',
    //         'processing',
    //         'default',
    //         'error',
    //         'warning'
    //     ]
    //     },
    //     table: {
    //         defaultValue: {
    //             summary: 'default'
    //         }
    //     }
    // },
    // text: {
    //     description:"Si `status` est défini, `text` définit le texte d'affichage de l'état `dot`", 
    //     control: {
    //         type: 'text',
    //     }
    // },
    // title: {
    //     description:'Texte à afficher au survol du badge', 
    //     control: {
    //         type: 'text'
    //     }
    // }
};
