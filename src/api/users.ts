import axiosClient from './apiClient'
import Users from '../model/Iusers'
import { AxiosResponse } from 'axios'

export const registerUser = async (
  user: Users
): Promise<AxiosResponse<any, any>> => {
  const userData = {
    id: user.username,
    name: user.username,
    password: user.password
  }
  return await axiosClient.post('/users', userData)
}

export const loginUser = async (
  username: string,
  password: string
): Promise<AxiosResponse<any, any>> => {
  const loginData = {
    id: username,
    password
  }
  return await axiosClient.post('/login', loginData)
}
