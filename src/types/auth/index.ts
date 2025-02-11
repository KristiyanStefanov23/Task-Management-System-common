export type AccessTokenPayload = {
	sub: string
	name: string
	admin: boolean
	iat: number
}

export type RefreshTokenPayload = Pick<AccessTokenPayload, 'sub' | 'iat'>


export type LoginCredentials = {
	email: string
	password: string
}

export type RegisterCredentials = {
	email: string
	name: string
	password: string
	repeatPassword: string
}