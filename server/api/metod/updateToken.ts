import database, {TABLES} from "../../db/database";
import crypto from 'crypto'
import SECRET from "../../config/SECRET";
import {TokenType} from "../../types/types";

export default (login: string) => {
    let newToken = crypto.randomBytes(32).toString()
    let tokenUpdate = database.update(TABLES.token, {login}, {token: newToken})
    if(!tokenUpdate){
        database.add<TokenType>(TABLES.token, {token: newToken, refresh_token:''})
    }
    console.log(newToken,'NEW TOKEN')

}