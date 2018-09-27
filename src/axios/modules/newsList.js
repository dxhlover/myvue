/*
*   资讯数据接口的封装：
*       包括：
*/
import request from '../request'
import qs from 'qs'


// 资讯列表
export function newsListApi(data) {
  return request({
      url: '/news/index',
      method: 'post',
      data: qs.stringify(data)
  })
}


// 资讯详情
export function newsDetailApi(data) {
    return request({
        url: '/v1/cgi/getInformationInfo',
        method: 'post',
        data: qs.stringify(data)
    })
}
