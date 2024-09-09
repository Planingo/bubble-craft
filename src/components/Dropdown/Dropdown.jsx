import { Dropdown as AntdDropdown } from "antd";
import "./dropdown.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/dropdown/
 *
 */
export const Dropdown = ({ children, ...props }) => {
  return (
    <AntdDropdown className="storybook-dropdown" {...props}>
      {children}
    </AntdDropdown>
  );
};

Dropdown.propTypes = {
  /**
   * TODO property
   */
};

Dropdown.defaultProps = {};
