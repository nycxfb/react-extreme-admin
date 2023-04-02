import request from '@/utils/request';

/**
 * @author nycxfb
 * @date 2023-02-08 15:39:52
 * @description:用户列表
 */
export function http_user_list(params: any) {
  return request({
    url: '/api/system/user/list',
    method: 'post',
    data: params
  });
}

/**
 * @author nycxfb
 * @date 2023-02-08 15:40:28
 * @description:添加用户
 */
export function http_user_add(params: any) {
  return request({
    url: '/api/system/user/add',
    method: 'post',
    data: params
  });
}

/**
 * @author nycxfb
 * @date 2023-02-09 09:38:24
 * @description:编辑用户
 */

export function http_user_edit(params: any) {
  return request({
    url: '/api/system/user/update',
    method: 'put',
    data: params
  });
}

/**
 * @author nycxfb
 * @date 2023-02-09 09:40:10
 * @description:删除用户
 */
export function http_user_delete(params: any) {
  return request({
    url: '/api/system/user/delete',
    method: 'delete',
    params
  });
}
