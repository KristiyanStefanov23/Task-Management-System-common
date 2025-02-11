type SuccessBody = { success: boolean }
type ErrorBody = { message: string }
export type SuccessErrBody = SuccessBody | ErrorBody
