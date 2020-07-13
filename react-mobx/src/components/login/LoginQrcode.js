import React, { Component } from 'react';
import qrcode from '../../assets/images/mobile-editor.png';

class LoginQrcode extends Component {
  render() {
    return (
      <div className="login-register-qrcode">
        <p>
          <i className="webfont icow-weixin-full" />
          微信扫描立即登录
        </p>
        <img style={{ width: 200 }} src={qrcode} alt="" />
      </div>
    );
  }
}

export default LoginQrcode;
