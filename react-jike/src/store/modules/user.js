import { createSlice } from '@reduxjs/toolkit'
import { request, getToken, setToken as _setToken } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      _setToken(action.payload)
    }
  }
})

const { setToken } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = loginForm => {
  return async dispatch => {
    const res = await request.post('/authorizations', loginForm)
    dispatch(setToken(res.data.token))
  }
}

export { fetchLogin, setToken }
export default userReducer
