import { Switch as AntdSwitch } from "antd";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/switch/
 *
 */
const Switch = ({
  props,
  autoFocus,
  checked,
  checkedChildren,
  className,
  defaultChecked,
  disabled,
  loading,
  size,
  unCheckedChildren,
  onChange,
  onClick,
}) => {
  return (
    <AntdSwitch
      aria-label="switch"
      autoFocus={autoFocus}
      checked={checked}
      checkedChildren={checkedChildren}
      className={className}
      defaultChecked={defaultChecked}
      disabled={disabled}
      loading={loading}
      size={size}
      unCheckedChildren={unCheckedChildren}
      onChange={onChange}
      onClick={onClick}
      {...props}
    />
  );
};

export { Switch };
