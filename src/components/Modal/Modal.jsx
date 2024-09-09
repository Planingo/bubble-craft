import { Modal as AntdModal } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../Button/Button";
import "./modal.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/modal/
 *
 */
export const Modal = ({ children, ...props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {props?.OpenModal(showModal)}
      <AntdModal
        className="storybook-modal"
        mask={props?.mask}
        title={props?.title}
        description={props?.descriptionNotif}
        okText={props?.okText}
        open={props.open || isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
          <Button
            key="cancel"
            danger
            ghost
            onClick={async () => {
              handleCancel();
              props?.onCancel();
            }}
          >
            {props.cancelText}
          </Button>,
          props.ValidateButton(handleOk),
        ]}
        {...props}
      >
        {children}
      </AntdModal>
    </>
  );
};

Modal.propTypes = {
  /**
   * TODO property
   */
  OpenModal: PropTypes.func,
  /**
   * TODO property
   */
  afterClose: PropTypes.func,
  /**
   * TODO property
   */
  bodyStyle: PropTypes.string,
  /**
   * TODO property
   */
  cancelButtonProps: PropTypes.object,
  /**
   * TODO property
   */
  cancelText: PropTypes.string,
  /**
   * TODO property
   */
  centered: PropTypes.bool,
  /**
   * TODO property
   */
  autoFocusButton: PropTypes.oneOf([null, "ok", "cancel"]),
  /**
   * TODO property
   */
  className: PropTypes.string,
  /**
   * TODO property
   */
  closable: PropTypes.bool,
  /**
   * TODO property
   */
  closeIcon: PropTypes.node,
  /**
   * TODO property
   */
  content: PropTypes.node,
  /**
   * TODO property
   */
  getContainer: PropTypes.node,
  /**
   * TODO property
   */
  icon: PropTypes.node,
  /**
   * TODO property
   */
  keyboard: PropTypes.bool,
  /**
   * TODO property
   */
  mask: PropTypes.bool,
  /**
   * TODO property
   */
  maskClosable: PropTypes.bool,
  /**
   * TODO property
   */
  maskStyle: PropTypes.object,
  /**
   * TODO property
   */
  okButtonProps: PropTypes.node,
  /**
   * TODO property
   */
  okText: PropTypes.string,
  /**
   * TODO property
   */
  okType: PropTypes.string,
  /**
   * TODO property
   */
  style: PropTypes.string,
  /**
   * TODO property
   */
  title: PropTypes.node,
  /**
   * TODO property
   */
  width: PropTypes.number,
  /**
   * TODO property
   */
  zIndex: PropTypes.number,
  /**
   * TODO property
   */
  onCancel: PropTypes.func,
  /**
   * TODO property
   */
  onOk: PropTypes.func,
};

Modal.defaultProps = {
  closable: false,
  mask: false,
  cancelText: "Annuler",
};
