import { request } from '@/utils'

export const getChannelApi = () => request({ url: '/channels', method: 'get' })
export const addArticleApi = data => request({ url: '/mp/articles', method: 'post', data })
export const getArticleListApi = params => request({ url: '/mp/articles', method: 'get', params })
export const deleteArticleApi = id => request({ url: `/mp/articles/${id}`, method: 'delete' })
export const getArticleDetailApi = id => request({ url: `/mp/articles/${id}`, method: 'get' })
export const updateArticleApi = data => request({ url: `/mp/articles/${data.id}?draft=false`, method: 'put', data })
