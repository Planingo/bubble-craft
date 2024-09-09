import { Collapse as AntdCollapse } from "antd";

import "./collapse.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/collapse/
 *
 */
export const Collapse = ({ children, ...props }) => {
  return <AntdCollapse className="storybook-collapse" {...props} />;
};

Collapse.propTypes = {
  /**
   * TODO property
   */
};

Collapse.defaultProps = {};
