import request from '@/utils/request';

/**
 * @author nycxfb
 * @date 2023-02-08 15:39:52
 * @description:角色列表
 */
export function http_role_list(params: any) {
  return request({
    url: '/api/system/role/list',
    method: 'post',
    data: params
  });
}
