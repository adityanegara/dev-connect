export default interface AuthenticationResponse {
  status: string
  message: string
  data?: {
    user: {
      id: string
      name: string
      photo: string
    }
  }
}
