import { Alert as AntdAlert } from "antd";
import "./alert.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/alert/
 *
 */
export const Alert = ({ children, ...props }) => {
  return (
    <AntdAlert className="storybook-alert" {...props}>
      {children}
    </AntdAlert>
  );
};

Alert.propTypes = {
  /**
   * TODO property
   */
};

Alert.defaultProps = {};
