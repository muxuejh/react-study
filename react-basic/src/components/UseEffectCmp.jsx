import { useEffect } from 'react'

function UseEffectCmp() {
  useEffect(() => {
    console.log('D1组件挂载了')
    return () => {
      console.log('D1组件卸载了')
    }
  }, [])
  return <div>D1组件</div>
}

export default UseEffectCmp
