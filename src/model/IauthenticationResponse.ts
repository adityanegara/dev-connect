export default interface AuthenticationResponse {
  status: string
  message: string
  data?: {
    token: string
    user: {
      id: string
      name: string
      photo: string
    }
  }
}
