import './building.less';

import React, { Component } from 'react';

export default class Building extends Component {
  render() {
    return (
      <div className="building">
        <div className="building-box">
          <p>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt="" />
          </p>
          <h1>即将上线，敬请期待...</h1>
        </div>
      </div>
    );
  }
}
