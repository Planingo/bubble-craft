import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as AntdTooltip } from 'antd';
import './tooltip.less'

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/tooltip/
 * 
 */
export const Tooltip = ({children, ...props }) => {
  return (
      <AntdTooltip {...props}>{children}</AntdTooltip>
  );
};

Tooltip.propTypes = {
  /**
  * TODO property
  */
  title: PropTypes.node,
  /**
   * TODO property
  */
  children: PropTypes.node,
  /**
  * TODO property
  */
  align: PropTypes.object,
  /**
   * TODO property
  */
  arrowPointAtCenter: PropTypes.bool,
  /**
  * TODO property
  */
  autoAdjustOverflow: PropTypes.bool,
  /**
   * TODO property
  */
  color: PropTypes.string,
  /**
  * TODO property
  */
  defaultVisible: PropTypes.bool,
  /**
   * TODO property
  */
  destroyTooltipOnHide: PropTypes.bool,
  /**
  * TODO property
  */
  getPopupContainer: PropTypes.func,
  /**
   * TODO property
  */
  mouseEnterDelay: PropTypes.number,
  /**
  * TODO property
  */
  mouseLeaveDelay: PropTypes.number,
  /**
   * TODO property
  */
  overlayClassName: PropTypes.string,
  /**
  * TODO property
  */
  overlayStyle: PropTypes.object,
  /**
   * TODO property
  */
  overlayInnerStyle: PropTypes.object,
  /**
  * TODO property
  */
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),
  /**
   * TODO property
  */
  trigger: PropTypes.oneOf(['hover', 'focus', 'click', 'contextMenu']),
  /**
  * TODO property
  */
  visible: PropTypes.bool,
  /**
   * TODO property
  */
  zIndex: PropTypes.number,
  /**
   * TODO property
  */
  onVisibleChange: PropTypes.func,               
};
