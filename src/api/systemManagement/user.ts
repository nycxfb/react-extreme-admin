import request from "@/utils/request";

function getUserList(params: any) {
	return request({
		url: "/api/systemManagement",
		method: "get",
		params
	});
}

export { getUserList };
