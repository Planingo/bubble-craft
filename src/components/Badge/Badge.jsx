import React from 'react'
import { Badge as AntdBadge } from 'antd'
import PropTypes from 'prop-types'

/**
 * 
 * Documentations andt du composant : https://ant.design/components/badge/
 * 
 */
export const Badge({
  ...props
}){
  return <AntdBadge {...props} />
}

Badge.propTypes = {
  /**
   * Personnaliser la couleur des points du badge
   */
  color: PropTypes.string,
  /**
   * Numéro à afficher sur le badge
  */
  count: PropTypes.number,
  /**
    * Indique s'il faut afficher un point rouge au lieu de compter
    */
  dot: PropTypes.bool,
  /**
    * Définir le décalage du point du badge (ex : offset: [10, 10])
    */
  offset: PropTypes.array,
  /**
    * Nombre maximum à afficher
    */
  overflowCount: PropTypes.number,
  /**
    * Indique s'il faut afficher le badge lorsque le nombre est égal à zéro
    */
  showZero: PropTypes.bool,
  /**
    * Si `count` est défini, `size` définit la taille du badge
    */
  size: PropTypes.oneOf(['default', 'small']),
  /**
    * Définir statut du point du badge
    */
  status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
  /**
    * Si `status` est défini, `text` définit le texte d'affichage de l'état `dot`
    */
  text: PropTypes.string,
  /**
    * Texte à afficher au survol du badge
    */
  title: PropTypes.string
}

Badge.defaultProps = {
  dot: false,
  overflowCount: 99,
  showZero: false,
  size: 'default',
  status: 'default',
}
