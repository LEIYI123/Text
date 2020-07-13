import React, { useState } from 'react';
import { Modal } from 'antd';
import LoginRegisterBox from './LoginRegisterBox';

export default function LoginRegister() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <a onClick={() => setVisible(true)}>登录/注册</a>
      <Modal
        bodyStyle={{ padding: 0 }}
        title={null}
        width={800}
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <LoginRegisterBox setVisible={setVisible}/>
      </Modal>
    </>
  );
}
