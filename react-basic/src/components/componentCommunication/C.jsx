import { useContext } from 'react'
import { MsgContext } from '../../App'

function C() {
  const contextMsg = useContext(MsgContext)
  return <div>{contextMsg}</div>
}

export default C
