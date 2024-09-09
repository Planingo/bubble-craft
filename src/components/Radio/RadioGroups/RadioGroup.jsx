import { Radio as AntdRadio } from "antd";
import "./radioGroup.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/radio/
 *
 */
export const RadioGroup = ({ ...props }) => {
  return (
    <div className="storybook-radiogroup">
      <AntdRadio.Group {...props} />
    </div>
  );
};
