import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  // 初始化state
  initialState: { count: 0 },
  // 修改状态的方法 同步方法 支持直接修改
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    addToNum(state, action) {
      state.count = action.payload
    }
  }
})

const { increment, decrement, addToNum } = counterStore.actions

export default counterStore.reducer
export { increment, decrement, addToNum }
