import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';
import './button.less'

/**
 * 
 * Documentations andt du composant : https://ant.design/components/button/
 * 
 */
export default function Button({...props }){
  return (
    <div className="storybook-button">
        <AntdButton
          {...props}
        />
    </div>
  );
};

// Button.propTypes = {
//   /**
//   * TODO property
//   */
//   activeGrid: PropTypes.bool,
//   /**
//   * TODO property
//   */
//    activeList: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   switch: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   block: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   disabled: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   danger: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   ghost: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   onlyIcon: PropTypes.bool,
//   /**
//   * TODO property
//   */
//    type: PropTypes.oneOf(['primary', 'dashed', 'link', 'text', 'default']),
//   /**
//   * TODO property
//   */
//   href: PropTypes.string,
//   /**
//   * TODO property
//   */
//   htmlType: PropTypes.string,
//   /**
//   * TODO property
//   */
//   className: PropTypes.string,
//   /**
//   * TODO property
//   */
//   icon: PropTypes.node,
//   /**
//   * TODO property
//   */
//   loading: PropTypes.bool,
//   /**
//   * TODO property
//   */
//   size: PropTypes.oneOf(['large', 'middle', 'small']),
//   /**
//   * TODO property
//   */
//   target: PropTypes.string,
//   /**
//   * TODO property
//   */
//   onClick: PropTypes.func,
//   /**
//   * TODO property
//   */
//   rightIcon: PropTypes.bool,
// };

// Button.defaultProps = {
//   block: false,
//   disabled: false,
//   htmlType: "button",
//   loading: false,
//   size: "middle",
//   type: 'primary',
//   onlyIcon: false,
//   rightIcon: false,
//   switch: false,
//   activeGrid: true
// };
