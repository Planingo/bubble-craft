import { Tag as AntdTag } from "antd";
import PropTypes from "prop-types";
import "./tag.css";

/**
 * Documentations andt du composant : https://ant.design/components/tag/
 *
 */
export const Tag = ({ children, ...props }) => {
  return <AntdTag {...props}>{children}</AntdTag>;
};

Tag.propTypes = {
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
   * Définit l'icon du tag
   */
  icon: PropTypes.node,
  /**
   * Fonction permettant de fermer le tag
   */
  onClose: PropTypes.func,
};

Tag.defaultProps = {
  closable: false,
};
