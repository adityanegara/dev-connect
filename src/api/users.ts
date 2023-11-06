import axiosClient from './apiClient'
import { Users } from '../model/users'

const registerUser = async (
  user: Users,
  successFunction: () => void,
  rejectFunction: () => void
): Promise<void> => {}
