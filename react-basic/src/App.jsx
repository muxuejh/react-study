import { createContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import './app.css'
import A from './components/componentCommunication/A'
import B from './components/componentCommunication/B'
import UseEffectCmp from './components/UseEffectCmp'
import CustomHook from './components/CustomHook'

const style = {
  color: 'red',
  fontSize: '20px'
}

function Button() {
  return <button>按钮</button>
}
const Button1 = () => {
  return <button>按钮</button>
}

/**
 * context 跨层传值
 */
export const MsgContext = createContext()

function App() {
  const list = [1, 2, 3, 4, 5]
  const listDom = list.map(item => <li key={item}>{item}</li>)
  const isLoading = true

  const handleClick1 = e => {
    console.log('click', e)
  }

  const handleClick2 = (e, name) => {
    console.log('click', e)
    console.log('click', name)
  }

  /**
   * useState
   */
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({ name: '张三', age: 18 })
  const [arr, setArr] = useState([1, 2, 3])
  const changeObj = () => {
    setObj({ ...obj, name: '李四' })
  }
  const changeArr = () => {
    // setArr([...arr, 4])
    // setArr(arr.push(4)) // 会报错
    setArr(arr.splice(0, 1))
  }

  /**
   * 受控表单绑定
   */
  const [iptValue, setIptValue] = useState('')

  /**
   * 获取DOM
   */
  const inputRef = useRef(null)
  const getDOM = () => {
    console.dir(inputRef.current)
  }

  /**
   * 父子组件通信--子传父
   */
  const [childVal, setChildVal] = useState('子传父')
  const getMsg = msg => {
    setChildVal(msg)
  }

  /**
   * useEffect
   * 接收两个参数，第一个为回调函数（副作用函数），第二个为依赖项
   * 没有依赖项时，组件初始渲染和更新时执行(相当于vue中的onMounted+onUpdated)
   * 依赖项为[]，只在组件初始渲染时执行一次(相当于vue中的onMounted)
   * 添加特性依赖项，组件初始渲染和特性依赖项变化时执行(相当于vue中的watch)，比如第二个参数为一个变量count,那么在count变化时回调就会执行
   */
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.apiopen.top/getJoke')
      console.log('res', res)
    }
    fetchData()
  }, [])
  const [showD1, setShowD1] = useState(true)

  return (
    <div className="App">
      {/* 列表渲染 */}
      <h2>列表渲染</h2>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>{listDom}</ul>
      {/* 条件渲染 */}
      <h2>条件渲染</h2>
      <div>{isLoading ? <span>张三</span> : <span>请登录</span>}</div>
      <div>{isLoading && <span>张三</span>}</div>
      {/* 事件处理 */}
      <h2>事件处理</h2>
      <button onClick={handleClick1}>点击</button>
      <button onClick={e => handleClick2(e, '张三')}>点击-传递参数</button>
      {/* 组件 */}
      <h2>组件</h2>
      <Button />
      <Button1 />
      {/* useState */}
      <h2>useState</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={changeObj}>修改对象数据</button>
      <span>{obj.name}</span>
      <button onClick={changeArr}>改变数组数据</button>
      <span>{arr.join('-')}</span>
      {/* 样式 */}
      <h2>样式</h2>
      <div style={{ color: 'red', fontSize: '20px' }}>七里香</div>
      <div style={style}>晴天</div>
      <div className="foo">搁浅</div>
      {/* 动态class */}
      <h2>动态class</h2>
      <div className={`foo ${count % 2 !== 0 && 'active'}`}>你比从前快乐</div>
      {/* 使用classnames库优化写法 */}
      <div className={classNames('foo', { active: count % 2 !== 0 })}>你比从前快乐</div>
      {/* 受控表单绑定 */}
      <h2>受控表单绑定</h2>
      <input type="text" value={iptValue} onChange={e => setIptValue(e.target.value)} />
      <span>{iptValue}</span>
      {/* 获取DOM元素 */}
      <h2>获取DOM元素</h2>
      <input type="text" ref={inputRef} />
      <button onClick={getDOM}>获取DOM</button>
      {/* 父子组件通信 */}
      <h2>父子组件通信</h2>
      <A message={'父传子'} onGetSonMsg={getMsg}>
        <span>你好</span>
      </A>
      <span>{childVal}</span>
      {/* context 跨层传值 */}
      <h2>context 传值</h2>
      <MsgContext.Provider value={'contextMsg'}>
        <B />
      </MsgContext.Provider>
      {/* useEffect */}
      <h2>useEffect</h2>
      <div>
        <button onClick={() => setShowD1(false)}>卸载组件</button>
        {showD1 && <UseEffectCmp />}
      </div>
      {/* 自定义hook */}
      <h2>自定义hook</h2>
      <CustomHook />
    </div>
  )
}

export default App
