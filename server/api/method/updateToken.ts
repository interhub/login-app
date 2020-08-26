import database, {TABLES} from "../../db/database";
import crypto from 'crypto'
import {TokenType} from "../../types/types";

export default function (oldToken: string, login?: string): boolean {
    let newToken = crypto.randomBytes(32).toString()
    let isExistToken: boolean = this.checkToken(oldToken)
    if (isExistToken && !login) {
        database.update<{ token: string }>(TABLES.token, {token: oldToken}, {token: newToken})
        return true
    }
    if (login) {
        let refresh_token = crypto.randomBytes(32).toString()
        database.add<TokenType>(TABLES.token, {token: newToken, refresh_token, login})
        return true
    }
    return false
}