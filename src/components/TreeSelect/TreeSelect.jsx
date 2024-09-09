import { TreeSelect as AntdTreeSelect } from "antd";
import "./treeSelect.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/treeSelect/
 *
 */
export const TreeSelect = ({ children, ...props }) => {
  return (
    <AntdTreeSelect className="storybook-treeSelect" {...props}>
      {children}
    </AntdTreeSelect>
  );
};

TreeSelect.propTypes = {
  /**
   * TODO property
   */
};

TreeSelect.defaultProps = {};
