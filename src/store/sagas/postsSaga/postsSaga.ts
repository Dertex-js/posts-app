import { call, put, all, takeLatest } from 'redux-saga/effects'
import { Post } from '../../../models/Post.ts'
import { postsApi } from '../../../services/api'
import { fetchPostsSuccess } from '../../actions/postsActions/postsActions.ts'
import { postsTypes } from '../../actiontypes/postsTypes.ts'

function* fetchPostsSaga() {
  const response: Post[] = yield call(postsApi.fetchPosts)
  yield put(fetchPostsSuccess({
    posts: response
  }))
}

function* postsSaga() {
  yield all([ takeLatest(postsTypes.FETCH_POST_REQUEST, fetchPostsSaga) ])
}

export default postsSaga