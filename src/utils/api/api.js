import createServe from './createServe'  //返回axios的请求数据方法
const ApiGet = createServe.get;
const ApiPost = createServe.post;
const IP = {
   dev : 'http://192.168.31.230:',
};

const Api = {
  login: (req) => {return ApiPost(`${IP.dev}/login`, req)},
};
export default Api
