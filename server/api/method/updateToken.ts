import database, {TABLES} from "../../db/database";
import crypto from 'crypto'
import {TokenType} from "../../types/types";

export default function (login: string): boolean {
    let token = crypto.randomBytes(32).toString()
    let isExistToken: boolean = this.checkToken(login)
    if (isExistToken) {
        database.update<{ token: string }>(TABLES.token, {login}, {token})
        return true
    } else {
        let refresh_token = crypto.randomBytes(32).toString()
        database.add<TokenType>(TABLES.token, {token, refresh_token, login})
    }
    return false
}