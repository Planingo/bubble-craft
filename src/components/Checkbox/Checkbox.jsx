import { Checkbox as AntdCheckbox } from "antd";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/checkbox/
 *
 */
export const Checkbox = ({ onChange, checked, children, ...props }) => {
  return (
    <AntdCheckbox aria-label="checkbox" onChange={onChange} {...props}>
      {children}
    </AntdCheckbox>
  );
};
