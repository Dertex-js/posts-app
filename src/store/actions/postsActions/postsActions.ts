import { postsTypes } from '../../actiontypes/postsTypes.ts'
import {
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload
} from '../../types/types'

export const fetchPostsRequest = (): FetchPostsRequest => ({
  type: postsTypes.FETCH_POST_REQUEST
})

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: postsTypes.FETCH_POST_SUCCESS,
  payload
})