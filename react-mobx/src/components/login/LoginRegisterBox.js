import React, { useState } from 'react';
import { Divider } from 'antd';
import LoginQrcode from './LoginQrcode';
import LoginMobile from './LoginMobile';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import Register from './Register';
import './login.less';

function LoginRegisterBox({ setVisible }) {
  const [show, setShow] = useState('login_qrcode');

  return (
    <div className="login-register">
      <div className="login-register-info">
        <img src="" alt="" />
      </div>
      <div className="login-register-form">
        <div className="login-register-tabs">
          {show === 'forget_password' && <ForgetPassword setShow={setShow} setVisible={setVisible} />}
          {show === 'reset_password' && <ResetPassword setShow={setShow} setVisible={setVisible} />}
          {show === 'login_qrcode' && <LoginQrcode setShow={setShow} setVisible={setVisible} />}
          {show === 'login_mobile' && <LoginMobile setShow={setShow} setVisible={setVisible} />}
          {show === 'register' && <Register setShow={setShow} setVisible={setVisible} />}
        </div>
        <Divider plain>其他登录方式</Divider>
        <div className="login-register-actions">
          <a onClick={() => setShow('login_mobile')}>
            <i className="webfont icow-shouji" />
            <span>手机/邮箱</span>
          </a>
          <a>
            <i className="webfont icow-qq1" />
            <span>QQ登录</span>
          </a>
          <a onClick={() => setShow('login_qrcode')}>
            <i className="webfont icow-xingzhuangjiehe" />
            <span>微信登录</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterBox;
