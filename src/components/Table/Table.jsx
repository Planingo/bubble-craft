import { Table as AntdTable } from "antd";
import "./table.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/table/
 *
 */
export const Table = ({ ...props }) => {
  return <AntdTable className="storybook-table" {...props} />;
};

Table.propTypes = {
  /**
   * TODO property
   */
};

Table.defaultProps = {};
