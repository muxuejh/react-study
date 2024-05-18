/**
 * hooks函数不能在组件外使用
 * hooks函数不能在if和for中使用
 */

import { useState } from 'react'

function useToggle() {
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)

  return { value, toggle }
}

function CustomHook() {
  const { value, toggle } = useToggle()
  return (
    <div>
      <button onClick={toggle}>toggle</button>
      {value && <div>自定义hook</div>}
    </div>
  )
}

export default CustomHook
