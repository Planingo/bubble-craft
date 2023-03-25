import React from 'react'
import { Rate as AntdRate } from 'antd'
import PropTypes from 'prop-types'
import { StarFilled } from '@ant-design/icons'

/**
 * 
 * Documentations andt du composant : https://ant.design/components/rate/
 * 
 */
export const Rate = ({
  ...props
}) => {
  return <AntdRate {...props} />
}

Rate.propTypes = {
  /**
   * S'il faut autoriser l'effacement lorsque vous cliquez à nouveau
   */
  allowClear: PropTypes.bool,
  /**
   * S'il faut autoriser la semi-sélection
  */
  allowHalf: PropTypes.bool,
  /**
    * Si vous focusez lorsque le composant est monté
    */
  autoFocus: PropTypes.bool,
  /**
    * Le caractère personnalisé du taux
    */
  character: PropTypes.node,
  /**
    * Le nom de la classe personnalisée du taux
    */
  className: PropTypes.string,
  /**
    * Nombre d'étoiles
    */
  count: PropTypes.number,
  /**
    * La valeur par défaut
    */
  defaultValue: PropTypes.number,
  /**
    * Si en lecture seule, impossible d'interagir
    */
  disabled: PropTypes.bool,
  /**
    * L'objet de style personnalisé de taux
    */
  style: PropTypes.string,
  /**
    * Personnaliser l'info-bulle par chaque caractère
    */
  tooltips: PropTypes.array,
  /**
    * La valeur actuelle
    */
  value: PropTypes.number,
  /**
    * Callback lorsque le composant perd le focus
    */
  onBlur: PropTypes.func,
  /**
    * Callback lors de la sélection de la valeur
    */
  onChange: PropTypes.func,
  /**
    * Callback quand le composant obtient le focus
    */
  onFocus: PropTypes.func,
  /**
    * Callback lors du survole d'un item
    */
  onHoverChange: PropTypes.func,
  /**
    * Callback lorsque keydown sur le composant
    */
  onKeyDown: PropTypes.func
}

Rate.defaultProps = {
  allowClear: true,
  allowHalf: false,
  autoFocus: false,
  character: <StarFilled />,
  count: 5,
  defaultValue: 0,
  disabled: false,
}
