import { createSlice } from '@reduxjs/toolkit'

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload
    }
  }
})

const { setChannelList } = channelStore.actions

const fetchChannelList = () => {
  return async dispatch => {
    const res = await fetch('http://geek.itheima.net/v1_0/channels')
    res.json().then(res => {
      dispatch(setChannelList(res.data.channels))
    })
  }
}

export { fetchChannelList }
export default channelStore.reducer
