import { Input as AntdInput } from "antd";

import "../input.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/input/
 *
 */
export const InputPassword = ({ ...props }) => {
  return <AntdInput.Password className="storybook-input" {...props} />;
};

InputPassword.propTypes = {};

InputPassword.defaultProps = {};
