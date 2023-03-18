import * as axios from "axios";

// 声明接口类型,解决 response 格式错误问题
declare module "axios" {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>;
	}
}
