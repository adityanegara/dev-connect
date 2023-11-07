import axiosClient from './apiClient'
import Users from '../model/users'
import { AxiosResponse } from 'axios'

export const registerUser = async (user: Users): Promise<AxiosResponse<any, any>> => {
  const userData = {
    id: user.username,
    name: user.username,
    password: user.password
  }
  return await axiosClient.post('/users', userData)
}
