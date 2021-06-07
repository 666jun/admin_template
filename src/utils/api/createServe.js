import axios from 'axios'
import {Message} from 'element-ui'
// 默认请求地址
//axios.defaults.baseURL = process.env.VUE_APP_BASE_API;  //全局环境变量
// 超时时间
axios.defaults.timeout = 15000;
//axios.defaults.headers.common['token'] = data.token;
axios.interceptors.response.use(
	function (response) {
		if (response.headers['content-type']=="application/file") {  //文件流
			return response
		}
		if (response.status == "200") {   // 正常200返回
			return response.data;
		} else {              // 非200正常返回
			Message({
				type:'error',
				message:'服务器繁忙！'
			});
			return Promise.reject(new Error('服务器繁忙！')) // 非正常返回
		}
	},
	function (error) {  // 响应错误
		Message({
			type:'error',
			message:'服务器响应失败！'
		});
		return Promise.reject(error)
	}
);

const createServe = {
	get: (url, req) => {
		return axios.get(url, req).then(res => {
			return res
		})
	},
	post: (url, req) => {
		return axios.post(url, req).then(res => {
			return res
		})
	}
};

export default createServe

