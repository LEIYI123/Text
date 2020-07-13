import { action, observable, transaction } from 'mobx';
import { history, storage } from '../utils';

import { userService } from '../server/user.service';

/**
 * @desc 存放外部传入的props数据
 */
export default class User {
  @observable token = storage.local.get('x-token'); // 外部传入的参数
  @observable info = storage.local.get('x-user-info'); // 外部传入的参数

  /**
   *
   * @param {*} info
   * @param {*} token
   */
  @action
  setUserInfo(info) {
    this.info = info;
    storage.local.set('x-user-info', this.info);
  }

  @action
  setToken(token) {
    this.token = token;
    storage.local.set('x-token', token);
  }

  @action
  updateUserInfo(values) {
    transaction(() => {
      for (let key in values) {
        this.info[key] = values[key];
      }
      storage.local.set('x-user-info', this.info);
    });
  }

  @action
  async getUserInfoFromServer() {
    const data = await userService.getUserDetail();
    return data;
  }

  @action
  logout() {
    userService.logout().then(() => {
      this.clearUserInfo();
      history.push('/');
    });
  }

  @action
  clearUserInfo() {
    transaction(() => {
      this.info = null;
      this.token = null;
    });
    storage.local.remove('x-token');
    storage.local.remove('x-user-info');
  }
}
