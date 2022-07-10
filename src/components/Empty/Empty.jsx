import React from 'react'
import { Empty as AntdEmpty } from 'antd'
import PropTypes from 'prop-types'

/**
 * 
 * Documentations andt du composant : https://ant.design/components/empty/
 * 
 */
export default function Empty({
  ...props
}){
  return <AntdEmpty {...props} />
}

Empty.propTypes = {
  /**
   * Personnaliser la couleur des points du empty
   */
  description: PropTypes.node,
  /**
   * Numéro à afficher sur le empty
  */
  image: PropTypes.node,
  /**
    * Indique s'il faut afficher un point rouge au lieu de compter
    */
  imageStyle: PropTypes.string
}

Empty.defaultProps = {
  image: Empty.PRESENTED_IMAGE_DEFAULT,
}
