type SuccessBody = { success: boolean }
type ErrorBody = { message: string }
export type ResponseSuccessErrBody = SuccessBody | ErrorBody
