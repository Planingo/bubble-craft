import { Watermark as AntdWatermark } from "antd";
import "./watermark.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/watermark/
 *
 */
export const Watermark = ({ children, ...props }) => {
  return (
    <AntdWatermark className="storybook-watermark" {...props}>
      {children}
    </AntdWatermark>
  );
};

Watermark.propTypes = {
  /**
   * TODO property
   */
};

Watermark.defaultProps = {};
