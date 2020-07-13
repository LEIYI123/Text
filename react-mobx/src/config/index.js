// api 请求服务器
const DEV_API = 'http://test.api.h5ds.com/api/v1';
const PRO_API = 'http://test.api.h5ds.com/api/v1';
const debug = false;

let apiHost = DEV_API;
if (process.env.NODE_ENV !== 'development') {
  apiHost = PRO_API;
}

const config = { apiHost, debug };

export { config };
