import { combineReducers } from 'redux'
import postsReducer from './postsReducer/postsReducer.ts'

const rootReducer = combineReducers({
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer