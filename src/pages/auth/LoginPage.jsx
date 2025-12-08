import React, { useEffect } from "react";
import { message, Card, Checkbox, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import BeforeAuthLayout from "../../layout/BeforeAuthLayout";
import CustomInputItem from "../../components/input/CustomInputItem";
import { EMAIL_RULE, PASSWORD_RULE } from "../../staticText/ErrorText";
import CustomBtn from "../../components/button/CustomBtn";
import { loginUser } from "../../store/action/authActions";
import CustomHelmet from "../../util/CustomHelmet";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);
  return (
    <BeforeAuthLayout>
      <CustomHelmet title="Login" />
      <Card style={{ maxWidth: 400 }}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <CustomInputItem
            type="text"
            name="email"
            placeholder="Email"
            rules={EMAIL_RULE}
            prefix={<UserOutlined />}
          />

          <CustomInputItem
            type="password"
            name="password"
            placeholder="Password"
            rules={PASSWORD_RULE}
            prefix={<LockOutlined />}
          />

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <CustomBtn type="primary" htmlType="submit" loading={loading} block>
              Log in
            </CustomBtn>
          </Form.Item>
        </Form>
      </Card>
    </BeforeAuthLayout>
  );
};

export default LoginPage;
