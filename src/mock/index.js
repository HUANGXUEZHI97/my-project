import Mock from 'mockjs';

import * as one from './mockData/one.json';

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

// 构建一个函数对象，返回mock数据
const mockData = function () {
  let data = null;
  data = new Date('2018-09-21 10:00:00').getTime();
  return { data, one }
}

Mock.mock('/mock/index', /post|get/i, mockData);