import request from "@/utils/request";

export function http_weather(params: any) {
	return request({
		url: "/api/external/weather",
		method: "get",
		params
	});
}

export function http_dailyWord() {
	return request({
		url: "/api/external/dailyWord",
		method: "get"
	});
}

export function http_news_classification() {
	return request({
		url: "/api/external/news/classification",
		method: "get"
	});
}

export function http_news_list(params: any) {
	return request({
		url: "/api/external/news/list",
		method: "get",
		params
	});
}
