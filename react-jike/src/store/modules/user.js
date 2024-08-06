import { createSlice } from '@reduxjs/toolkit'
import { getToken, setToken as _setToken, removeToken } from '@/utils'
import { loginApi, getProfileApi } from '@/apis/user'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = loginForm => {
  return async dispatch => {
    const res = await loginApi(loginForm)
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async dispatch => {
    const res = await getProfileApi()
    dispatch(setUserInfo(res.data))
  }
}

export { fetchLogin, fetchUserInfo, clearUserInfo }
export default userReducer
