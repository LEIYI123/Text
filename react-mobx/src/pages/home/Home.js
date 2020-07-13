import './home.less';

import React, { Component } from 'react';
import { CommonFooter, CommonHeader } from '../../components/header-footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <CommonHeader />
        <div className="home-content">home</div>
        <CommonFooter />
      </div>
    );
  }
}
export default Home;
