import React, { Component } from 'react';
import style from './_layout.css'
import { Button, Divider, BackTop } from 'antd';

const appcount = (props) => {
    return (
        <>
            <div className={style.warp}>
                <div className={style.contarinar}>
                    <div className={style.login}>
                        <img src={require('@/assets/01首页/logo.png')} />
                    </div>
                    <div className={style.cent}>
                        <ul>
                            <li>首页</li>
                            <li>作品案例</li>
                            <li>原件库</li>
                            <li>动画学院</li>
                            <li>创作者招募</li>
                            <li>更多</li>
                            <li>社区交流</li>
                        </ul>
                    </div>
                    <div className={style.right}>
                        <Button type="primary" size='large' className={style.btn}>登录</Button>
                    </div>
                </div>
            </div>
            {props.children}
            <footer className={style.footer}>
                <div className={style.contarinar}>
                    <div className={style.left}>
                        <img src={require('@/assets/01首页/22.png')} />
                    </div>
                    <div className={style.right}>
                        <ul>
                            <div>联系我们</div>
                            <li>电话（微信）：13551301693</li>
                            <li>商务QQ：676015863</li>
                            <li>地址:四川成都高新区软件园D区灵感咖啡</li>
                        </ul>
                        <ul>
                            <div>快速导航</div>
                            <li><span>首页</span><span>使用帮助</span></li>
                            <li><span>作品案例</span><span>元件库</span></li>
                            <li><span>动画学院</span><span>社区交流</span></li>
                        </ul>
                        <ul>
                            <div>官方微信</div>
                            <li>
                                <img src={require('@/assets/01首页/WX20200128-232753.png')} />
                            </li>
                        </ul>
                    </div>
                </div>
                <Divider dashed />
                <p>Copyright 2018. All right reserved. Powered by Aiquwukeiji. Designed by ManTou</p>
                <BackTop>
                    <div style={style}></div>
                </BackTop>
            </footer>
        </>
    );
}

export default appcount;