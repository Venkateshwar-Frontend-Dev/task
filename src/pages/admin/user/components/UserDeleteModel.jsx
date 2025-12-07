import React from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import CustomActionModal from "../../../../components/modal/CustomActionModal";
import { deleteUser } from "../../../../store/action/userAction";

const UserDeleteModel = ({
  isModalOpen,
  handleSubmit,
  handleClose,
  selectedUser,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(selectedUser?.id));
    message.success("User deleted successfully!");
    handleSubmit();
  };
  return (
    <CustomActionModal
      ModelTitle={"Delete " + selectedUser?.first_name}
      isModalOpen={isModalOpen}
      handleSubmit={handleDelete}
      handleClose={handleClose}
      okText="Delete"
    >
      <p>Are you sure want to delete?</p>
    </CustomActionModal>
  );
};

export default UserDeleteModel;
