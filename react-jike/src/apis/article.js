import { request } from '@/utils'

export const getChannelApi = () => request({ url: '/channels', method: 'get' })
export const addArticleApi = (data) => request({ url: '/mp/articles', method: 'post', data })
export const getArticleListApi = (params) => request({ url: '/mp/articles', method: 'get', params })
