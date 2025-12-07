import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import CustomAvatar from "../../../../components/avatar/CustomAvatar";
import CustomBtn from "../../../../components/button/CustomBtn";
import CustomCardLoader from "../../../../components/loader/CustomCardLoader";
import CustomCardListNoData from "../../../../components/noData/CustomCardListNoData";

const { Title } = Typography;

const UserCard = ({ userList, showModal, showDeleteModal }) => {
  const { loading } = useSelector((state) => state.user);

  if (loading) return <CustomCardLoader />;

  if (!userList || userList.length === 0) return <CustomCardListNoData />;

  return (
    <Row style={{ width: "100%" }} gutter={[15, 15]}>
      {userList.map((data) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={6} key={data.id}>
          <Card
            className="user-card"
            style={{
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CustomAvatar
              src={data.avatar}
              falbackText={data.first_name}
              size={150}
            />
            <Title level={3}>{`${data.first_name} ${data.last_name}`}</Title>
            <Title level={5} style={{ color: "#a0a0a0", margin: 0 }}>
              {data.email}
            </Title>
            <div className="user-card-action-icons">
              <CustomBtn
                color="primary"
                variant="solid"
                shape="circle"
                size="large"
                icon={<EditOutlined />}
                onClick={() => showModal(data)}
              />
              <CustomBtn
                color="danger"
                variant="solid"
                shape="circle"
                size="large"
                icon={<DeleteOutlined />}
                onClick={() => showDeleteModal(data)}
              />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserCard;
