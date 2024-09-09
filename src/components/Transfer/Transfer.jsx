import { Transfer as AntdTransfer } from "antd";
import "./transfer.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/transfer/
 *
 */
export const Transfer = ({ children, ...props }) => {
  return (
    <AntdTransfer className="storybook-transfer" {...props}>
      {children}
    </AntdTransfer>
  );
};

Transfer.propTypes = {
  /**
   * TODO property
   */
};

Transfer.defaultProps = {};
