function A(props) {
  console.log('props', props)

  return (
    <div>
      <div>{props.message}</div>
      <div>{props.children}</div>
      <button onClick={() => props.onGetSonMsg('子组件修改了')}>子传父</button>
    </div>
  )
}

export default A
