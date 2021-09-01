import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import { DownloadOutlined, CloudUploadOutlined, DeleteOutlined, TagsOutlined } from "../Icon/Icon"
import './card.less'
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag'
import { Tooltip } from '../Tooltip/Tooltip';

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
        <div className='title-container'>
          <h1>{props?.title}</h1>
        </div>
        {/* <div className='tag-container'>
          {props?.tags.map(lesson => <Tag type={props?.type} icon={props?.icon}>{lesson}</Tag>)}
        </div> */}
      </div>}
      hoverable
      style={props?.style || { width: 300 }}
      cover={<img alt={props?.alt} src={props?.src} />}
      actions={[
        <Tooltip title={props.downloadTitle} placement='bottom'>
          <DownloadOutlined key="download" id='download' onClick={props?.onDownload} />
        </Tooltip>,
        <Tooltip title={props.cloudTitle} placement='bottom'>
          <CloudUploadOutlined key="cloud" id='cloud' onClick={props?.onCloud} />
        </Tooltip>,
        <Tooltip title={props.deleteTitle} placement='bottom'>
          <DeleteOutlined key="delete" id='delete' onClick={props?.onDelete} />
        </Tooltip>,
      ]}
    />
  );
};

Card.propTypes = {
  /**
  * TODO property
  */
   downloadTitle: PropTypes.string,
  /**
  * TODO property
  */
   cloudTitle: PropTypes.string,
  /**
  * TODO property
  */
   deleteTitle: PropTypes.string,
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
