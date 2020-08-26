export type UserType = {
    login: string
    name: string
    create_at: number
}

export type TokenType = {
    token: string
    refresh_token: string
}

export type KeyType = {
    code: string
}

export type DataType = KeyType & TokenType & UserType