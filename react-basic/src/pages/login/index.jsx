import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>login</h2>
      <Link to={'/article'}>文章（声明式）</Link>
      <button onClick={() => navigate('/article')}>文章（编程式）</button>
      <button onClick={() => navigate('/article?id=100&name=zs&age=18')}>searchParams传参</button>
      <button onClick={() => navigate('/article/101')}>Params传参</button>
    </div>
  )
}

export default Login
