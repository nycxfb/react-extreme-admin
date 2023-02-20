import axios, { AxiosRequestConfig } from "axios";
import { message } from "antd";

const ERROR_CODES: { [key: number]: string } = {
	400: "错误请求,状态码:400",
	401: "未授权，请重新登录，状态码：401",
	403: "拒绝访问，状态码：403",
	404: "请求错误，未找到该资源",
	405: "请求方法未允许",
	408: "请求超时",
	500: "服务端出错",
	501: "网络未实现",
	502: "网关错误",
	503: "服务不可用",
	504: "网关超时",
	505: "HTTP版本不支持该请求"
};

const service = axios.create({
	baseURL: "",
	timeout: 50000
});

service.interceptors.request.use(
	config => {
		if (localStorage.getItem("token")) {
			config.headers["token"] = localStorage.getItem("token");
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	response => {
		// 处理token错误
		if (response.headers.tokenexpired || response.headers.JsonWebTokenError) {
			localStorage.clear();
			window.location.href = "/";
		}
		return response.data;
	},
	error => {
		// 处理请求错误
		if (error.response && error.response.status > 400 && error.response.status < 600) {
			if (ERROR_CODES[error.response.status]) {
				switch (error.response.status) {
					case error.response.status:
						return message.error(ERROR_CODES[error.response.status]);
					default:
						return message.error("系统异常,请稍后再试！");
				}
			}
		}
		return {
			code: "9999",
			msg: "系统异常，请稍后再试"
		};
	}
);

export default service;
