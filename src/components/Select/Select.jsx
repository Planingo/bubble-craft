import { Select as AntdSelect } from "antd";

import "./select.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/select/
 *
 */
export const Select = ({ children, ...props }) => {
  return (
    <AntdSelect
      {...props}
      className="storybook-select"
      showSearch
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
    >
      {children}
    </AntdSelect>
  );
};

Select.propTypes = {
  /**
   * TODO property
   */
};

Select.defaultProps = {};
