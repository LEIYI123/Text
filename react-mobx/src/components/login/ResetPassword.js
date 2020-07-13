import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function ResetPassword({ setShow }) {
  const onFinish = () => {
    setShow('login_mobile');
  };
  const onFinishFailed = () => {};

  return (
    <div className="login-register-resetpassword">
      <h1 className="login-register-title">重置密码</h1>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" prefix={<i className="webfont icow-mima" />} />
        </Form.Item>
        <Form.Item name="repassword" rules={[{ required: true, message: '请再次输入密码' }]}>
          <Input.Password placeholder="请再次输入密码" prefix={<i className="webfont icow-mima" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ResetPassword;
