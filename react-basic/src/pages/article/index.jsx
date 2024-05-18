import { useParams, useSearchParams } from 'react-router-dom'

function Article() {
  /* const [params] = useSearchParams()
  const id = params.get('id')
  console.log('id', id) */

  const params = useParams()
  const { id } = params
  console.log('id', id)

  return <div>article</div>
}

export default Article
