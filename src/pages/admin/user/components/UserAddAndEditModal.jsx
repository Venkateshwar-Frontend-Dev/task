import React, { useEffect } from "react";
import { Form, message } from "antd";
import { REQUIRED_RULE, EMAIL_RULE } from "../../../../staticText/ErrorText";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../../../store/action/userAction";
import CustomActionModal from "../../../../components/modal/CustomActionModal";
import CustomInputItem from "../../../../components/input/CustomInputItem";

const UserAddAndEditModal = ({ isModalOpen, handleClose, selectedUser }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedUser) {
      form.setFieldsValue(selectedUser);
    } else {
      form.resetFields();
    }
  }, [selectedUser, form]);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        if (selectedUser) {
          // Edit user
          dispatch(updateUser(selectedUser.id, values));
          message.success("User updated successfully!");
        } else {
          // Add new user
          dispatch(addUser(values));
          message.success("User added successfully!");
        }

        form.resetFields();
        handleClose();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <CustomActionModal
      ModelTitle={selectedUser ? "Edit User" : "Add User"}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <CustomInputItem
          label="First Name"
          type="text"
          name="first_name"
          placeholder="Enter first name"
          rules={REQUIRED_RULE}
        />
        <CustomInputItem
          label="Last Name"
          type="text"
          name="last_name"
          placeholder="Enter last name"
          rules={REQUIRED_RULE}
        />
        <CustomInputItem
          label="Email"
          type="text"
          name="email"
          placeholder="Email"
          rules={EMAIL_RULE}
        />
        <CustomInputItem
          label="Profile Image Url"
          type="text"
          name="avatar"
          placeholder="Enter profile image url"
          rules={REQUIRED_RULE}
        />
      </Form>
    </CustomActionModal>
  );
};

export default UserAddAndEditModal;
