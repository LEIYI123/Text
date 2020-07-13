import './back-top.less';
import React, { Component } from 'react';
import { BackTop, Popover } from 'antd';

export default class BackTopAd extends Component {
  render() {
    return (
      <BackTop className="h5ds-back-top" visibilityHeight={-10}>
        <Popover
          placement="left"
          title={null}
          content={
            <div onClick={e => e.stopPropagation()}>
              <img width={200} src="https://cdn.h5ds.com/doc/images/gzh.png" alt="" />
            </div>
          }
          trigger="hover"
        >
          <div className="qrcode-box" onClick={e => e.stopPropagation()}>
            <i className="webfont icow-gongzhonghao"></i>
          </div>
        </Popover>
        <Popover
          placement="left"
          title={null}
          content={
            <div onClick={e => e.stopPropagation()}>
              <p>
                业务咨询：
                <a href="http://wpa.qq.com/msgrd?uin=676015863" rel="noopener noreferrer" target="_blank">
                  <img
                    title="点击这里给我发消息"
                    src="//wpa.qq.com/pa?p=2:1666839010:51"
                    alt="点击这里给我发消息"
                    width="79"
                    height="25"
                    border="0"
                  />
                </a>
              </p>
              <p>
                QQ1群：
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="//shang.qq.com/wpa/qunwpa?idkey=aa23c39ac41fc357948499e5e0b8aeb7898e1ef03cead84c1d8374b155f19584"
                >
                  549856478（满）
                </a>
              </p>
              <p>
                QQ2群：
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="//shang.qq.com/wpa/qunwpa?idkey=e6f803edcb40d16d8d654ac77f4e594403c7b871752fabd54f149d1d8850f848"
                >
                  934157637
                </a>
              </p>
            </div>
          }
          trigger="hover"
        >
          <div className="qq-box" onClick={e => e.stopPropagation()}>
            <i className="webfont icow-QQ"></i>
          </div>
        </Popover>
        <div className="back-top"></div>
      </BackTop>
    );
  }
}
