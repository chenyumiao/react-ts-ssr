import axios from 'axios';
import xss from './xss'


let axiosIns = axios.create({});
/*axiosIns.defaults.baseURL = baseURL*/
axiosIns.defaults.headers.contentType = "application/json;charset=UTF-8";
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
// axiosIns.defaults.transformRequest = [function (data) {
//   //数据序列化
//   return qs.stringify(data);
// }
// ];
axiosIns.defaults.validateStatus = function (status) {
  return true;
};
axiosIns.interceptors.request.use(config=> {
  //配置config
  config.headers.Accept = 'application/json';
  return config;
}, err => {
  return Promise.reject(err)
});

axiosIns.interceptors.response.use(response => {
  let status = response.status;
  if (status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, err => {
  return Promise.reject(err)
});

let axiosMethod = ['get', 'post', 'patch','put'];
let http:any = {};
axiosMethod.forEach((method)=> {
  //数组取值的两种方式
  http[method]  = function (uri:string, data:any, config:any) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config).then((response:any)=> {
        resolve(response);
      }).catch((response:any)=> {
        reject(response);
      })
    })
  }
});

export default http
