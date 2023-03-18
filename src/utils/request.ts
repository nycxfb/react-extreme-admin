import axios, { AxiosResponse } from "axios";
import { message } from "antd";

const ERROR_CODES: { [key: number]: string } = {
	400: "错误请求,状态码:400",
	401: "未授权,请重新登录，状态码：401",
	403: "拒绝访问,状态码：403",
	404: "请求错误,未找到该资源,状态码:404",
	405: "请求方法未允许,状态码:405",
	408: "请求超时,状态码:408",
	500: "服务端出错,状态码:500",
	501: "网络未实现,状态码:501",
	502: "网关错误,状态码:502",
	503: "服务不可用,状态码:503",
	504: "网关超时,状态码:504",
	505: "HTTP版本不支持该请求,状态码:505"
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
	(response: any) => {
		// 处理token异常
		const { tokenexpired, JsonWebTokenError, tokenError } = response.headers;

		if (tokenexpired || JsonWebTokenError || tokenError) {
			setTimeout(() => {
				localStorage.clear();
				window.location.href = "/";
			}, 1000);
			return message.error(response.data.message);
		}
		return response.data;
	},
	error => {
		// 处理请求异常
		const { status } = error.response;
		if (error.response && status > 400 && status < 600) {
			if (ERROR_CODES[status]) {
				switch (status) {
					case status:
						return message.error(ERROR_CODES[status]);
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
