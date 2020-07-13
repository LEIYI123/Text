import BasicService from './BasicService';
import { config } from '../config';
import { storage } from '../utils';
import stores from '../store';
/**
 * @desc 测试用
 */
class UserService extends BasicService {
  constructor() {
    super();
    // 保存token
    const token = storage.local.get('x-token');
    if (token) {
      this.setToken(token);
    }
  }

  // 验证码
  getCaptcha() {
    return `${config.apiHost}/account/img_captcha?t=` + +new Date();
  }

  /**
 * {
      "username": "admin",
      "password": "admin",
      "captchaCode": "ffct"
    }
 * @param {*} registerInfo
 */
  register = async registerInfo => {
    return await this.post(`/account/register`, registerInfo);
  };

  // 获取app统计数据
  getStatistics = async () => {
    return await this.get(`/open/app-statistics`);
  };

  // 登录
  login = async params => {
    const res = await this.post(`/account/login`, params);
    if (res) {
      this.setToken(res.token);
    }
    return res;
  };

  oauthLogin = async (provider, code) => {
    const res = await this.post('/account/oauth-login', { provider, code });
    stores.user.setUserInfo(res.user, res.token);
    this.setToken(res.token);
    return res;
  };

  // 退出
  logout = async () => {
    const res = await this.get(`/account/logout`);
    stores.user.clearUserInfo();
    return res;
  };

  /**
   * 更新用户信息，如果userInfo包含 avatarUrl,则修改头像，否则修改 nickName、email、telphone
   * @param {*} userInfo
   */
  updateUserInfo = async userInfo => {
    return await this.post('/account/update', userInfo);
  };

  /**
   * 修改密码
   * @param {string} oldPassword
   * @param {string} password
   */
  changePassword = async (oldPassword, password) => {
    return await this.post('/account/change-password', { oldPassword, password });
  };

  /**
   * 获取用户信息
   */
  getUserDetail = async () => {
    const res = await this.get('/account/detail');
    stores.user.setUserInfo(res);
    return res;
  };
}

export const userService = new UserService();
