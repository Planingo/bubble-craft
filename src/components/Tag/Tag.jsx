import React from 'react';
import { Tag as AntdTag } from 'antd'
import PropTypes from 'prop-types';
import './tag.less'


/**
 * 
 * Ce composant permet de catégoriser et/ou de marquer des évenements, des actions....
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
  * Définit le type du bouton (primary, secondary, warning, professor, module, lesson, pathway)
  */
   type: PropTypes.string,
   /**
   * Définit si le tag est fermable ou non.
   */
    closable: PropTypes.bool,
  /**
  * Définit l'icon de fermeture du tag
  */
   closeIcon: PropTypes.node,
  /**
  * Définit la couleur du tag
  */
   color: PropTypes.string,
  /**
  * Définit l'icon
  */
   icon: PropTypes.node,
  /**
  * Définit si le tag est visible ou non
  */
   visible: PropTypes.bool,
  /**
  * Fonction permettant de fermer le tag
  */
   onClose: PropTypes.func,
};

Tag.defaultProps = {
  closable: false,
  visible: true,
};