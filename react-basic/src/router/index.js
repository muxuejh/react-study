import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Login from '../pages/login'
import Article from '../pages/article'
import Layout from '../pages/layout'
import About from '../pages/about'
import Board from '../pages/board'
import NotFound from '../pages/notFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // path: '/about',
        index: true, // 默认二级路由
        element: <About />,
      },
      {
        path: '/board',
        element: <Board />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/article/:id',
    element: <Article />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
