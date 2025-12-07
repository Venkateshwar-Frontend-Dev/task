import React from "react";
import { Space } from "antd";
import CustomTable from "../../../../components/table/CustomTable";
import CustomBtn from "../../../../components/button/CustomBtn";
import CustomAvatar from "../../../../components/avatar/CustomAvatar";
import { useSelector } from "react-redux";

const UserTable = ({ showModal, userList, showDeleteModal }) => {
  const { loading } = useSelector((state) => state.user);
  const columns = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      align: "center",
      render: (_, record) => (
        <CustomAvatar src={record.avatar} falbackText={record.first_name} />
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a href={`mailto:${text}`}>{text}</a>,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <CustomBtn
            variant="solid"
            color="primary"
            onClick={() => showModal(record)}
          >
            Edit
          </CustomBtn>
          <CustomBtn
            variant="solid"
            color="danger"
            onClick={() => showDeleteModal(record)}
          >
            Delete
          </CustomBtn>
          {/* <a>Invite {record.name}</a> */}
        </Space>
      ),
    },
  ];
  const data = userList;

  return (
    <CustomTable
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="id"
      loading={loading}
    />
  );
};

export default UserTable;
