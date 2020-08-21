export type StateType<T> = {
    user: T extends UserType ? UserType : null,
    token: TokenType
}

export type TokenType = string

export type UserType = {
    name: string
    id: number
    token: TokenType
}

export type Body = { login: string }
