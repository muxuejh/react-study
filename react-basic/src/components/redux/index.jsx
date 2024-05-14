import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addToNum } from '../../store/modules/counter'
import { fetchChannelList } from '../../store/modules/channel'
import { useEffect } from 'react'

function ReduxCmp() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannelList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
      <ul>
        {channelList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReduxCmp
