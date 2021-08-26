import React from 'react';
import { Tag as AntdTag } from 'antd'
import PropTypes from 'prop-types';
import './tag.less'


/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/tag/
 * 
 */
 export const Tag = ({children, ...props }) => {
  return <AntdTag
  role='tag'
  className={props?.type}
    {...props} 
    >
      {children}
  </AntdTag>
}

Tag.propTypes = {
  /**
  * TODO property
  */
   type: PropTypes.string,
   /**
   * TODO property
   */
    closable: PropTypes.bool,
  /**
  * TODO property
  */
   closeIcon: PropTypes.node,
  /**
  * TODO property
  */
   color: PropTypes.string,
  /**
  * TODO property
  */
   icon: PropTypes.node,
  /**
  * TODO property
  */
   visible: PropTypes.bool,
  /**
  * TODO property
  */
   onClose: PropTypes.func,
};

Tag.defaultProps = {
  closable: false,
  visible: true,
};