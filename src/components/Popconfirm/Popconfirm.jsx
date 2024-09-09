import { Popconfirm as AntdPopconfirm } from "antd";
import PropTypes from "prop-types";
import "./popconfirm.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/popconfirm/
 *
 */
export const Popconfirm = ({ children, ...props }) => {
  return (
    <AntdPopconfirm className="storybook-popconfirm" {...props}>
      {children}
    </AntdPopconfirm>
  );
};

Popconfirm.propTypes = {
  /**
   * TODO property
   */
  title: PropTypes.string,
};

Popconfirm.defaultProps = {};
