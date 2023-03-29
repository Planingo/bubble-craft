import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

/**
 * 
 * Documentations andt du composant : https://ant.design/components/button/
 * 
 */
export const Button = ({...props }) => {
  return (
    <AntdButton className="storybook-button"
      type={props.type || 'primary'}
      {...props}
    />
  );
};

Button.propTypes = {
  /**
  * Option pour ajuster la largeur du bouton à sa largeur parent
  */
  block: PropTypes.bool,
  /**
  * Définir l'état de danger du bouton
  */
  danger: PropTypes.bool,
  /**
  * État désactivé du bouton
  */
  disabled: PropTypes.bool,
  /**
  * Rendre l'arrière-plan transparent et inverser les couleurs du texte et des bordures
  */
  ghost: PropTypes.bool,
  /**
  * URL de redirection du bouton de lien
  */
  href: PropTypes.string,
  /**
  * Définissez le `type` html d'origine du `buton`, voir : MDN
  */
  htmlType: PropTypes.string,
  /**
  * Définir le composant icône du bouton
  */
  icon: PropTypes.node,
  /**
  * Définir l'état de chargement du bouton
  */
  loading: PropTypes.bool,
  /**
   * Peut être défini la forme du bouton
   */
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
  /**
  * Définir la taille du bouton
  */
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  /**
  * Identique à l'attribut cible de a, fonctionne lorsque href est spécifié
  */
  target: PropTypes.string,
  /**
  * Définir le gestionnaire pour gérer l'événement de clic
  */
  onClick: PropTypes.func,
};

Button.defaultProps = {
};
