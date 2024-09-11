import { Avatar as AntdAvatar } from "antd";
import "./avatar.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/avatar/
 *
 */
export const Avatar = ({ children, ...props }) => {
  return (
    <AntdAvatar className="storybook-avatar" {...props}>
      {children}
    </AntdAvatar>
  );
};

Avatar.propTypes = {
  /**
   * TODO property
   */
};

Avatar.defaultProps = {};
