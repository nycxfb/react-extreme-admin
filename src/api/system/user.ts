import request from '@/utils/request';

/**
 * @author nycxfb
 * @date 2023-04-01 14:43:14
 * @description:用户登录
 */
export function http_user_login(params: any) {
  return request({
    url: '/api/system/user/login',
    method: 'post',
    data: params,
  });
}

/**
 * @author nycxfb
 * @date 2023-04-01 14:43:25
 * @description:用户注册
 */
export function http_user_register(params: any) {
  return request({
    url: '/api/system/user/register',
    method: 'post',
    data: params,
  });
}

/**
 * @author nycxfb
 * @date 2023-04-01 14:43:42
 * @description:用户上传
 */
export function http_user_upload(params: any) {
  return request({
    url: '/api/system/user/upload',
    method: 'post',
    data: params,
  });
}

/**
 * @author nycxfb
 * @date 2023-04-01 14:43:53
 * @description:验证码
 */
export function http_user_captcha() {
  return request({
    url: '/api/system/user/captcha',
    method: 'get',
  });
}
