import { useState } from 'react'
import classNames from 'classnames'
import './app.css'

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

  // useState
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
    </div>
  )
}

export default App
