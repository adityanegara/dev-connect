import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://openspace-api.netlify.app/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    const res = error.response
    if (res.status === 401) {
      console.error('Handling when unathorize')
    }
    return await Promise.reject(error)
  }
)

export default axiosClient
