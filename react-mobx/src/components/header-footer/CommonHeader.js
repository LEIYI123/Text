import React, { Component } from 'react';
import Login from '../login';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { userService } from '../../server';
import { history } from '../../utils';

@inject('user')
@observer
class CommonHeader extends Component {

  logout = async () => {
    await userService.logout();
    history.push('/');
  }

  render() {
    return (
      <div className="common-header">
        header：
        {this.props.user.info ? (
          <>
            <Link to="/manage">个人中心</Link>
            <Divider type="vertical" />
            <a onClick={this.logout}>退出登录</a>
          </>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default CommonHeader;
