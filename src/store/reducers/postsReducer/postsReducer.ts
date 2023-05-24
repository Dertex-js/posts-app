import { postsTypes } from '../../actiontypes/postsTypes.ts'
import { PostsActions, PostsState } from '../../types/types.ts'

const initialState: PostsState = {
  pending: false,
  posts: []
}

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postsTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      }
    case postsTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts
      }
    default:
      return state
  }
}