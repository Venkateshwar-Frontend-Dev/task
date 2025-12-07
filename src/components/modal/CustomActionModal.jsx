import React from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const CustomActionModal = ({
  isModalOpen,
  handleSubmit,
  handleClose,
  ModelTitle,
  children,
  okText,
}) => {
  return (
    <Modal
      className="action-modal"
      title={ModelTitle}
      closable={true}
      closeIcon={<CloseOutlined />}
      destroyOnHidden={false}
      maskClosable={false}
      open={isModalOpen}
      onOk={handleSubmit}
      onCancel={handleClose}
      okText={okText || "Submit"}
      width={{
        xs: "90%",
        sm: "80%",
        md: "60%",
        lg: "40%",
        xl: "40%",
        xxl: "40%",
      }}
    >
      {children}
    </Modal>
  );
};

export default CustomActionModal;
