export type UserType = {
    login: string
    name: string
    create_at: number
}

export type TokenType = {
    token: string
    refresh_token: string
    login: string
}

export type KeyType = {
    code: string
    login: string
}

export type DataType = KeyType & TokenType & UserType