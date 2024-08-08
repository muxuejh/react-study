import React from 'react'
import { getChannelApi } from '@/apis/article'

export function useChannel() {
  const [channelList, setChannelList] = React.useState([])

  React.useEffect(() => {
    getChannelList()
  }, [])

  const getChannelList = async () => {
    const res = await getChannelApi()
    setChannelList(res.data.channels)
  }

  return { channelList }
}
