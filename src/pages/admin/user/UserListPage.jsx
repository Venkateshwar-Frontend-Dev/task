import React, { useEffect, useState } from "react";
import { Flex, Typography, message } from "antd";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import AfterAuthLayout from "../../../layout/AfterAuthLayout";
import CustomBtn from "../../../components/button/CustomBtn";
import CustomSearchInput from "../../../components/input/CustomSearchInput";
import CustomTabs from "../../../components/tab/CustomTabs";
import UserTable from "./components/UserTable";
import UserCard from "./components/UserCard";
import UserAddAndEditModal from "./components/UserAddAndEditModal";
import { getUserList } from "../../../store/action/userAction";
import UserDeleteModel from "./components/UserDeleteModel";
import CustomPagination from "../../../components/pagination/CustomPagination";
import usePagination from "../../../hooks/usePagination";
import CustomHelmet from "../../../util/CustomHelmet";

const { Title } = Typography;

const UserListPage = () => {
  const { data, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialModelOpenState = {
    addAndEdit: false,
    delete: false,
  };
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(data);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(initialModelOpenState);

  const {
    currentPage,
    pageSize,
    total,
    onChange,
    setCurrentPage,
    paginatedData,
  } = usePagination(filteredUsers, 8);

  const showAddModal = () => {
    setSelectedUser(null);
    setIsModalOpen((prev) => ({ ...prev, addAndEdit: true }));
  };
  const showEditModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen((prev) => ({ ...prev, addAndEdit: true }));
  };
  const showDeleteModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen((prev) => ({ ...prev, delete: true }));
  };
  const handleSubmit = () => {
    setSelectedUser(null);
    setIsModalOpen(initialModelOpenState);
  };
  const handleClose = () => {
    setSelectedUser(null);
    setIsModalOpen(initialModelOpenState);
  };

  useEffect(() => {
    const filtered = data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchText, data, setCurrentPage]);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    if (error) {
      message.open({
        type: "error",
        content: error,
        duration: 0,
      });
    }
  }, [error]);

  const tabsItem = [
    {
      label: "Table",
      icon: <TableOutlined />,
      content: (
        <UserTable
          showModal={showEditModal}
          showDeleteModal={showDeleteModal}
          userList={paginatedData}
        />
      ),
    },
    {
      label: "Card",
      icon: <UnorderedListOutlined />,
      content: (
        <UserCard
          showModal={showEditModal}
          showDeleteModal={showDeleteModal}
          userList={paginatedData}
        />
      ),
    },
  ];

  return (
    <AfterAuthLayout>
      <CustomHelmet title="User List" />
      <div className="content-inner">
        <Flex gap="middle" align="center" justify="space-between" wrap="wrap">
          <Title level={5} style={{ margin: 0 }}>
            Users
          </Title>
          <Flex gap="10px" align="center" wrap="wrap" justify="end">
            <CustomSearchInput
              onChange={(e) => setSearchText(e.target.value)}
            />
            <CustomBtn color="primary" variant="solid" onClick={showAddModal}>
              Create User
            </CustomBtn>
          </Flex>
        </Flex>

        <CustomTabs tabsItem={tabsItem} />
      </div>
      {paginatedData?.length > 0 && (
        <CustomPagination
          currentPage={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={onChange}
        />
      )}
      <UserAddAndEditModal
        isModalOpen={isModalOpen.addAndEdit}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        selectedUser={selectedUser}
      />
      <UserDeleteModel
        isModalOpen={isModalOpen.delete}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        selectedUser={selectedUser}
      />
    </AfterAuthLayout>
  );
};

export default UserListPage;
