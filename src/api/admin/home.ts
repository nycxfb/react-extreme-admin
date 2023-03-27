import request from "@/utils/request";

export function http_home_weather(params: any) {
	return request({
		url: "/api/external/weather",
		method: "get",
		params
	});
}

export function http_home_daily() {
	return request({
		url: "/api/external/dailyWord",
		method: "get"
	});
}
