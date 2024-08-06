import { request } from '@/utils'

export const loginApi = data => request({ url: '/authorizations', method: 'post', data })
export const getProfileApi = () => request({ url: '/user/profile', method: 'get' })
