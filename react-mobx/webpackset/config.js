const path = require('path');

const resolve = url => path.resolve(__dirname, url);

module.exports = {
  theme: {},
  rootPath: (...args) => path.join(__dirname, '..', ...args),
  resolve,
  version: '6.0.0' // 这个是web的版本
};
