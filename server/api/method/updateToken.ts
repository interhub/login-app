import database, {TABLES} from "../../db/database";
import crypto from 'crypto'
import {TokenType} from "../../types/types";

const getRandomString = (): string => crypto.createHash('sha256').update(crypto.randomBytes(10).toString()).digest('hex')
export default function (oldToken: string, login?: string): boolean {
    let newToken = getRandomString()
    let isExistToken: boolean = this.checkToken(oldToken)
    if (isExistToken && !login) {
        database.update<{ token: string }>(TABLES.token, {token: oldToken}, {token: newToken})
        return true
    }
    if (login) {
        let refresh_token = getRandomString()
        database.add<TokenType>(TABLES.token, {token: newToken, refresh_token, login})
        return true
    }
    return false
}