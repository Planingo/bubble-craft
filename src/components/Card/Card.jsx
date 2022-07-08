import React from 'react';
import { Card as AntdCard } from 'antd';
import './card.css'

/**
 * 
 * Documentations andt du composant : https://ant.design/components/card/
 * 
 */
export default function Card({children, tags, ...props }){
  return (
    <AntdCard
      hoverable
      {...props}
    />
  );
};

// Card.propTypes = {
//   /**
//   * TODO property
//   */
//    downloadTitle: PropTypes.string,
//   /**
//   * TODO property
//   */
//    cloudTitle: PropTypes.string,
//   /**
//   * TODO property
//   */
//    deleteTitle: PropTypes.string,
//    /**
//    * TODO property
//    */
//     onDownload: PropTypes.func,
//    /**
//    * TODO property
//    */
//     onCloud: PropTypes.func,
//    /**
//    * TODO property
//    */
//     onDelete: PropTypes.func,
//   /**
//   * TODO property
//   */
//    activeTabKey: PropTypes.string,
//   /**
//   * TODO property
//   */
//    alt: PropTypes.string,
//   /**
//   * TODO property
//   */
//    src: PropTypes.string,
//   /**
//   * TODO property
//   */
//    title: PropTypes.node,
//   /**
//   * TODO property
//   */
//    className: PropTypes.string,
//   /**
//   * TODO property
//   */
//    tags: PropTypes.array,
//   /**
//   * TODO property
//   */
//    type: PropTypes.string,
//   /**
//   * TODO property
//   */
//   icon: PropTypes.node,
//   /**
//   * TODO property
//   */
//   style: PropTypes.object,
// };
