import axios from 'axios';
import { config } from '../config';
import { history, storage } from '../utils';
import { message } from 'antd';
import { user } from '../store';

const globalOptions = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Basic 123456'
  }
};

export default class BasicService {
  constructor(baseURL = '') {
    this.baseURL = baseURL;
  }

  get(url, options) {
    return this._request('get', url, null, options);
  }

  post(url, data, options) {
    return this._request('post', url, data, options);
  }

  put(url, data, options) {
    return this._request('put', url, data, options);
  }

  delete(url, options) {
    return this._request('delete', url, null, options);
  }

  setToken(token) {
    console.log('设置token', token);
    storage.local.set('x-token', token);
    if (config.debug) {
      globalOptions.headers['Authorization'] = `Basic 123456`;
    } else {
      globalOptions.headers['Authorization'] = token;
    }
  }

  _request(method, url, data, options = {}) {
    const headers = Object.assign({}, globalOptions.headers, options.headers);
    const opt = {
      baseURL: this.baseURL,
      withCredentials: true,
      method,
      url: config.apiHost + url,
      data,
      params: options.params || {},
      headers
    };
    return axios(opt)
      .then(res => {
        if (res.data.code === 1001) {
          message.error('登录失效');
          user.clearUserInfo();
          history.push('/');
          return false;
        } else if (res.data.code) {
          message.error(res.data.message);
          return false;
        }
        return res.data.data || true;
      })
      .catch(err => {
        console.error('err', err);
        return Promise.reject(err);
      });
  }
}
