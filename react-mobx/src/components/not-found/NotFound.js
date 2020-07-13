import './not-found.less';

import React, { Component } from 'react';

import { Button } from 'antd';

export default class NotFound extends Component {
  componentDidMount() {
    if (location.pathname === '/') {
      location.href = '/login';
    }
  }

  render() {
    return (
      <div className="not-found">
        <div className="not-found-title">404</div>
        <div className="not-found-info">Page Not Found</div>
        <div className="not-found-content">
          <p>对不起,没有找到您所需要的页面,可能是URL不确定,或者页面已被移除。</p>
          <Button type="primary">Back Home</Button>
        </div>
      </div>
    );
  }
}
