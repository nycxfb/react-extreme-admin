import request from '@/utils/request';

/**
 * @author nycxfb
 * @description:获取天气
 */
export function http_weather(params: any) {
  return request({
    url: '/api/external/weather',
    method: 'get',
    params,
  });
}

/**
 * @author nycxfb
 * @description:获取每日一句
 */
export function http_dailyWord() {
  return request({
    url: '/api/external/dailyWord',
    method: 'get',
  });
}

/**
 * @author nycxfb
 * @description:获取新闻分类
 */
export function http_news_classification() {
  return request({
    url: '/api/external/news/classification',
    method: 'get',
  });
}

/**
 * @author nycxfb
 * @description:获取新闻列表
 */
export function http_news_list(params: any) {
  return request({
    url: '/api/external/news/list',
    method: 'get',
    params,
  });
}
