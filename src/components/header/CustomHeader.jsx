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
    <Header
      fixed
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        gap: 10,
        padding: "0 30px",
      }}
    >
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
