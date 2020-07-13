import React, { useState } from 'react';
import { Divider, Form, Input, Button } from 'antd';
import imgphone from '../../src/assets/00登录_slices/邮箱.png'
import styles from './login.css'

function LoginRegisterBox() {
  const [index,setIndex] = useState(true)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  let handle = ()=>{
    setIndex(!index)
  }
  return (
    <div className={styles.login}>
      <div className={styles.register}>
        <img src={require('../../src/assets/00登录_slices/logo.png')} alt="" />
        <div className={styles.from} style={{display: (index==true) ? "block" : "none"}}>
          <p>Hi，欢迎登录</p>
          <Form
            name="basic"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='手机号/邮箱' prefix={<img src={require('../../src/assets/00登录_slices/user-2-24px.png')} />} size='large' value={username} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder='密码' prefix={<img src={require('../../src/assets/00登录_slices/security-8-24px.png')} />} size='large' value={password} />
            </Form.Item>

            <Form.Item>
              <div>
                <Button type="danger" htmlType="submit" block={true} size='large' > 登录 </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.weixing} style={{display: (index==false) ? "block" : "none"}}>
          <p>微信扫码登录</p>
          <img src={require('../../src/assets/00登录_slices/二维码.png')} />
        </div>
      </div>
      <div className={styles.actions}>
        <Divider>快捷登录</Divider>
        <div className={(index==true) ? styles.bottom : styles.active}>
          <div>
            <img src={require('../../src/assets/00登录_slices/QQ.png')} />
            <p>QQ</p>
          </div>
          <div onClick={handle}>
            <img src={require('../../src/assets/00登录_slices/微信.png')} />
            <p>微信</p>
          </div>
        </div>
        <div className={(index==false) ? styles.bottom : styles.active}>
        <div>
            <img src={require('../../src/assets/00登录_slices/QQ.png')} />
            <p>QQ</p>
          </div>
          <div onClick={handle}>
            <img src={imgphone} />
            <p>邮箱 / 手机</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterBox;
