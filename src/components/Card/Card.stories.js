import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import Card from './Card';
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined } from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip';
import Tag from '../Tag/Tag';

export default {
  component: Card,
  title: 'Molécules/Card',
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
  title: "Minerva McGonagall"
}

Default.argTypes = {
  actions: {
    control: {
      type: 'object'
    },
  },
  activeTabKey: {
    control: {
      type: 'text'
    },
  },
  bodyStyle: {
    control: {
      type: 'text'
    },
  },
  bordered: {
    control: {
      type: 'boolean'
    },
  },
  cover: {
    control: {
      type: 'object'
    },
  },
  defaultActiveTabKey: {
    control: {
      type: 'text'
    },
  },
  extra: {
    control: {
      type: 'array'
    },
  },
  headStyle: {
    control: {
      type: 'text'
    },
  },
  hoverable: {
    control: {
      type: 'boolean'
    },
  },
  loading: {
    control: {
      type: 'boolean'
    },
  },
  size: {
    control: {
      type: 'text',
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
  tabBarExtraContent: {
    control: {
      type: 'object'
    },
  },
  tabList: {
    control: {
      type: 'object'
    },
  },
  tabProps: {
    control: {
      type: 'object'
    },
  },
  title: {
    control: {
      type: 'object'
    },
  },
  type: {
    control: {
      type: 'text'
    },
  },
  onTabChange: {
    control: {
      type: 'func'
    },
  },
};
