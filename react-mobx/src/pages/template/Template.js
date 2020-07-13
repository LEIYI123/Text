import './template.less';

import React, { Component } from 'react';
import { CommonFooter, CommonHeader } from '../../components/header-footer';

export default class Template extends Component {
  render() {
    return (
      <div className="template">
        <CommonHeader />
        <div className="template-content">template</div>
        <CommonFooter />
      </div>
    );
  }
}
