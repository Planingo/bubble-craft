import { TimePicker as AntdTimePicker } from "antd";
import dayjs from "dayjs";
import "./timePicker.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/timePicker/
 *
 */
export const TimePicker = ({ ...props }) => {
  const format = "HH:mm";
  return (
    <AntdTimePicker
      className="storybook-timePicker"
      defaultValue={props?.date && dayjs(props?.date, "HH:mm")}
      format={format}
      {...props}
    />
  );
};

TimePicker.propTypes = {
  /**
   * TODO property
   */
};

TimePicker.defaultProps = {};
