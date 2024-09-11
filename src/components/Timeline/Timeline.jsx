import { Timeline as AntdTimeline } from "antd";
import PropTypes from "prop-types";
import "./timeline.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/timeline/
 *
 */
export const Timeline = ({ ...props }) => {
  return <AntdTimeline className="storybook-timeline" {...props} />;
};

Timeline.propTypes = {
  /**
   * TODO property
   */
  items: PropTypes.array,
};

Timeline.defaultProps = {};
