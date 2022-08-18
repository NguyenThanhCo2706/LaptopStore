// export default interface ResponseGenerator<T> {
//   config?: any,
//   data?: T,
//   headers?: any,
//   request?: any,
//   status?: number,
//   statusText?: string
// }



export default interface ResponseGenerator {
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  statusText?: string
}
