import { Skeleton as AntdSkeleton } from "antd";
import "./skeleton.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/skeleton/
 *
 */
export const Skeleton = ({ children, ...props }) => {
  return (
    <AntdSkeleton className="storybook-skeleton" {...props}>
      {children}
    </AntdSkeleton>
  );
};

Skeleton.propTypes = {
  /**
   * TODO property
   */
};

Skeleton.defaultProps = {};
