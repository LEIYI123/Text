import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import { userService } from '../../server';
import { user } from '../../store';

function Register({ setShow }) {
  const cap = userService.getCaptcha();
  const [captcha, setCaptcha] = useState(cap);

  const onFinish = async values => {
    console.log(values);
    const res = await userService.login({ ...values });
    user.setUserInfo(res);
    history.push('/user-center');
  };

  return (
    <div className="login-register-mobile">
      <h1 className="login-register-title">账号注册</h1>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: '请输入手机号或邮箱账号' }]}>
          <Input placeholder="请输入手机号或邮箱账号" prefix={<i className="webfont icow-yonghu" />} />
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={14}>
              <Form.Item name="captchaCode" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
                <Input placeholder="请输入验证码" prefix={<i className="webfont icow-yanzhengma" />} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Button style={{ height: 35 }} block={true}>
                获取验证码
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" prefix={<i className="webfont icow-mima" />} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block={true}>
          立即注册
        </Button>
      </Form>
      <div className="login-footer">
        <a onClick={() => setShow('forget_password')}>忘记密码</a>
        <Divider type="vertical" />
        <a onClick={() => setShow('login_mobile')}>账号登录</a>
      </div>
    </div>
  );
}

export default Register;
