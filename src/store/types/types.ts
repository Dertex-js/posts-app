import { Post } from '../../models/Post.ts'
import { postsTypes } from '../actiontypes/postsTypes.ts'

export interface PostsState {
  pending: boolean
  posts: Post[]
}

export interface FetchPostsSuccessPayload {
  posts: Post[]
}

export interface FetchPostsRequest {
  type: typeof postsTypes.FETCH_POST_REQUEST
}

export type FetchPostsSuccess = {
  type: typeof postsTypes.FETCH_POST_SUCCESS
  payload: FetchPostsSuccessPayload
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess