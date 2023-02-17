import request from "@/utils/request";

export function http_user_login(params: any) {
	return request({
		url: "/api/system/user/login",
		method: "post",
		data: params
	});
}

export function http_user_register(params: any) {
	return request({
		url: "/api/system/user/register",
		method: "post",
		data: params
	});
}

export function http_user_upload(params: any) {
	return request({
		url: "/api/system/user/upload",
		method: "post",
		data: params
	});
}

export function http_user_captcha() {
	return request({
		url: "/api/system/user/captcha",
		method: "get"
	});
}
