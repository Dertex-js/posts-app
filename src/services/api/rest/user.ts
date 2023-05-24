import makeRequest from '../httpClient.ts'

export const fetchUsers = () =>
  makeRequest({
    url: 'users'
  })

export const fetchUserById = (id: number) =>
  makeRequest({
    url: `users/${id}`
  })