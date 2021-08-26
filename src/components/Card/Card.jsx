import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import { DownloadOutlined, CloudUploadOutlined, DeleteOutlined, TagsOutlined } from "../Icon/Icon"
import './card.less'
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag'

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/card/
 * 
 */
export const Card = ({children, ...props }) => {
  return (
      <AntdCard
      title={<div className="title">
        <h1>{props?.title}</h1>
        <div className='tag-container'>
          {props?.tags.map(lesson => <Tag type={props?.type} icon={props?.icon}>{lesson}</Tag>)}
        </div>
      </div>}
      hoverable
      style={props?.style}
      cover={<img alt={props?.alt} src={props?.src} />}
      actions={[
        <DownloadOutlined key="download" id='download' onClick={props?.onDownload} />,
        <CloudUploadOutlined key="cloud" id='cloud' onClick={props?.onCloud} />,
        <DeleteOutlined key="delete" id='delete' onClick={props?.onDelete} />,
      ]}
    />
  );
};

Card.propTypes = {
  /**
  * TODO property
  */
   onDownload: PropTypes.func,
  /**
  * TODO property
  */
   onCloud: PropTypes.func,
  /**
  * TODO property
  */
   onDelete: PropTypes.func,
  /**
  * TODO property
  */
   activeTabKey: PropTypes.string,
  /**
  * TODO property
  */
   alt: PropTypes.string,
  /**
  * TODO property
  */
   src: PropTypes.string,
  /**
  * TODO property
  */
   title: PropTypes.string,
  /**
  * TODO property
  */
   className: PropTypes.string,
  /**
  * TODO property
  */
   tags: PropTypes.array,
  /**
  * TODO property
  */
   type: PropTypes.string,
  /**
  * TODO property
  */
  icon: PropTypes.node,
  /**
  * TODO property
  */
  style: PropTypes.object,
};

Card.defaultProps = {
  src: 'https://avatars.bugsyaya.dev/285/',
  title: 'Minerva McGonagall',
  tags: [],
};
