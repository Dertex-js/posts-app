import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsRequest } from '../store/actions/postsActions/postsActions.ts'
import { RootState } from '../store/reducers/rootReducer.ts'

const PostList = () => {
  const { posts } = useSelector((state: RootState) => state.posts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [dispatch])

  return (
    <div>
      {posts?.map((el, index) => (
        <div key={index}>{el.title}</div>
      ))}
    </div>
  )
}

export default PostList