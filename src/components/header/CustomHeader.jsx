import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import CustomBtn from "../button/CustomBtn";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/reducer/authReducer";
const { Header } = Layout;
const { Title } = Typography;

const CustomHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <Header className="header">
      <Title level={5} style={{ color: "#fff", margin: 0 }}>
        Venkateshwara
      </Title>
      <CustomBtn
        color="danger"
        variant="solid"
        shape="circle"
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      />
    </Header>
  );
};

export default CustomHeader;
