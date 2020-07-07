import React from 'react';
import styles from './index.css';
import { Button } from 'antd';

const homecount = (props) => {
    return (
        <>
            <div className={styles.warp}>
                <div className={styles.containar}>
                    <div className={styles.top}>
                        <h1>首款在线Canvas动画生成工具</h1>
                        <p>5分钟上手，做动画比做PPT还简单</p>
                        <span>MG动画制作，网页动画特效制作，商业动画，产品宣传，互动课件，</span><br />
                        <span>全网唯- - - -款可交互的canvas动画工具，支持保存成mp4,canvas动画。</span>
                        <div className={styles.but}>
                            <Button type="ghost" size='large'>新手教程</Button>
                            <Button type="danger" size='large'>立即开始</Button>
                        </div>
                        <div className={styles.top_cont}>
                            <img src={require('@/assets/01首页/WX20200128-212432.png')} />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div>
                            <h2>产品特点</h2>
                        </div>
                        <div className={styles.product_trait}>
                            <ul className={styles.product_right}>
                                <li>
                                    <img src={require('@/assets/01首页/Icon.png')} />
                                    <span>生成canvas/mp4/gif等动画格式</span>
                                </li>
                                <li>
                                    <img src={require('@/assets/01首页/Icon(1).png')} />
                                    <span>首款可交互视频工具</span>
                                </li>
                                <li>
                                    <img src={require('@/assets/01首页/Icon(2).png')} />
                                    <span>海量精美模板</span>
                                </li>
                                <li>
                                    <img src={require('@/assets/01首页/Icon(3).png')} />
                                    <span>云端存储功能</span>
                                </li>
                            </ul>
                            <ul className={styles.product_left}>
                                <li>
                                    <span>海量开放元件库</span>
                                    <img src={require('@/assets/01首页/组 2.png')} />
                                </li>
                                <li>
                                    <span>支持制作H5游戏</span>
                                    <img src={require('@/assets/01首页/组 3.png')} />
                                </li>
                                <li>
                                    <span>Ali语音合成</span>
                                    <img src={require('@/assets/01首页/组 4.png')} />
                                </li>
                                <li>
                                    <span>AI抠图</span>
                                    <img src={require('@/assets/01首页/组 5.png')} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.partner}>
                        <img src={require('@/assets/01首页/组 7.png')} />
                        <div>
                            <h2>战略合作伙伴</h2>
                            <span>共赢才是长期合作的基石</span><br/>
                            <span>H5DS的产品和优质的服务,赢得了越多来越多客户的认可和信赖。</span>
                        </div>
                    </div>
                    <div className={styles.review}>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default homecount;

  