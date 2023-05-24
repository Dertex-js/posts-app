import axios, { ParamsSerializerOptions, ResponseType } from 'axios'

export interface IRequest {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch'
  responseType?: ResponseType
  params?: unknown
  data?: unknown
  paramsSerializer?: ParamsSerializerOptions
}

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const makeRequest = ({url = "/", method = "get", params, data, responseType = "json", paramsSerializer }: IRequest) =>
  axios({
    url: baseUrl + url,
    method,
    responseType,
    params,
    data,
    paramsSerializer
  }).then(({data}) => data)

export default makeRequest
