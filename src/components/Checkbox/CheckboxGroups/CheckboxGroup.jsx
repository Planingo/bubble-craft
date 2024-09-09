import { Checkbox as AntdCheckbox } from "antd";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/badge/
 *
 */
export const CheckboxGroup = ({
  props,
  defaultValue,
  disabled,
  name,
  options,
  value,
  onChange,
}) => {
  return (
    <AntdCheckbox.Group
      role="checkbox-group"
      defaultValue={defaultValue}
      name={name}
      disabled={disabled}
      options={options}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
