import { Collapse as AntdCollapse } from "antd";
import "./panel.css";

const { Panel: AntdPanel } = AntdCollapse;

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 */
export const Panel = ({ children, ...props }) => {
  return (
    <AntdPanel className="storybook-panel" {...props}>
      {children}
    </AntdPanel>
  );
};

Panel.propTypes = {};

Panel.defaultProps = {};
