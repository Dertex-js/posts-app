import { useRoutes } from 'react-router-dom'
import About from '../pages/About.tsx'
import UserDetail from '../pages/UserDetail.tsx'
import PostList from '../pages/PostList.tsx'

const Routes = () => useRoutes([
  {
    path: '/',
    element: <PostList />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'user/:id',
    element: <UserDetail />
  }
])
export default Routes