export default interface RegisterResponse {
  status: string
  message: string
  data: {
    user: {
      id: string
      name: string
      photo: string
    }
  }
}
