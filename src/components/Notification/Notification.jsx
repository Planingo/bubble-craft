import { notification } from "antd";
import PropTypes from "prop-types";
import { createContext } from "react";
import { useIntl } from "react-intl";
import "./notification.css";

const Context = createContext({ name: "Default" });

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/notification/
 *
 */
export const Notif = ({ ...props }) => {
  const { formatMessage } = useIntl();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type) => {
    api[type]({
      message: <div className={`title ${type}-type`}>{props.title}</div>,
      description: (
        <Context.Consumer>
          {() => `${formatMessage({ id: props.description })}`}
        </Context.Consumer>
      ),
      placement: "topRight",
      duration: 2.5,
      className: "storybook-notification",
      ...props,
    });
  };

  return (
    <Context.Provider value="notif">
      {contextHolder}
      {props.OpenNotification(() => openNotification(props.type))}
    </Context.Provider>
  );
};

Notif.propTypes = {
  /**
   * TODO property
   */
  type: PropTypes.string,
  /**
   * TODO property
   */
  OpenNotification: PropTypes.func,
  /**
   * TODO property
   */
  title: PropTypes.node,
  /**
   * TODO property
   */
  description: PropTypes.node,
  /**
   * TODO property
   */
  bottom: PropTypes.number,
};

Notif.defaultProps = {
  type: "info",
};
