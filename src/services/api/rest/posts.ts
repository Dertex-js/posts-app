import makeRequest from '../httpClient.ts'

export const fetchPosts = () =>
  makeRequest({
    url: 'posts'
  })