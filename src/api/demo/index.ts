import request from "@/utils/request";

export function http_demo(params: any) {
	return request({
		url: "/api/demo/demo1",
		method: "post",
		data: params
	});
}
