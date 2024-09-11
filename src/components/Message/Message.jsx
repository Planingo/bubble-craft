import { message as antdMessage } from "antd";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./message.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/message/
 *
 */
export const Message = ({ type, content, children, ...props }) => {
  const [messageApi, contextHolder] = antdMessage.useMessage();

  const onClick = () => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <>
      {contextHolder}
      <Button className="storybook-message" onClick={onClick} {...props}>
        {children}
      </Button>
    </>
  );
};

Message.propTypes = {
  /**
   * TODO property
   */
  type: PropTypes.string,
  /**
   * TODO property
   */
  content: PropTypes.string,
};

Message.defaultProps = {};
