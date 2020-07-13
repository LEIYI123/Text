import './manage.less';

import React, { Component } from 'react';
import { CommonFooter, CommonHeader } from '../../components/header-footer';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer
class Manage extends Component {
  render() {
    console.log(this.props.user.info);
    return (
      <div className="manage">
        <CommonHeader />
        <div className="manage-content">
          {JSON.stringify(this.props.user.info)}
        </div>
        <CommonFooter />
      </div>
    );
  }
}
export default Manage;
