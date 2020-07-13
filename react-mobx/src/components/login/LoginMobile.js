import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import { userService } from '../../server';
import { history } from '../../utils';

function LoginMobile({ setShow, setVisible }) {
  const cap = userService.getCaptcha();
  const [captcha, setCaptcha] = useState(cap);

  const onFinish = async values => {
    // 1、登录成功后自动设置x-token
    const res = await userService.login({ ...values });
    if (!res) {
      return;
    }
    // 2、获取用户详情，设置x-user-info
    const ress = await userService.getUserDetail();
    if (ress) {
      setVisible(false);
      history.push('/manage');
    }
  };

  return (
    <div className="login-register-mobile">
      <h1 className="login-register-title">账号登录</h1>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: '请输入手机号或邮箱账号' }]}>
          <Input placeholder="请输入手机号或邮箱账号" prefix={<i className="webfont icow-yonghu" />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" prefix={<i className="webfont icow-mima" />} />
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={16}>
              <Form.Item name="captchaCode" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
                <Input placeholder="请输入验证码" prefix={<i className="webfont icow-yanzhengma" />} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <img
                onClick={() => setCaptcha(userService.getCaptcha())}
                style={{ width: 86, height: 35 }}
                src={captcha}
                alt=""
              />
            </Col>
          </Row>
        </Form.Item>
        <Button type="primary" htmlType="submit" block={true}>
          立即登录
        </Button>
      </Form>
      <div className="login-footer">
        <a onClick={() => setShow('forget_password')}>忘记密码</a>
        <Divider type="vertical" />
        <a onClick={() => setShow('register')}>账号注册</a>
      </div>
    </div>
  );
}

export default LoginMobile;
