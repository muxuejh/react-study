import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    // 商品列表
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCart(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push({ ...action.payload, count: 1 })
      }
    },
    increCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      item.count++
    },
    decreCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item.count === 0) return
      item.count--
    },
    clearCart(state) {
      state.cartList = []
    }
  }
})

const { setFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCart } = foodsStore.actions

const fetchFoodsList = () => {
  return async dispatch => {
    const res = await axios('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}

export { fetchFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCart }

export default foodsStore.reducer
