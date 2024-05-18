import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h2>layout</h2>
      <Link to={'/'}>关于</Link>
      <Link to={'/board'}>面板</Link>
      <Outlet />
    </div>
  )
}

export default Layout
