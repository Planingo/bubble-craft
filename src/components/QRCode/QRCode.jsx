import { QRCode as AntdQRCode } from "antd";
import PropTypes from "prop-types";
import "./qRCode.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/qRCode/
 *
 */
export const QRCode = ({ ...props }) => {
  return <AntdQRCode className="storybook-qRCode" {...props} />;
};

QRCode.propTypes = {
  /**
   * TODO value
   */
  value: PropTypes.string,
};

QRCode.defaultProps = {};
