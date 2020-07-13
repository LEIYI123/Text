import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function LoginQrcode({ setShow }) {
  const onFinish = () => {
    setShow('reset_password');
  };
  const onFinishFailed = () => {};

  // phone, email
  const [type, setType] = useState('phone');

  return (
    <div className="login-register-forgetpassword">
      <h1 className="login-register-title">找回密码</h1>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        {type === 'phone' && (
          <Form.Item name="username" rules={[{ required: true, message: '请输入手机号' }]}>
            <Input placeholder="请输入手机号" prefix={<i className="webfont icow-yonghu" />} />
          </Form.Item>
        )}
        {type === 'email' && (
          <Form.Item name="username" rules={[{ required: true, message: '请输入邮箱' }]}>
            <Input placeholder="请输入邮箱" prefix={<i className="webfont icow-youxiang" />} />
          </Form.Item>
        )}
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" prefix={<i className="webfont icow-mima" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            重置密码
          </Button>
        </Form.Item>
      </Form>
      {type === 'phone' && <a onClick={() => setType('email')}>通过邮箱找回密码</a>}
      {type === 'email' && <a onClick={() => setType('phone')}>通过手机找回密码</a>}
    </div>
  );
}

export default LoginQrcode;
