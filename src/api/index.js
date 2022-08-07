import http from './http'
export function getListData(params) {
  return http.get('/list/', {
    params: params
  })
}