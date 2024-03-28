import React from 'react';
import { Card as AntdCard, Tabs } from 'antd';
import './card.css'
import PropTypes from 'prop-types'
import { Tooltip } from '../Tooltip/Tooltip';
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined } from '../Icon/icon';

/**
 * 
 * Documentations andt du composant : https://ant.design/components/card/
 * 
 */
export const Card = ({children, ...props }) => {
  return (
    <AntdCard
      title={props.title}
      cover={<img alt={props.alt} src={props.src} />}
      actions={[
        <Tooltip title={props.downloadTitle || 'Télécharger'} placement='bottom'>
          <DownloadOutlined className='download' />
        </Tooltip>,
        <Tooltip title={props.cloudTitle || 'Envoyer'} placement='bottom'>
          <CloudUploadOutlined className='cloud' />
        </Tooltip>,
        <Tooltip title={props.deleteTitle || 'Supprimer'} placement='bottom'>
          <DeleteOutlined className='delete' />
        </Tooltip>
      ]}
    />
  );
};

Card.propTypes = {
  /**
   * La liste d'actions s'affiche en bas de la carte
   */
  actions: PropTypes.array,
  /**
   * Clé actuelle du TabPane
   */
  activeTabKey: PropTypes.string,
  /**
   * Style à appliquer au contenu de la carte
   */
  bodyStyle: PropTypes.string,
  /**
   * Active/désactive le rendu de la bordure autour de la carte
   */
  bordered: PropTypes.bool,
  /**
   * Couverture de la carte
  */
  cover: PropTypes.node,
  /**
   * Clé initiale du TabPane actif, si activeTabKey n'est pas défini
  */
  defaultActiveTabKey: PropTypes.string,
  /**
   * Contenu à afficher dans le coin supérieur droit de la carte
  */
  extra: PropTypes.node,
  /**
   * Style à appliquer à la tête de carte
  */
  headStyle: PropTypes.string,
  /**
   * La carte se souleve lorsque vous survolez la carte
  */
  hoverable: PropTypes.bool,
  /**
  * Affiche un indicateur de chargement pendant que le contenu de la carte est récupéré
  */
  loading: PropTypes.bool,
  /**
   * Taille de la carte
  */
  size: PropTypes.oneOf(['default', 'small']),
  /**
  * Contenu supplémentaire dans la barre d'onglets
  */
  tabBarExtraContent: PropTypes.node,
  /**
   * Liste des têtes de TabPane
  */
  tabList: PropTypes.array,
  /**
   * Titre de la carte
  */
  title: PropTypes.node,
  /**
   * Type de style de carte, peut être défini sur `inner` ou non défini
  */
  type: PropTypes.string,
  /**
   * Callback lors du changement d'onglet
  */
  onTabChange: PropTypes.func,
};

Card.defaultProps = {
  bordered: true,
  hoverable: true,
  loading: false,
  size: 'default'
}
