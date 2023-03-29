import * as axios from "axios";
import { AxiosRequestConfig } from "axios";
// 声明接口类型,解决 response ts类型校验错误问题
declare module "axios" {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>;
	}
}
