/**
 * @author nycxfb
 * @date 2023-03-05 22:38:17
 * @description:校验合法url
 */
export function validateURL(textVal: string) {
	const urlregex =
		/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
	return urlregex.test(textVal);
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:38:33
 * @description:校验小写字母
 */
export function validateLowerCase(str: string) {
	const reg = /^[a-z]+$/;
	return reg.test(str);
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:38:58
 * @description:校验大写字母
 */
export function validateUpperCase(str: string) {
	const reg = /^[A-Z]+$/;
	return reg.test(str);
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:39:14
 * @description:校验大小写字母
 */

export function validatAlphabets(str: string) {
	const reg = /^[A-Za-z]+$/;
	return reg.test(str);
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:39:37
 * @description:校验身份证
 */
export function validateCard(value: string) {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	const result = reg.test(value);
	return result;
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:39:55
 * @description:校验手机号码
 */
export function validateMobile(value: string) {
	const reg = /^(1(3[0-9]|4[579]|5[012356789]|66|7[3678]|8[0-9]|9[89])[0-9]{8})$/;
	const result = reg.test(value);
	return result;
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:40:30
 * @description:校验邮箱
 */
export function validateEmail(value: string) {
	const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	const result = reg.test(value);
	return result;
}

/**
 * @author nycxfb
 * @date 2023-03-05 22:41:04
 * @description:验证非零的正实数,保留两位小数
 */
export function validatIntegral(value: string) {
	const reg = /^([+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
	const result = reg.test(value);
	return result;
}
